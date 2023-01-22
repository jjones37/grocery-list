using Microsoft.EntityFrameworkCore;

namespace GroceryListAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Grocery> Groceries { get; set; }
    }
}
