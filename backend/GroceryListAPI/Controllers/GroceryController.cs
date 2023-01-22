using Microsoft.AspNetCore.Mvc;

namespace GroceryListAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroceryController : ControllerBase
    {
        private static List<Grocery> groceryList = new List<Grocery>
            {
                new Grocery {Id = 1, Name = "Apple"},
                new Grocery {Id = 2, Name = "Banana"}
            };

        private readonly ILogger<GroceryController> _logger;

        public GroceryController(ILogger<GroceryController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GroceryList")]
        public async Task<ActionResult<List<Grocery>>> Get()
        {
            return Ok(groceryList);
        }

        [HttpPost]
        public async Task<ActionResult<List<Grocery>>> AddGrocery(Grocery grocery)
        {
            groceryList.Add(grocery);
            return Ok(groceryList);
        }
    }
}