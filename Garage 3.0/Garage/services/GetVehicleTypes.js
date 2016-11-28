

Garage.factory('getVehicleTypes', ['$http', function ($http) {
    return $http({
            method: 'GET',
            url: '/Dashboard/VehicleTypes/'
        }).then(function (response) {
            return angular.fromJson(response.data);
            //console.log("Service Log Start!\n" + v + "\n Service Log End!");
        });
}]);