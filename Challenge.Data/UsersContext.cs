using System.Data.Entity;
using Challenge.Data.Entities;

namespace Challenge.Data
{
    public class UsersContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<VUser> VUsers { get; set; }
        public UsersContext() : base("name=UsersDB") { }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<UsersContext>(null);
            modelBuilder.Configurations.Add(new UserMapping());
        }

    }
}
