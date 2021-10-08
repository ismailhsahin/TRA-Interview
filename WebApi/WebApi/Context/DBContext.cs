using Microsoft.EntityFrameworkCore;

namespace WebApi.Context
{
    public class DBContext : DbContext
    {
        
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
