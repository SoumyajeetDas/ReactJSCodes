using Backend.Data;
using Backend.Models;
using Backend.Repository.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ApplicationDbContext context;

        public EmployeeRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Employee>> GetEmployeeAll()
        {
            var employess = await context.Employees.ToListAsync();

            return employess;
        }

        public async Task<Employee> GetEmployee(int id)
        {
            return await context.Employees.FindAsync(id);
        }

        public async Task<bool> CreateEmployee(Employee emp)
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

        public async Task<bool> UpdateEmployee(Employee emp,int id)
        {
            try
            {
                emp.Id = id;
                context.Employees.Update(emp);
                await context.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
            
        }

        public async Task<bool> DeleteEmployee(Employee emp)
        {
            try
            {
                context.Employees.Remove(emp);
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
