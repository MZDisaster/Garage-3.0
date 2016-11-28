using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace Garage_3._0.Models
{
    public class VehicleType
    {
        [Key]
        [JsonIgnore]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Vehicle Type")]
        public string Name { get; set; }

        [JsonIgnore]
        public virtual List<Vehicle> Vehicles { get; set; }
    }
}