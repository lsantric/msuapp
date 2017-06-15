var app = angular.module('msuapp', ['msuapp.controllers', 'msuapp.directives', 'ngRoute', 'ngGeolocation']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/index',
		controller: 'IndexController'
	}).otherwise({
		redirectTo: '/'
	});
}]).config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);