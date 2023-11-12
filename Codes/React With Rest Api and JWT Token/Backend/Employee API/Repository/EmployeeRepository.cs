using Employee_API.Data;
using Employee_API.Models;
using Employee_API.Repository.IRepository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_API.Repository
{
    
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ApplicationDbContext context;
        public EmployeeRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public async Task<List<Employee>> GetAll()
        {
            var emps = await context.Employees.ToListAsync();

            return emps;
        }

        public async Task<bool> Create(Employee emp)
        {
            try
            {
                await context.Employees.AddAsync(emp);
                await context.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
