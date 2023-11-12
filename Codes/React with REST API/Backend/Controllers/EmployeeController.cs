using Backend.Models;
using Backend.Repository.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            this.employeeRepository = employeeRepository;
        }

        [HttpGet("")]
        public async Task<IActionResult> Index()
        {
            var emps = await employeeRepository.GetEmployeeAll();

            return Ok(emps);
        }

        [HttpGet("getEmp/{id}")]
        public async Task<IActionResult> GetEmployee(int id)
        {
            var emp = await employeeRepository.GetEmployee(id);

            if (emp == null)
            {
                return NotFound("Object not present");
            }
            else
            {
                return Ok(emp);
            }
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateEmployee(Employee emp) 
        {
            if (emp == null)
            {
                return BadRequest("Object is null");
            }
            else
            {
                var status = await employeeRepository.CreateEmployee(emp);

                if (status)
                {
                    return CreatedAtAction("GetEmployee", new { id = emp.Id },emp);
                }
                else
                {
                    return StatusCode(500, "Something went wrong");
                }
                
            }
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateEmployee(int id,[FromBody]Employee emp)
        {
            if (emp == null)
            {
                return BadRequest("Object is null");
            }
            else
            {
                var status = await employeeRepository.UpdateEmployee(emp,id);

                if (status)
                {
                    return Ok("Updated");
                }
                else
                {
                    return StatusCode(500, "Something went wrong");
                }
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {

            var emp = await employeeRepository.GetEmployee(id);

            if (emp == null)
            {
                return BadRequest("Object is null");
            }
            else
            {
                var status = await employeeRepository.DeleteEmployee(emp);

                if (status)
                {
                    return Ok("Deleted");
                }
                else
                {
                    return StatusCode(500, "Something went wrong");
                }
            }
        }
    }
}
