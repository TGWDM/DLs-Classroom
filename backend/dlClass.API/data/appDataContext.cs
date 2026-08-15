using dlClass.API.Models;
using Microsoft.EntityFrameworkCore;

namespace dlClass.API.Data;

public class appdbContext : DbContext
{
    public appdbContext(DbContextOptions<appdbContext> options)
    : base(options)
    {
        
    }

    public DbSet<Student> Students {get; set;}
}