using dlClass.API.Models;
using Microsoft.EntityFrameworkCore;

namespace dlClass.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
    : base(options)
    {
        
    }

    public DbSet<Student> Students {get; set;}
}