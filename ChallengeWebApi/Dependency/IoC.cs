using StructureMap;

namespace ChallengeWebApi.Dependency
{
    public static class IoC
    {
        public static IContainer Initialize()
        {
            return new Container(c => c.AddRegistry<DefaultRegistry>());
        }
    }
}