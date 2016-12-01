'use strict';

var Garage = angular.module('Garage', ['ngSanitize', 'ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/Dashboard/", {
            title: 'Home',
            templateUrl: "Dashboard/routes/index",
            controller: 'MainController'
        })
        .when("/Dashboard/CreateVehicle", {
            title: 'Create Vehicle',
            templateUrl: 'Dashboard/routes/createvehicle',
            controller: 'CreateVehicleFormController'
        })
        .when("/Dashboard/CreatePerson", {
            title: 'Create Person',
            templateUrl: 'Dashboard/routes/createperson',
            controller: 'EditController'
        })
        .when("/Dashboard/Edit/:id", {
            title: 'Edit Vehicle',
            templateUrl: 'Dashboard/routes/edit',
            controller: 'EditController'
        })
        .when("/Dashboard/Details/:id", {
            title: 'Details',
            templateUrl: 'Dashboard/routes/details',
            controller: 'DetailsController'
        })
        .when("/Dashboard/Delete/:id", {
            title: 'Delete',
            templateUrl: 'Dashboard/routes/delete',
            controller: 'DeleteController'
        })
        .otherwise({
            redirectTo: '/Dashboard/',
        });

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
}]);