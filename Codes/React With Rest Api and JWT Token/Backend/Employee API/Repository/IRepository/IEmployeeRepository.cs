using Employee_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_API.Repository.IRepository
{
    public interface IEmployeeRepository
    {
        Task<bool> Create(Employee emp);
        Task<List<Employee>> GetAll();
    }
}
