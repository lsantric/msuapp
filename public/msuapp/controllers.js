var controllers = angular.module('msuapp.controllers', []);

controllers.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

    id = navigator.geolocation.watchPosition(function(pos) {
        console.log(pos);
        $scope.$apply(function() {
            $scope.myPosition = pos;
        });
        $scope.myPosition = pos;
    }, function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }, options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    });
}]);

controllers.controller('contentController', ['$scope', function($scope) {

}]);

controllers.controller('contentControllerMobile', ['$scope', function($scope) {

}]);

controllers.controller('sidebarController', ['$scope', function($scope) {

}]);

controllers.controller('sidebarControllerMobile', ['$scope', function($scope) {

    $scope.extended = false;
    $scope.toggleHeight = function () {
        $scope.extended = !$scope.extended;
    }
}]);