var directives = angular.module('msuapp.directives', []);

directives.directive('hello', function() {
	return {
		restrict: 'E',
		template: '<p>Hello from directive</p>'
	};
});