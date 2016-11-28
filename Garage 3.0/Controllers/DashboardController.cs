using Garage_3._0.Repository;
using Garage_3._0.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using Newtonsoft.Json;
using Garage_3._0.Models;
using Garage_3._0.ViewModels;

namespace Garage_3._0.Controllers
{
    public class DashboardController : Controller
    {
        public GarageRepo GRepo = new GarageRepo();

        JsonSerializerSettings jss = new JsonSerializerSettings { ReferenceLoopHandling = ReferenceLoopHandling.Ignore };

        public JsonResult Vehicles()
        {
            var Vehicles = GRepo.getVehicles();

            
            var result = JsonConvert.SerializeObject(Vehicles, Formatting.Indented, jss);
            
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult VehicleTypes()
        {
            var result = JsonConvert.SerializeObject(GRepo.getVehicleTypes(), Formatting.Indented, jss);
            
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        // GET: Dashboard
        public ActionResult List()
        {
            return View(GRepo.getVehicles());
        }


        // GET: Dashboard
        public ActionResult Index()
        {
            return View(GRepo.getVehicles());
        }

        // GET: Dashboard/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Dashboard/Create
        public ActionResult Create()
        {
            List<SelectListItem> types = new List<SelectListItem>();
            foreach (VehicleType t in GRepo.getVehicleTypes())
            {
                types.Add(new SelectListItem() { Text = t.Name, Value = t.Id.ToString() });
            }
            ViewBag.VehicleTypeId = types;

            List<SelectListItem> owners = new List<SelectListItem>();
            foreach (Owner o in GRepo.GetOwners())
            {
                owners.Add(new SelectListItem() { Text = o.Name, Value = o.Id.ToString() });
            }
            ViewBag.OwnerId = owners;

            return View(new VehicleCreateViewModel());
        }

        // POST: Dashboard/Create
        [HttpPost]
        public ActionResult Create([Bind(Include = "RegNr, Color, OwnerId, VehicleTypeId")]VehicleCreateViewModel newVehicle)
        {
            try
            {
                GRepo.AddVehicle(newVehicle);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Dashboard/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Dashboard/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Dashboard/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Dashboard/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
