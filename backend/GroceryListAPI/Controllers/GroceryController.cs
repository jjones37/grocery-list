using Microsoft.AspNetCore.Mvc;

namespace GroceryListAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroceryController : ControllerBase
    {

        private readonly DataContext _context;

        public GroceryController(DataContext context
            )
        {
            _context = context;
        }

        [HttpGet("GroceryList")]
        public async Task<ActionResult<List<Grocery>>> Get()
        {
            return Ok(await _context.Groceries.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Grocery>>> AddGrocery(Grocery grocery)
        {
            _context.Groceries.Add(grocery);
            await _context.SaveChangesAsync();

            return Ok(await _context.Groceries.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Grocery>>> Delete(int id)
        {
            var grocery = await _context.Groceries.FindAsync(id);
            if (grocery == null) return BadRequest("Grocery item not found");

            _context.Groceries.Remove(grocery);
            await _context.SaveChangesAsync();

            return Ok(await _context.Groceries.ToListAsync());
        }
    }
}