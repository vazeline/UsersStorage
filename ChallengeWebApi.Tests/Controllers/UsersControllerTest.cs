using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Challenge.Data.Entities;
using Challenge.Data.Repositories;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ChallengeWebApi;
using ChallengeWebApi.Controllers;

namespace ChallengeWebApi.Tests.Controllers
{
    [TestClass]
    public class UsersControllerTest
    {
        UsersController controller = new UsersController(new UsersRepository());
        [TestMethod]
        public void Get()
        {
            // Действие
            IHttpActionResult result = controller.GetUsersList();

            // Утверждение
            Assert.IsNotNull(result);
            //Assert.AreEqual(2, result.Count());
            //Assert.AreEqual("value1", result.ElementAt(0));
            //Assert.AreEqual("value2", result.ElementAt(1));
        }

        [TestMethod]
        public void GetById()
        {
            var result = controller.GetUser(5);

            // Утверждение
            Assert.AreEqual("value", result);
        }

        [TestMethod]
        public void Post()
        {
            // Действие
            var res = controller.PostUser(new Models.UserModel() { FirstName = "asdf", Salary = 100 });

            // Утверждение
        }

        [TestMethod]
        public void Put()
        {
            // Действие
            var result = controller.PutUser(new Models.UserModel(){FirstName = "asdf", Salary = 100});

            // Утверждение
        }

        [TestMethod]
        public void Delete()
        {
            // Действие
           var res = controller.DeleteUser(5);

            // Утверждение
        }
    }
}
