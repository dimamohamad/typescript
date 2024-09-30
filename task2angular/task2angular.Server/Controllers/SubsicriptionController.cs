using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task2angular.Server.Models;

namespace task2angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class SubsicriptionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public SubsicriptionController(MyDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public IActionResult Get() {
        
        var subs= _db.Subscriptions.ToList();
            return Ok(subs);
        
        }
    }
}
