using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChallengeWebApi.Models
{
    using System.ComponentModel.DataAnnotations;

    public class UserModel
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public decimal? Salary { get; set; }

        public string SalaryRatio { get; set; }

        public string Version { get; set; }
    }
}