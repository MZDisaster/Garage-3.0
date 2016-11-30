
Garage.factory('CreatePerson', ['$http', function ($http) {
    return {
        newPerson: function (person) {
            $http.post('/Dashboard/CreatePerson', person)
                .then(function (response) {
                    return angular.fromJson(response.data);
                    //console.log("Service Log Start!\n" + v + "\n Service Log End!");
                });
        }
    }
}]);


Garage.factory('CreateVehicle', ['$http', function ($http) {
    return {
        newVehicle: function (vehicle) {
            return $http.post('/Dashboard/CreateVehicle', vehicle)
                .then(function (response) {
                    return angular.fromJson(response.data);
                    //console.log("Service Log Start!\n" + v + "\n Service Log End!");
                });
        }
    }
}]);