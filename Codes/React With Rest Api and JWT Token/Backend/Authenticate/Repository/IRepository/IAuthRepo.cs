
using Authenticate.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Authenticate.Repository.IRepository
{
    public interface IAuthRepo
    {
        User Login(User user);
        Task<bool> Register(User user);
    }
}
