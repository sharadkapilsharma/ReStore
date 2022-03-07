using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTO
{
    public class OrderItemDto
    {
      public int ProductId { get; set; }  
      public string Name { get; set; }
      public string ProductUrl { get; set; }
      public long Price { get; set; }
      public int Quantity { get; set; }
    }
}