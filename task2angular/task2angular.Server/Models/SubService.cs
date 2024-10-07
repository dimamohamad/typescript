using System;
using System.Collections.Generic;

namespace task2angular.Server.Models;

public partial class SubService
{
    public int SubServiceId { get; set; }

    public string SubServiceName { get; set; } = null!;

    public string? SubServiceDescription { get; set; }

    public string? SubServiceImage { get; set; }

    public int ServiceId { get; set; }

    public virtual ICollection<Category> Categories { get; set; } = new List<Category>();

    public virtual Service Service { get; set; } = null!;
}
