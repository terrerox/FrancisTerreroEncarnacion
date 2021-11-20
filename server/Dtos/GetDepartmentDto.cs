using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dtos
{
    public class GetDepartmentDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<GetUserDto> Users { get; set; }
    }
}