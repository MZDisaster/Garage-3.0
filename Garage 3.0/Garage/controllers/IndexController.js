'use strict';

Garage.controller("IndexController",
    function IndexController($scope, getVehicles, getVehicleTypes, getCreatePage) {

        // Sorting Start
        $scope.sortorder = 'Owner.Name';
        $scope.sortorderdescending = '-Owner.Name';

        $scope.sortOptions = [
            { 'Name': 'Owner', 'Value': 'Owner.Name' },
            { 'Name': 'Vehicle Type', 'Value': 'VehicleType.Name' },
            { 'Name': 'Registration Number', 'Value': 'RegNr' },
            { 'Name': 'Color', 'Value': 'Color' }
        ];
        
        $scope.defaultSelectedOption = $scope.sortOptions[0].Value;
        // Sorting End

        getVehicleTypes.then(function (data) {
            $scope.vehicleTypes = data;
            console.log($scope.vehicleTypes);
        });

        getVehicles.then(function (data) {
            $scope.Vehicles = data;
            //console.log("Controller Log Start!\n" + $scope.Vehicles + "\n Controller Log End!");
        });

        $scope.OpenCreateModal = function () {

        };
    }
);