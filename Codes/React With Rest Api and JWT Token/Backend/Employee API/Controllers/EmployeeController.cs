using Employee_API.Models;
using Employee_API.Repository.IRepository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    [Authorize]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository repo;
        public EmployeeController(IEmployeeRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet("")]
        public async Task<IActionResult> Index()
        {
            var emps = await repo.GetAll();

            return Ok(emps);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create(Employee emp)
        {
            if (emp == null)
                return BadRequest("Employee is Null");

            var status = await repo.Create(emp);

            if (status)
            {
                return StatusCode(201, "Employee Added");
            }
            else
            {
                return StatusCode(500,"Internal Server Error");
            }
        }
    }
}
