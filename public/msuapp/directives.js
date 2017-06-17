var directives = angular.module('msuapp.directives', []);

directives.directive('contentImage', function() {
    return {
        restrict: 'C',
        template: 'partials/locations/location_1.jade',
    };
});

directives.directive('locationContent', function() {
    return {
        restrict: 'C',
        templateUrl: function(element, attributes) {
            return 'partials/locations/location_' + 1 + '.jade';
        }
    };
});

directives.directive('locationContentMobile', function() {
    return {
        restrict: 'C',
        templateUrl: function(element, attributes) {
            return 'partials/mobile/locations/location_' + 1 + '.jade';
        }
    };
});

directives.directive('sidebarTextMobile', function() {
    return {
        restrict: 'C',
        link: function(scope, element, attributes) {

            console.log(element);
            ang_element = angular.element(element)[0];
            height = element[0].offsetHeight;

            scope.$watch(function() { return scope.extended; }, function(value) {
                element.css("height", element.css("height") ? "" : "3em");
            });
        }
    }; 
});