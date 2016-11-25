
Garage.controller("IndexController",
    function IndexController($scope, $http, $log) {

        $http.get("/Dashboard/Vehicles/").
        success(function (data, status) {
            $scope.Vehicles = data;
            console.log(data);
        }).error(function (data, status) {
            //$scope.alerts.push(data);
        });

    }
);