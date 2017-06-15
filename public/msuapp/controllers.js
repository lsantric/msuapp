var controllers = angular.module('msuapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope) {
	$scope.message = 'Tvoje gps koordinate su:';
	$scope.name = 'Missing artists';
}]);

controllers.controller('geolocCtrl', ['$geolocation', '$scope', function($geolocation, $scope) {
	$geolocation.getCurrentPosition({
		timeout: 60000
	}).then(function(position) {
		$scope.myPosition = position;
	});
}]);