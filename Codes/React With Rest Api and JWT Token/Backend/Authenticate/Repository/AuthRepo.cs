using Authenticate.Data;
using Authenticate.Model;
using Authenticate.Repository.IRepository;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Authenticate.Repository
{
    public class AuthRepo : IAuthRepo
    {
        private readonly ApplicationDbContext context;
        private readonly IConfiguration configuration;

        public AuthRepo(ApplicationDbContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }

        public User Login(User user)
        {
            var response = String.Empty;
            var userobj = Authenticate(user);
            if (userobj != null)
            {
                var tokenString = GenerateJSONWebToken(userobj.Username);
                User user1 = new User()
                {
                    Username = userobj.Username,
                    Password = userobj.Password,
                    Token = tokenString

                };
                return user1;
            }
            return null;

        }

        public User Authenticate(User user)
        {
            User obj = context.Users.Where(x => x.Username == user.Username && x.Password == user.Password).Select(x => new User()
            {
                Username = x.Username,
                Password = x.Password
            }).FirstOrDefault();

            return obj;

        }

        private string GenerateJSONWebToken(string username)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType,username),


            };
            var token = new JwtSecurityToken(

               issuer: configuration["Jwt:Issuer"],
               audience: configuration["JWT:ValidAudience"],
               claims: claims,
               expires: DateTime.Now.AddMinutes(2),
               signingCredentials: credentials
               );


            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<bool> Register(User user)
        {
            try
            {
                await context.Users.AddAsync(user);
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
