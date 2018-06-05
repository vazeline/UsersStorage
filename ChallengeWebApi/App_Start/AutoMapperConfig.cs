using System;
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
                // map user to db user to user model
                cfg.CreateMap<UserModel, User>(MemberList.None)
                    .ForMember(x => x.Version, y => y.MapFrom(u => Convert.FromBase64String(u.Version)))
                    .ReverseMap()
                    .ForMember(x => x.Version, opt => opt.MapFrom(u => Convert.ToBase64String(u.Version)));

                // map user to db user view row to user model
                cfg.CreateMap<UserModel, VUser>(MemberList.None)
                    .ForMember(x => x.Version, y => y.MapFrom(u => Convert.FromBase64String(u.Version)))
                    .ForMember(x => x.SalaryRatio, y => y.MapFrom(u => Convert.ToDecimal(u.SalaryRatio) ))
                    .ReverseMap()
                    .ForMember(x => x.Version, opt => opt.MapFrom(u => Convert.ToBase64String(u.Version)))
                    .ForMember(x => x.SalaryRatio, y => y.MapFrom(u => u.SalaryRatio == null? null : u.SalaryRatio.Value.ToString("N4") ));
            });
        }
    }
}