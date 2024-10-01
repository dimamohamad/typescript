using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task2angular.Server.Dto;
using task2angular.Server.Models;

namespace task2angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _db;

        public UserController(MyDbContext db)
        {
            _db = db;



        }

        [HttpPost]
        public IActionResult adduser([FromForm] UserDTo userdto)
        {
            var check=_db.Users.Where(a=>a.Email==userdto.Email).FirstOrDefault();
            if (check != null) {
                return BadRequest("user already exits");
            }
            var user = new User
            {
                UserName = userdto.UserName,
                Email = userdto.Email,
                Password = userdto.Password



            };

           _db.Users.Add(user);
            _db.SaveChanges();
            return Ok(user);

        }


        [HttpPost("login")]
        public IActionResult login([FromForm] LoginDto userlogin ) {
        var user = _db.Users.Where(p=>p.Email==userlogin.Email&& p.Password==userlogin.Password).FirstOrDefault();

            if (user != null) { 
                return Ok(user);
            }
            return BadRequest("this user doesnt exist");
        }
    }
}
