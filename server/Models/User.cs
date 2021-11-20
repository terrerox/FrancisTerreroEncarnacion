using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string IdentityCard { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public Gender Gender { get; set; }
        public DateTime BirthDate { get; set; }
        [ForeignKey("Department")]
        public Guid DepartmentId { get; set; }
        public Department Department { get; set; }
        public string Position { get; set; }
        public string Manager { get; set; }
    }
}