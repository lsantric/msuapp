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
            console.log(element);
            console.log(attributes);
            return 'partials/locations/location_' + 1 + '.jade';
        }
    };
});