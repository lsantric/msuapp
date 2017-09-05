var directives = angular.module('msuapp.directives', []);

directives.directive('contentImage', function() {
    return {
        restrict: 'C',
        template: 'partials/locations/location_1.jade',
    };
});

directives.directive('sidebarTextMobile', function() {
    return {
        restrict: 'C',
        link: function(scope, element, attributes) {
            scope.$watch(function() { return scope.extended; }, function(value) {
                if (scope.firstRun) {
                    scope.firstRun = false;
                    element.css("height", element.css("height") ? "" : "4em");
                } else {
                    element.css("height", element.css("height") ? "" : "3em");
                }                
            });
        }
    }; 
});

directives.directive('sidebarAboutMobile', function() {
    return {
        restrict: 'C',
        link: function(scope, element, attributes) {
            scope.$watch(function() { return scope.extended; }, function(value) {
                element.css("display", value ? "block" : "none");              
            });            
        }
    }; 
});

directives.directive('sidebarAuthorsMobile', function() {
    return {
        restrict: 'C',
        link: function(scope, element, attributes) {
            scope.$watch(function() { return scope.extended; }, function(value) {
                element.css("display", value ? "block" : "none");              
            });
        }
    }; 
});

directives.directive('sidebarInsituMobile', function() {
    return {
        restrict: 'C',
        link: function(scope, element, attributes) {
            scope.$watch(function() { return scope.extended; }, function(value) {
                element.css("display", value ? "block" : "none");              
            });             
        }
    }; 
});