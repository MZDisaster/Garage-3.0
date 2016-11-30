using Garage_3._0.DataAccessLayer;
using Garage_3._0.Models;
using Garage_3._0.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Garage_3._0.Extensions;
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
            return GContext.Set<Vehicle>().Include("Owner").Include("VehicleType");
        }

        public IEnumerable<VehicleType> getVehicleTypes()
        {
            return GContext.Set<VehicleType>();
        }

        public void AddVehicle(VehicleCreateViewModel VCVModel)
        {
            Vehicle toAdd = VCVModel.ConvertyToVehicleFromCreateModel();
            toAdd.Owner = GContext.Owners.Find(toAdd.OwnerId);
            toAdd.VehicleType = GContext.VehicleTypes.Find(toAdd.VehicleTypeId);
            GContext.Vehicles.Add(toAdd);
            GContext.SaveChanges();
        }

        public void AddOwner(Owner owner)
        {
            GContext.Owners.Add(owner);
            GContext.SaveChanges();
        }



        public IEnumerable<Owner> GetOwners()
        {
            return GContext.Set<Owner>();
        }
    }
}