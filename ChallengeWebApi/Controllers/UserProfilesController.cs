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

        // GET: api/UserProfiles
        public UsersController(IUsersRepository usersRepo)
        {
            _usersRepo = usersRepo;
        }

        [HttpPost, Route("api/users/upload")]
        public async Task<HttpResponseMessage> Upload()
        {
            if (!Request.Content.IsMimeMultipartContent())
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

            var provider = new MultipartMemoryStreamProvider();

            return await Request.Content.ReadAsMultipartAsync(provider).
                ContinueWith<HttpResponseMessage>( o =>
                    {
                        MemoryStream tempStream = new MemoryStream();
                        foreach (var cont in provider.Contents)
                        {
                            cont.ReadAsStreamAsync().Result.CopyTo(tempStream);
                            tempStream.Seek(0, SeekOrigin.End);

                            StreamContent streamContent = new StreamContent(tempStream);
                            foreach (var header in Request.Content.Headers)
                                streamContent.Headers.Add(header.Key, header.Value);
                            
                            tempStream.Position = 0;
                            var str = UTF8Encoding.UTF8.GetString(tempStream.GetBuffer());
                            StringReader sr = new StringReader(str);
                            string userLine = null;
                            while ((userLine = sr.ReadLine()) != null)
                            {
                                try
                                {
                                    User u = DeserializeLine(userLine);
                                    _usersRepo.Insert(u);
                                }
                                catch(Exception ex)
                                {
                                    //log error
                                }
                            }
                            _usersRepo.Save();
                            
                        }
                        return new HttpResponseMessage()
                        {
                            Content = new StringContent("File uploaded.")
                        };
                    }
                );
        }

        private User DeserializeLine(string userLine)
        {
            string[] split = userLine.Split(';');
            return new User
            {
                FirstName = split[0],
                LastName = split[1],
                PhoneNumber = split[2],
                Salary = ToDecimal(split[3])
            };
        }

        private decimal? ToDecimal(string s)
        {
            decimal res;
            if(!decimal.TryParse(s, out res))
                return null;
            return res;
        }

        // GET: api/Users/5
        [ResponseType(typeof(UserModel))]
        public IHttpActionResult GetUserProfile(int id)
        {
            UserModel userProfile = AutoMapper.Mapper.Map<UserModel>(_usersRepo.Find(id));
            if (userProfile == null)
            {
                return NotFound();
            }

            return Ok(userProfile);
        }

        // PUT: api/UserProfiles/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserProfile(int id, UserModel userProfile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userProfile.Id)
            {
                return BadRequest();
            }

            var user = AutoMapper.Mapper.Map<User>(userProfile);
            _usersRepo.Update(user);

            try
            {
                _usersRepo.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                //if (!UserProfileExists(id))
                //{
                //    return NotFound();
                //}
                //else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        [ResponseType(typeof(UserModel))]
        public IHttpActionResult PostUserProfile(UserModel userProfile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = AutoMapper.Mapper.Map<User>(userProfile);
            _usersRepo.Insert(user);
            _usersRepo.Save();

            return CreatedAtRoute("DefaultApi", new { id = userProfile.Id }, userProfile);
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(UserModel))]
        public IHttpActionResult DeleteUserProfile(int id)
        {
            User userProfile = _usersRepo.Find(id);
            if (userProfile == null)
            {
                return NotFound();
            }
            
            _usersRepo.Delete(userProfile.Id);
            _usersRepo.Save();

            return Ok(userProfile);
        }


    }
}