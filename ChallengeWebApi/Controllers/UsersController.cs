using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Challenge.Data;
using Challenge.Data.Entities;
using Challenge.Data.Interfaces;
using ChallengeWebApi.Models;

namespace ChallengeWebApi.Controllers
{
    public class UsersController : ApiController
    {
        private IUsersRepository _usersRepo;

        public UsersController(IUsersRepository usersRepo)
        {
            _usersRepo = usersRepo;
        }

        [HttpPost, Route("api/users/upload")]
        public async Task<IHttpActionResult> Upload()
        {
            if (!Request.Content.IsMimeMultipartContent())
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

            var provider = new MultipartMemoryStreamProvider();
            try
            {
                return await Request.Content.ReadAsMultipartAsync(provider).
                    ContinueWith<IHttpActionResult>(o =>
                        {
                            MemoryStream tempStream = new MemoryStream();
                            try
                            {
                                foreach (var cont in provider.Contents)
                                {
                                    cont.ReadAsStreamAsync().Result.CopyTo(tempStream);
                                    tempStream.Seek(0, SeekOrigin.End);

                                    StreamContent streamContent = new StreamContent(tempStream);
                                    foreach (var header in Request.Content.Headers)
                                        streamContent.Headers.Add(header.Key, header.Value);

                                    tempStream.Position = 0;
                                    var str = Encoding.UTF8.GetString(tempStream.GetBuffer());
                                    StringReader sr = new StringReader(str);
                                    string userLine = null;
                                    while ((userLine = sr.ReadLine()) != null)
                                    {

                                        User u = Challenge.Data.Entities.User.DeserializeLine(userLine);
                                        if (u != null)
                                            _usersRepo.Insert(u);

                                    }
                                    _usersRepo.Save();
                                }
                            }
                            catch (Exception ex)
                            {
                                //log error
                                return InternalServerError(ex);
                            }
                            
                            return Redirect(new Uri("/react/uploadsuccess", UriKind.Relative));
                        }
                    );
            }
            catch (Exception ex)
            {
                //logerror
                return InternalServerError(ex);
            }
        }

        [HttpGet, ResponseType(typeof(IEnumerable<UserModel>))]
        public IHttpActionResult GetUsersList()
        {
            IEnumerable<UserModel> users;
            try
            {
                users = _usersRepo.GetAllUsers().Select(AutoMapper.Mapper.Map<UserModel>);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return Ok(users);
        }

        [ResponseType(typeof(UserModel)), HttpGet, Route("api/users/getuser")]
        public IHttpActionResult GetUser(int id)
        {
            UserModel user = AutoMapper.Mapper.Map<UserModel>(_usersRepo.Find(id));
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [ResponseType(typeof(void)), HttpPut, ActionName("update")]
        public IHttpActionResult PutUser(UserModel user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userobj = AutoMapper.Mapper.Map<User>(user);
            _usersRepo.Update(userobj);

            try
            {
                _usersRepo.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(user.Id))
                {
                    return NotFound();
                }

                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [ResponseType(typeof(UserModel)), HttpPost, ActionName("new")]
        public async Task<IHttpActionResult> PostUser(UserModel user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userobj = AutoMapper.Mapper.Map<User>(user);
            _usersRepo.Insert(userobj);
            return await _usersRepo.SaveAsync().ContinueWith(x => CreatedAtRoute("DefaultApi", new {id = userobj.Id}, user));
        }

        [ResponseType(typeof(UserModel)), HttpDelete, ActionName("delete")]
        public async Task<IHttpActionResult> DeleteUser(int id)
        {
            User user = _usersRepo.Find(id);
            if (user == null)
                return NotFound();

           _usersRepo.Delete(user.Id);
           return await _usersRepo.SaveAsync().ContinueWith<IHttpActionResult>(Ok);
        }
        private bool UserExists(int id)
        {
            return _usersRepo.Find(id) != null;
        }

    }
}