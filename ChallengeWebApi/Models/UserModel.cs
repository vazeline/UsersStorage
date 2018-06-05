using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChallengeWebApi.Models
{
    using System.ComponentModel.DataAnnotations;

    /// <summary>
    /// user's business logic class
    /// </summary>
    public class UserModel
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public decimal? Salary { get; set; }

        /// <summary>
        /// SalaryRatio = IndividualSalary / TotalSalary
        /// </summary>
        public string SalaryRatio { get; set; }

        /// <summary>
        /// timestamp of current row
        /// </summary>
        public string Version { get; set; }
    }
}