'use strict';

Garage.controller("ModalController", ['$scope', '$sce', 'getCreateVehiclePage', 'getCreatePersonPage', 'ModalService',
    function ModalController($scope, $sce, getCreateVehiclePage, getCreatePersonPage, ModalService) {

        //jQuery('#ModalContainer').modal({ });
        console.log(ModalService.ModalTitle + "\n" + ModalService.ModalBody);
        $scope.ModalTitle = ModalService.ModalTitle;
        $scope.ModalBody = ModalService.ModalBody;

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