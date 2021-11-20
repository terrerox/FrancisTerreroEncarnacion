using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Dtos;
using server.Models;

namespace server.Services.DepartmentService
{
    public interface IDepartmentService
    {
        Task<ServiceResponse<List<GetDepartmentDto>>> AddDepartment(AddDepartmentDto newDepartment);
        Task<ServiceResponse<List<GetDepartmentDto>>> GetAllDepartments();
    }
}