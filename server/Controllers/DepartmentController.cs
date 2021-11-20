using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Dtos;
using server.Services.DepartmentService;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;
        public DepartmentController(IDepartmentService DepartmentService)
        {
            _departmentService = DepartmentService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _departmentService.GetAllDepartments());
        }

        [HttpPost]
        public async Task<IActionResult> AddDepartment(AddDepartmentDto newDepartment)
        {
            return Ok(await _departmentService.AddDepartment(newDepartment));
        }
    }
}