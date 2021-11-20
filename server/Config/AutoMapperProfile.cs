using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using server.Dtos;
using server.Models;

namespace server.Config
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, GetUserDto>();
            CreateMap<AddUserDto, User>();
            CreateMap<Department, GetDepartmentDto>();
            CreateMap<AddDepartmentDto, Department>();
        }        
    }
}