using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task2angular.Server.Models;

namespace task2angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly MyDbContext _db;

        public ProductsController(MyDbContext db)
        {
            _db = db;



        }

        [HttpGet]
        public IActionResult Getproducts()
        {

            var service = _db.Products.ToList();
            return Ok(service);

        }






    }
}
