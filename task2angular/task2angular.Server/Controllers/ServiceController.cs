using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task2angular.Server.Models;

namespace task2angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ServiceController(MyDbContext db)
        {
            _db = db;


            
        }

        [HttpGet]
        public IActionResult GetServices()
        {

            var service = _db.Services.ToList();
            return Ok(service);

        }



    } }

