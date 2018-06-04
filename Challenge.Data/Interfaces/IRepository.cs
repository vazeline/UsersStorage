using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Challenge.Data.Interfaces
{
    public interface IRepository<T> : IDisposable where T : class
    {
        IQueryable<T> All { get; }
        IQueryable<T> AllEager(params Expression<Func<T, object>>[] includes);
        T Find(int id);
        void Insert(T entity);
        void Update(T entity);
        void Delete(int id);
        int Save();
        Task<int> SaveAsync();
    }
}
