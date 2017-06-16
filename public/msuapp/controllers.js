var controllers = angular.module('msuapp.controllers', []);

controllers.controller('mainController', ['$geolocation', '$scope', function($geolocation, $scope) {

    $scope.myPosition = {}

    $geolocation.watchPosition({
        timeout: 60000
    });

    $scope.$watch('myPosition.coords', function(newValue, oldValue) {
        console.log(newValue);
        $scope.myPosition.coords = newValue;
    }, true);
}]);

controllers.controller('contentController', ['$scope', function($scope) {
    $scope.myPosition = $scope.$parent.myPosition;
}]);

controllers.controller('sidebarController', ['$scope', function($scope) {

}]);