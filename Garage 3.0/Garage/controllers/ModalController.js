'use strict';

Garage.controller("ModalController", ['$scope', '$sce', 'getCreateVehiclePage', 'getCreatePersonPage',
    function ModalController($scope, $sce, getCreateVehiclePage, getCreatePersonPage) {

        //jQuery('#ModalContainer').modal({ });

        $scope.Modal = '';

        $scope.$on('OpenCreateVehicleModal', function () {
            getCreateVehiclePage.then(function (data) {
                $scope.Modal = $sce.trustAsHtml(data);
                jQuery('#ModalContainer').modal('toggle');
                console.log($scope.Modal);
            });
        });

        $scope.$on('OpenCreateOwnerModal', function () {
            getCreatePersonPage.then(function (data) {
                $scope.Modal = $sce.trustAsHtml(data);
                jQuery('#ModalContainer').modal('toggle');
            });
        });
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