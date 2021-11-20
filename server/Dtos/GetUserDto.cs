using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Models;

namespace server.Dtos
{
    public class GetUserDto
    {
        public Guid Id { get; set; }
        public string IdentityCard { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public Gender Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public string Position { get; set; }
        public string Manager { get; set; }
    }
}