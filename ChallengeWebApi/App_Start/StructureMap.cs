using System.Web.Http;
using ChallengeWebApi.Dependency;
using StructureMap;

namespace ChallengeWebApi
{
    public static class Structuremap
    {
        // todo: replace static with something like httpcontext.items
        public static StructureMapDependencyScope StructureMapDependencyScope { get; set; }

        public static void Register(HttpConfiguration config)
        {
            IContainer container = IoC.Initialize();
            StructureMapDependencyScope = new StructureMapDependencyScope(container);
            config.DependencyResolver = new StructureMapWebApiDependencyResolver(container);
        }

    }
}