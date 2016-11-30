
Garage.controller('CreateVehicleFormController', ['$scope', 'CreateVehicle', function (CreateVehicle) {
    $scope.Vehicle = {RegNr: '', Color: '', OwnerId: '', VehicleType: ''};
    
    $scope.createthevehicle = function () {
        console.log($scope.Vehicle);
        CreateVehicle.newVehicle($scope.Vehicle).then(function () {
            $scope.emit('VehiclesChanged');
        });
    };

    

}]);