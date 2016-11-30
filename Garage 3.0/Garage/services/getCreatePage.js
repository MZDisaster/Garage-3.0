

Garage.factory('getCreateVehiclePage', ['$http', function ($http) {
    return $http({
        method: 'GET',
        url: '/Dashboard/CreateVehicle/'
    }).then(function (response) {
        return response.data;
        //console.log("Service Log Start!\n" + v + "\n Service Log End!");
    });
}]);



Garage.factory('getCreatePersonPage', ['$http', function ($http) {
    return $http({
        method: 'GET',
        url: '/Dashboard/CreatePerson/'
    }).then(function (response) {
        return response.data;
        //console.log("Service Log Start!\n" + v + "\n Service Log End!");
    });
}]);