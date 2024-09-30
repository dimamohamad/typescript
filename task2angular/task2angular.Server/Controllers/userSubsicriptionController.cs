using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task2angular.Server.Dto;
using task2angular.Server.Models;

namespace task2angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userSubsicriptionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public userSubsicriptionController(MyDbContext db)
        {
            _db= db;    
                
        }

        [HttpPost]
        public IActionResult useSubs([FromBody] usersubscriptionDTO subs) { 
           var subsSC=_db.Subscriptions.Where(p=>p.SubscriptionId == subs.SubscriptionId).FirstOrDefault();
            var amount = subsSC.SubscriptionAmount;
            var startdate=DateOnly.FromDateTime(DateTime.Now);
            var enddate= DateOnly.FromDateTime(DateTime.Now);


            switch (amount)
            {
                case "9.99":
                    enddate = startdate.AddDays(15);break;
                case "19.99":
                    enddate = startdate.AddMonths(2); break;
                case "29.99":
                    enddate = startdate.AddMonths(4); break;



            }
            //var id = _db.UserSubscriptions.Any() ? _db.UserSubscriptions.Max(p => p.Id) + 1 : 1;
            var userSubscription = new UserSubscription
            {
                //Id = id+1,
                SubscriptionId = subsSC.SubscriptionId,
                SubServiceId = subsSC.SubscriptionId,
                StartDate = startdate,
                EndDate = enddate
            };
            _db.UserSubscriptions.Add(userSubscription);
            _db.SaveChanges();
            return Ok();


        }

    }
}
