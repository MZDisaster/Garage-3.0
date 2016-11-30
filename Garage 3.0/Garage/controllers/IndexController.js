'use strict';

Garage.controller("IndexController", ['$scope', '$sce', 'getVehicles', 'getVehicleTypes', 'ModalService', 'getCreateVehiclePage', 'getCreatePersonPage',
    function IndexController($scope, $sce, getVehicles, getVehicleTypes, ModalService, getCreateVehiclePage, getCreatePersonPage) {

        // Sorting Start
        $scope.sortorder = 'Owner.Name';
        $scope.sortorderdescending = '-Owner.Name';

        $scope.sortOptions = [
            { 'Name': 'Owner', 'Value': 'Owner.Name' },
            { 'Name': 'Vehicle Type', 'Value': 'VehicleType.Name' },
            { 'Name': 'Registration Number', 'Value': 'RegNr' },
            { 'Name': 'Color', 'Value': 'Color' }
        ];

        $scope.OpenCreateVehicleModal = function () {
            console.log('clicked');
            getCreateVehiclePage.then(function (data) {
                ModalService.setModalTitle('Create Vehicle');
                ModalService.setModal(data);//$sce.trustAsHtml(data);
                jQuery('#ModalContainer').modal('toggle');
                console.log(ModalService);
            });
        };

        $scope.OpenCreateOwnerModal = function () {
            getCreatePersonPage.then(function (data) {
                ModalService.setModalTitle('Create Owner');
                ModalService.setModal(data);
                jQuery('#ModalContainer').modal('toggle');
            });
        };
        
        $scope.defaultSelectedOption = $scope.sortOptions[0].Value;
        // Sorting End

        getVehicleTypes.then(function (data) {
            $scope.vehicleTypes = data;
            //console.log($scope.vehicleTypes);
        });

        getVehicles.then(function (data) {
            $scope.Vehicles = data;
            //console.log("Controller Log Start!\n" + $scope.Vehicles + "\n Controller Log End!");
        });

        
    }]
);