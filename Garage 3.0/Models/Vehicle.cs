using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Garage_3._0.Models
{
    public class Vehicle
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string RegNr { get; set; }

        [Required]
        public string Color { get; set; }

        [JsonIgnore]
        [ForeignKey("Owner")]
        [Required]
        public int OwnerId { get; set; }

        [JsonIgnore]
        [ForeignKey("VehicleType")]
        [Required]
        public int VehicleTypeId { get; set; }

        public Owner Owner { get; set; }

        public VehicleType VehicleType { get; set; }
    }
}