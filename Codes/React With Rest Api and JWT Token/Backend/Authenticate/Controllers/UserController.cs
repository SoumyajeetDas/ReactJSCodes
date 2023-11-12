using Authenticate.Model;
using Authenticate.Repository.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Authenticate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IAuthRepo authRepo;

        public UserController(IAuthRepo authRepo)
        {
            this.authRepo = authRepo;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            var user1 = authRepo.Login(user);

            if (user1 == null)
                return Unauthorized(user1);

            else {
                user1.Password = String.Empty;
                return Ok(user1);
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            var status = await authRepo.Register(user);

            if (status)
            {
                return StatusCode(201,"User Registered");
            }
            else
            {
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
