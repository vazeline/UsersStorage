using System.Data.Entity;

namespace ChallengeWebApi.Tests
{
    /// <summary>
    /// provide transaction processing to run test with rollback
    /// </summary>
    public static class With
    {

        public delegate T Method<out T>(params object[] args);


        public delegate void VoidMethod(params object[] args);

        /// <summary>
        /// run method in transaction of DbContext with rollback
        /// </summary>
        public static T RollBack<T>(DbContext session, Method<T> method)
        {
            T rc = default(T);

            if (session == null)
                return rc;

            using (var tx = session.Database.BeginTransaction())
            {
                rc = (T)method();
                tx.Rollback();
            }

            return rc;
        }

        /// <summary>
        /// run method in transaction of DbContext with rollback
        /// </summary>
        public static void RollBack(DbContext session, VoidMethod voidMethod)
        {
            if (session == null)
                return;


            Method<bool> wrapper = x =>
            {
                voidMethod();
                return true;
            };

            RollBack<bool>(session, wrapper);
        }
    }
}
