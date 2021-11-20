using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using server.Config;
using server.Dtos;
using server.Models;

namespace server.Services.DepartmentService
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public DepartmentService(IMapper mapper, DataContext context)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ServiceResponse<List<GetDepartmentDto>>> AddDepartment(AddDepartmentDto newDepartment)
        {
            ServiceResponse<List<GetDepartmentDto>> serviceResponse = new ServiceResponse<List<GetDepartmentDto>>();
            try
            {
                Department department = _mapper.Map<Department>(newDepartment);

                await _context.Departments.AddAsync(department);
                await _context.SaveChangesAsync();
                serviceResponse.Data = (_context.Departments.Select(c => 
                _mapper.Map<GetDepartmentDto>(c))).ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetDepartmentDto>>> GetAllDepartments()
        {
            ServiceResponse<List<GetDepartmentDto>> serviceResponse = new ServiceResponse<List<GetDepartmentDto>>();
            List<Department> dbDepartments = await _context.Departments
                                                .Include(c => c.Users)
                                                .ToListAsync();
            serviceResponse.Data = dbDepartments.Select(c => _mapper.Map<GetDepartmentDto>(c)).ToList();
            return serviceResponse;
        }
    }
}