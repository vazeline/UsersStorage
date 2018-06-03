using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Challenge.Data.Interfaces;

namespace Challenge.Data.Repositories
{
    using System;
    using System.Data;
    using System.Data.Entity;
    using System.Linq;
    using System.Linq.Expressions;

    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DbContext context;

        public Repository(DbContext ctx)
        {
            context = ctx;
        }

        public IQueryable<T> All
        {
            get { return context.Set<T>(); }
        }

        public IQueryable<T> AllEager(params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = context.Set<T>();
            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query;
        }

        public T Find(int id)
        {
            return context.Set<T>().Find(id);
        }

        public void Insert(T item)
        {
            context.Entry(item).State = EntityState.Added;
        }

        public void Update(T item)
        {
            context.Set<T>().Attach(item);
            context.Entry(item).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            var item = context.Set<T>().Find(id);
            context.Set<T>().Remove(item);
        }
        public int Save()
        {
            return context.SaveChanges();
        }
        public void Dispose()
        {
            context.Dispose();
        }
    }
}