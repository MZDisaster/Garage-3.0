'use strict';

Garage.controller("ModalController", ['$scope', '$sce', '$timeout', 'getCreateVehiclePage', 'getCreatePersonPage', 'ModalService',
    function ModalController($scope, $sce, $timeout, getCreateVehiclePage, getCreatePersonPage, ModalService) {
        var that = this;
        //jQuery('#ModalContainer').modal({ });
        console.log(ModalService.ModalTitle + "\n" + ModalService.ModalBody);
        $scope.ModalTitle = ModalService.ModalTitle;
        $scope.ModalBody = ModalService.ModalBody;

        

        var modalchanged = $scope.$on('ModalChanged', function () {
            jQuery('#ModalLabel').html(ModalService.ModalTitle);
            jQuery('#ModalBody').html(ModalService.ModalBody);
            jQuery('#ModalContainer').modal('toggle');
        });

        var changestuff = function () {
            $scope.ModalTitle = ModalService.ModalTitle;
            $scope.ModalBody = ModalService.ModalBody;
            teststuff();
        };

        var teststuff = function () {
            console.log($scope.ModalTitle);
            console.log($scope.ModalBody);
        };

        $scope.$on('$destroy', function () {
            //modalchanged(); // remove listener.
        });

        $scope.check = function () {
            console.log($scope.ModalTitle);
            console.log($scope.ModalBody);
        };

        /*
        $scope.OpenCreateVehicleModal = function () {
            getCreateVehiclePage.then(function (data) {
                $scope.Modal = $sce.trustAsHtml(data);
                $apply(jQuery('#ModalContainer').modal());
                console.log($scope.Modal);
            });

        };

        $scope.OpenCreateOwnerModal = function () {
            getCreatePersonPage.then(function (data) {
                $scope.Modal = $sce.trustAsHtml(data);
                $apply(jQuery('#ModalContainer').modal());
            });
        };*/
    }]
);