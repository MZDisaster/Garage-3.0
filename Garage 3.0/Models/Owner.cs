using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace Garage_3._0.Models
{
    public class Owner
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string PNR { get; set; }

        [JsonIgnore]
        public virtual List<Vehicle> Vehicles { get; set; }
    }
}