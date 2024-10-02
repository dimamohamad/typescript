using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task2angular.Server.Dto;
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

        [HttpPost("add")]
        public IActionResult addServices([FromForm] addServiceDto addservice)
        {

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImage");
            if (!Directory.Exists(folder)) {
            Directory.CreateDirectory(folder);
            }
            var fileImage = Path.Combine(folder, addservice.ServiceImage.FileName);
            using (var stream = new FileStream(fileImage, FileMode.Create)) {
                addservice.ServiceImage.CopyToAsync(stream);
            
            }
            
            var newservice = new Service
            {
                ServiceName = addservice.ServiceName,
                ServiceDescription = addservice.ServiceDescription,
                ServiceImage = addservice.ServiceImage.FileName
            };

            if (_db.Services.Any(s => s.ServiceName == addservice.ServiceName))
            {
                return Conflict("A service with the same name already exists.");
            }
            _db.Services.Add(newservice);
            _db.SaveChanges();
            return Ok(newservice);
        }

    } }

