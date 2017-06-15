var controllers = angular.module('msuapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope) {
	$scope.message = 'Hello From Angular';
	$scope.name = 'bob';
}]);

controllers.controller('geolocCtrl', ['$geolocation', '$scope', function($geolocation, $scope) {
	$geolocation.getCurrentPosition({
		timeout: 60000
	}).then(function(position) {
		$scope.myPosition = position;
	});
}]);