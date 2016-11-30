
'use strict';

Garage.factory('ModalService', function () {
    var ModalService = {};

    ModalService.setModal = function (data) {
        this.ModalBody = data;
    };

    ModalService.setModalTitle = function (data) {
        this.ModalTitle = data;
    };

    ModalService.ModalTitle = '';
    ModalService.ModalBody = '';


    return ModalService;
});