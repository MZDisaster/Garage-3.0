
'use strict';

Garage.factory('ModalService', function () {
    var ModalService = {};

    ModalService.ModalTitle = '';
    ModalService.ModalBody = '';

    ModalService.setModal = function (data) {
        this.ModalBody = data;
    };

    ModalService.setModalTitle = function (data) {
        this.ModalTitle = data;
    };

    return ModalService;
});