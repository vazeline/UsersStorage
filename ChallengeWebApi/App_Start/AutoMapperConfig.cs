using AutoMapper;
using Challenge.Data.Entities;
using ChallengeWebApi.Models;

namespace ChallengeWebApi
{
    public class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<UserModel, User>(MemberList.None).ReverseMap();
            });
        }
    }
}