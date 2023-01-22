using Microsoft.AspNetCore.Mvc;

namespace GroceryListAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroceryController : ControllerBase
    {

        private readonly ILogger<GroceryController> _logger;

        public GroceryController(ILogger<GroceryController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GroceryList")]
        public async Task<IActionResult> Get()
        {
            var groceryList = new List<Grocery>
            {
                new Grocery {Id = 1, Name = "Apple"},
                new Grocery {Id = 2, Name = "Banana"}
            };

            return Ok(groceryList);
        }
    }
}