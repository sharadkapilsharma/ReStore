using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    // 1 user : 1 address relationship
    public class User : IdentityUser<int>
    {
        public UserAddress Address { get; set; }
    }
}