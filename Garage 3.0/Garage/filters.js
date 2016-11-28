//'use strict';

//eventsApp.filter('durations', function() {
//  return function(duration) {
//    switch(duration) {
//      case 1:
//        return "Half Hour";
//      case 2:
//        return "1 Hour";
//      case 3:
//        return "Half Day";
//      case 4:
//        return "Full Day";
//    }
//  }
//})

Garage.filter('KEYS', function () {
    return function (KEYS) {
        if (KEYS.length > 1)
        {
            return KEYS.Name;
        }
        else
        {
            return KEYS;
        }
    }
});