using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Challenge.Data.Entities
{
    /// <summary>
    /// the view row data class, shouldn't be derived from table row class
    /// </summary>
    [Table("v_Users")]
    public class VUser
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public decimal? Salary { get; set; }

        public decimal? SalaryRatio { get; set; }

        public byte[] Version { get; set; }
    }
}
