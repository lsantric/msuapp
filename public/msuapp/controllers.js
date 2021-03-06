var controllers = angular.module('msuapp.controllers', []);

controllers.controller('mainController', ['$scope', '$timeout', '$routeParams', function($scope, $timeout, $routeParams) {

    isMobile = function detectmob() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    };

    $scope.lang = "";
    if ($routeParams.lang) {
        $scope.lang = "_" + $routeParams.lang;
    }

    var mobileExtension = true ? '/mobile' : '';

    $scope.selectedContent = 'partials' + mobileExtension + '/locations/unlocation' + $scope.lang + '.jade';

    $scope.locationList = [{
        "url": 'partials' + mobileExtension + '/locations/location_1.jade',
        "latitude": 45.779011,
        "longitude": 15.981256
    }, {
        "url": 'partials' + mobileExtension + '/locations/location_2.jade',
        "latitude": 45.7785946,
        "longitude": 15.9818147
    }, {
        "url": 'partials' + mobileExtension + '/locations/location_3.jade',
        "latitude": 45.778304,
        "longitude": 15.981304
    }, {
        "url": 'partials' + mobileExtension + '/locations/location_4.jade',
        "latitude": 45.778419,
        "longitude": 15.982292
    }, {
        "url": 'partials' + mobileExtension + '/locations/location_5.jade',
        "latitude": 45.779159,
        "longitude": 15.982340
    }];

    id = navigator.geolocation.watchPosition(function(pos) {
        console.log(pos);
        $scope.$apply(function() {
            $scope.myPosition = pos.coords;
        });
    }, function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }, options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5000
    });

    $scope.$watch('myPosition', function(value) {

        if (typeof value != 'undefined') {

            console.log(value);

            var diffs = [];
            $scope.locationList.forEach(function(elem, index, array) {
                diffs.push($scope.distance(elem.latitude, elem.longitude, value.latitude, value.longitude, "K") * 1000);
            });
            console.log(diffs);

            min = 9999999999999;
            minId = -1;
            for (var i = 0; i < diffs.length; i++) {
                if (diffs[i] < min) {
                    min = diffs[i];
                    minId = i;
                }
            }

            if (min < 20) {
                $scope.selectedContent = $scope.locationList[minId].url.slice(0, $scope.locationList[minId].url.length - 5) + $scope.lang + ".jade";
            } else {
                $scope.selectedContent = 'partials' + mobileExtension + '/locations/unlocation' + $scope.lang + '.jade';
            }
        }
    });

    $scope.distance = function(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }
        return dist;
    };
}]);

controllers.controller('contentController', ['$scope', function($scope) {

}]);

controllers.controller('contentControllerMobile', ['$scope', function($scope) {

}]);

controllers.controller('sidebarController', ['$scope', function($scope) {

}]);

controllers.controller('sidebarControllerMobile', ['$scope', '$location', function($scope, $location) {

    $scope.extended = false;
    $scope.toggleAbout = function() {
        $scope.extended = !$scope.extended;
    };
    $scope.go = function (path) {
        $location.path(path);
    };
}]);