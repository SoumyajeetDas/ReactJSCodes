using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Repository.IRepository
{
    public interface IEmployeeRepository
    {
        Task<bool> CreateEmployee(Employee emp);
        Task<bool> DeleteEmployee(Employee emp);
        Task<Employee> GetEmployee(int id);
        Task<IEnumerable<Employee>> GetEmployeeAll();
        Task<bool> UpdateEmployee(Employee emp, int id);
    }
}
