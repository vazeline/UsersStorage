using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Challenge.Data.Entities
{
    [Serializable]
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public decimal? Salary { get; set; }

        [Timestamp]
        public byte[] Version { get; set; }

        public static User DeserializeLine(string userLine)
        {
            string[] split = userLine.Split(';');
            try
            {
                Func<string,string> trim = (str) => str.Trim('\t',' ', '\'', '"');

                return new User
                {
                    FirstName = trim(split[0]),
                    LastName = trim(split[1]),
                    PhoneNumber = trim(split[2]),
                    Salary = ToDecimal(trim(split[3]))
                };
            }
            catch (Exception ex)
            {
                //logerrror
            }
            return null;
        }

        private static decimal? ToDecimal(string s)
        {
            decimal res;
            if (!decimal.TryParse(s, out res))
                return null;
            return res;
        }
    }

    internal class UserMapping : EntityTypeConfiguration<User>
    {
        public UserMapping()
        {
            HasKey(t => t.Id);
            ToTable("Users");
            Property(t => t.FirstName).HasColumnName("FirstName").HasMaxLength(50);
            Property(t => t.LastName).HasColumnName("LastName").HasMaxLength(50);
            Property(t => t.PhoneNumber).HasColumnName("PhoneNumber").HasMaxLength(25);
            Property(t => t.Salary).HasColumnName("Salary");
            Property(t => t.Version).HasColumnName("Version");
        }
    }
}
