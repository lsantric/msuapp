var app = angular.module('msuapp', ['msuapp.controllers', 'msuapp.directives', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

	isMobile = function detectmob() {
		if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
			return true;
		} else {
			return false;
		}
	};

	$routeProvider.when('/', {
		templateUrl: isMobile() ? 'partials/mobile/index' : 'partials/index',
		controller: 'mainController',
		resolve: {
                isMobile: function() {
                    return isMobile();
                }
            }
	}).otherwise({
		redirectTo: '/'
	});
}]);

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);