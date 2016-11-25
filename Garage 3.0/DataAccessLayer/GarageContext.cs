using Garage_3._0.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Garage_3._0.DataAccessLayer
{
    public class GarageContext : DbContext
    {
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<VehicleType> VehicleTypes { get; set; }

        public GarageContext() : base("DefaultConnection")
        {

        }
    }
}