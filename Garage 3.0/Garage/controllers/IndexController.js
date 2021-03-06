﻿'use strict';

Garage.controller("IndexController", ['$scope', '$rootScope', '$sce', 'getVehicles', 'getVehicleTypes', 'ModalService', 'getCreateVehiclePage', 'getCreatePersonPage',
    function IndexController($scope, $rootScope, $sce, getVehicles, getVehicleTypes, ModalService, getCreateVehiclePage, getCreatePersonPage) {

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
            //console.log($scope.vehicleTypes);
        });

        var getvs = function () {
            getVehicles.then(function (data) {
                $scope.Vehicles = data;
                //console.log("Controller Log Start!\n" + $scope.Vehicles + "\n Controller Log End!");
            });
        };

        $scope.$on('VehiclesChanged', function () {
            getvs();
        })

        getvs();
        
    }]
);