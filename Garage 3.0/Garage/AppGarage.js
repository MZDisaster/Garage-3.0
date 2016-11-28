'use strict';

var Garage = angular.module('Garage', []).run(function ($rootScope) {
    $rootScope.Utils = {
        ObjectKeys: Object.keys
    }

});
