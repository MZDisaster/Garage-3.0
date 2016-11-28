using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Garage_3._0.ViewModels
{
    public class VehicleCreateViewModel
    {
        [Required]
        [RegularExpression("^[A-Z]{3}[0-9]{3}$")]
        [Display(Name = "Registration Number")]
        public string RegNr { get; set; }

        [Required]
        [Display(Name = "Color")]
        public string Color { get; set; }

        [Required]
        [Display(Name = "Personal Number")]
        public int OwnerId{ get; set; }

        [Required]
        [Display(Name = "Vehicle Type")]
        public int VehicleTypeId { get; set; }
    }
}