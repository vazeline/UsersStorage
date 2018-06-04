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
    using System.Threading.Tasks;

    public class Repository<T, C> : IRepository<T> where T : class where C: DbContext
    {
        protected readonly C Context;

        public Repository(C ctx)
        {
            Context = ctx;
        }

        public IQueryable<T> All => Context.Set<T>();

        public IQueryable<T> AllEager(params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = Context.Set<T>();
            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query;
        }

        public T Find(int id)
        {
            return Context.Set<T>().Find(id);
        }

        public void Insert(T item)
        {
            Context.Entry(item).State = EntityState.Added;
        }

        public void Update(T item)
        {
            Context.Set<T>().Attach(item);
            Context.Entry(item).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            var item = Context.Set<T>().Find(id);
            Context.Set<T>().Remove(item);
        }
        public async Task<int> SaveAsync()
        {
            return await Context.SaveChangesAsync();
        }

        public int Save()
        {
            return Context.SaveChanges();
        }
        public void Dispose()
        {
            Context.Dispose();
        }
    }
}