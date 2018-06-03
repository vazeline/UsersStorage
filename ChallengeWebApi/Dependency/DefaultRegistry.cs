using Challenge.Data.Interfaces;
using Challenge.Data.Repositories;
using StructureMap.Graph;

namespace ChallengeWebApi.Dependency
{
    public class DefaultRegistry : StructureMap.Registry
    {
        #region Constructors and Destructors

        public DefaultRegistry()
        {
            Scan(
                scan => {
                    scan.TheCallingAssembly();
                    scan.WithDefaultConventions();
                });
            For<IUsersRepository>().Use<UsersRepository>();
        }

        #endregion
    }
}