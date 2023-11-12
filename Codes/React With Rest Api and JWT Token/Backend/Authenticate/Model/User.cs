using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Authenticate.Model
{
    public class User
    {
        [Key]
        public int Id { set; get; }

        [Required(ErrorMessage ="Please enter your Username")]
        public string Username { set; get; }

        [Required(ErrorMessage = "Please enter your Password")]
        public string Password { set; get; }

        [NotMapped]
        public string Token { set; get; }
    }
}
