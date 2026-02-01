
using Microsoft.AspNetCore.Mvc;
using FullStackDotNetUI.Models;

namespace FullStackDotNetUI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PricingController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetPricing()
        {
            var pricing = new Pricing
            {
                Id = 1,
                Amount = 1500,
                Description = "Aftermarket pricing"
            };

            return Ok(pricing);
        }
    }
}
