using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;
using Challenge.Data.Entities;
using Challenge.Data.Interfaces;

namespace Challenge.Data.Repositories
{
    public class UsersRepository : Repository<User>, IUsersRepository
    {
        public UsersRepository() : base(new UsersContext())
        {
            
        }
    }
}