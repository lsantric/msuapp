var controllers = angular.module('msuapp.controllers', []);

controllers.controller('mainController', ['$geolocation', '$scope', function($geolocation, $scope) {
    $geolocation.getCurrentPosition({
        timeout:10000
    }).then(function(position) {
        $scope.myPosition = position;
    });
}]);

controllers.controller('contentController', ['$scope', function($scope) {
    $scope.myPosition = $scope.$parent.myPosition
}]);

controllers.controller('sidebarController', ['$scope', function($scope) {

}]);