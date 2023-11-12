using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Employee
    {
        [Key]
        public int Id { set; get; }

        [Required(ErrorMessage ="Enter the username")]
        public string Name { set; get; }

        [Required(ErrorMessage = "Enter the age")]
        public int Age { set; get; }

        [Required(ErrorMessage = "Enter the language")]
        public string Lang { set; get; }
    }
}
