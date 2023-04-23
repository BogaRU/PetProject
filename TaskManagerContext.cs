using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace PetProject
{
    public class TaskManagerContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public TaskManagerContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<Task> Tasks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_configuration.GetConnectionString("DefaultConnection"));
        }
    }
}
