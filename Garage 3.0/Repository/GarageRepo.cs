using Garage_3._0.DataAccessLayer;
using Garage_3._0.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Garage_3._0.Repository
{
    public class GarageRepo
    {
        public GarageContext GContext { get; set; }

        public GarageRepo()
        {
            GContext = new GarageContext();
        }

        public IEnumerable<Vehicle> getVehicles()
        {
            return GContext.Vehicles.Select(v => v);
        }
    }
}