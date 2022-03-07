using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using API.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class OrderExtensions
    {
        public static IQueryable<OrderDto> ProjectOrderToOrderDto(this IQueryable<Order> query)
        {
            return query
                .Select(o => new OrderDto
                {
                    Id = o.Id,
                    BuyerId = o.BuyerId,
                    OrderDate = o.OrderDate,
                    ShippingAddress = o.ShippingAddress,
                    DeliveryFee = o.DeliveryFee,
                    SubTotal = o.SubTotal,
                    OrderStatus = o.OrderStatus.ToString(),
                    Total = o.GetTotal(),
                    OrderItems = o.OrderItems.Select(i => new OrderItemDto
                    {
                        ProductId = i.ItemOrdered.ProductId,
                        Name = i.ItemOrdered.Name,
                        ProductUrl = i.ItemOrdered.PictureUrl,
                        Price = i.Price,
                        Quantity = i.Quantity
                    }).ToList()
                }).AsNoTracking();
        }
    }
}