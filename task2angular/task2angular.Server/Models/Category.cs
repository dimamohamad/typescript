using System;
using System.Collections.Generic;

namespace task2angular.Server.Models;

public partial class Category
{
    public int CategoryId { get; set; }

    public string CategoryName { get; set; } = null!;

    public string? CategoryImage { get; set; }

    public int SubServiceId { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();

    public virtual SubService SubService { get; set; } = null!;
}
