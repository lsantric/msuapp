var controllers = angular.module('msuapp.controllers', []);

controllers.controller('mainController', ['$geolocation', '$scope', function($geolocation, $scope) {
    $geolocation.watchPosition({
        timeout: 60000,
        maximumAge: 250,
        enableHighAccuracy: true
    });

    $scope.$on('$geolocation.position.changed', function(event, newPosition){
        $scope.myPosition = newPosition;
    });
}]);

controllers.controller('contentController', ['$scope', function($scope) {
    $scope.myPosition = $scope.$parent.myPosition;
}]);

controllers.controller('sidebarController', ['$scope', function($scope) {

}]);