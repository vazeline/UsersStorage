using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Results;
using Challenge.Data.Entities;
using Challenge.Data.Repositories;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ChallengeWebApi;
using ChallengeWebApi.Controllers;
using ChallengeWebApi.Models;
using ChallengeWebApi.Tests.Properties;

namespace ChallengeWebApi.Tests.Controllers
{
    [TestClass]
    public class UsersControllerTest
    {
        private UsersController controller;

        private static bool init = false;
        public UsersControllerTest()
        {
            //if (init)
            {
                AutoMapper.Mapper.Reset();
                AutoMapperConfig.RegisterMappings();
                init = true;
            }
        }

        /// <summary>
        /// checking that large file is imported. upload method should be made more quick 
        /// </summary>
        [TestMethod]
        public void ConsumeLargeData()
        {
            var repo = new UsersRepository();
            using (controller = new UsersController(repo))
            {
                MultipartContent fd = new MultipartContent();
                fd.Add(new StreamContent(new MemoryStream(Resource.Data_Large)));
                controller.Request = new HttpRequestMessage() {Content = fd};
                int imported = With.RollBack(repo.Context,
                    (a) =>
                    {
                        int cnt1 = ((OkNegotiatedContentResult<IEnumerable<UserModel>>) controller.GetUsersList()).Content.Count();
                        var res = controller.Upload().Result;
                        int cnt2 = ((OkNegotiatedContentResult<IEnumerable<UserModel>>) controller.GetUsersList()).Content.Count();

                        return cnt2 - cnt1;
                    });

                Assert.IsTrue(imported > 7700);
            }
        }

        [TestMethod]
        public void Get()
        {
            using (controller = new UsersController(new UsersRepository()))
            {
                IHttpActionResult result = controller.GetUsersList();

                Assert.IsNotNull(result);
                Assert.IsInstanceOfType(result, typeof(OkNegotiatedContentResult<IEnumerable<UserModel>>));
                Assert.IsTrue(((OkNegotiatedContentResult<IEnumerable<UserModel>>) result).Content.Any());
            }
        }

        [TestMethod]
        public void GetById()
        {
            using (controller = new UsersController(new UsersRepository()))
            {
                var result = (OkNegotiatedContentResult<UserModel>) controller.GetUser(1);
                Assert.IsTrue(result != null && result.Content.Id == 1);
            }
        }

        /// <summary>
        /// check insert User methods
        /// </summary>
        [TestMethod]
        public void Post()
        {
            var repo = new UsersRepository();
            using (controller = new UsersController(repo))
            {

                var res = With.RollBack(repo.Context,
                    (a) =>
                    {
                        var created = (controller.PostUser(new UserModel {FirstName = "asdf", Salary = 100}).Result as CreatedAtRouteNegotiatedContentResult<UserModel>)?.Content;
                        return repo.Find(created.Id);
                    });

                Assert.IsTrue(res.Id >= 0 && res.FirstName == "asdf");
            }
        }

        /// <summary>
        /// check update function
        /// </summary>
        [TestMethod]
        public void Put()
        {
            var repo = new UsersRepository();
            using (controller = new UsersController(repo))
            {

                var res = With.RollBack(repo.Context,
                    (a) =>
                    {
                        var usr = new User() {FirstName = "qwer", Salary = 111};
                        repo.Insert(usr);
                        repo.Save();
                        repo.Context.Entry(usr).State = System.Data.Entity.EntityState.Detached;

                        controller.PutUser(new UserModel {FirstName = "asdf2", Salary = 120, Id = usr.Id, Version = Convert.ToBase64String(usr.Version)});
                        return repo.Find(usr.Id);
                    });

                Assert.IsTrue(res.Id >= 0 && res.FirstName == "asdf2" && res.Salary == 120);
            }
        }

        /// <summary>
        /// check two updates that executed simultaneously
        /// </summary>
        [TestMethod, ExpectedException(typeof(InvalidOperationException))]
        public void ConcurrentUpdate()
        {
            var repo = new UsersRepository();
            using (controller = new UsersController(repo))
            {
                With.RollBack(repo.Context,
                    (a) =>
                    {
                        var usr = new User() {FirstName = "qwer", Salary = 111};
                        repo.Insert(usr);
                        repo.Save();
                        repo.Context.Entry(usr).State = System.Data.Entity.EntityState.Detached;

                        controller.PutUser(new UserModel {FirstName = "asdf2", Salary = 120, Id = usr.Id, Version = Convert.ToBase64String(usr.Version)});

                        controller.PutUser(new UserModel {FirstName = "asdf3", Salary = 150, Id = usr.Id, Version = Convert.ToBase64String(usr.Version)});

                        return repo.Find(usr.Id);
                    });
            }
        }

        /// <summary>
        /// check delete logic
        /// </summary>
        [TestMethod]
        public void Delete()
        {
            var repo = new UsersRepository();
            using (controller = new UsersController(repo))
            {

                var res = With.RollBack(repo.Context,
                    (a) =>
                    {
                        var usr = new User() {FirstName = "qwer", Salary = 111};
                        repo.Insert(usr);
                        repo.Save();
                        repo.Context.Entry(usr).State = System.Data.Entity.EntityState.Detached;

                        var r = controller.DeleteUser(usr.Id).Result;
                        return repo.Find(usr.Id);
                    });

                Assert.IsTrue(res == null);
            }
        }
    }
}
