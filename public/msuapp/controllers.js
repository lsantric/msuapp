var controllers = angular.module('msuapp.controllers', []);

controllers.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.selectedContent = 'partials/locations/mobile/unlocation.jade';

    $scope.locationList = [{
        "url": 'partials/mobile/locations/location_1.jade',
        "latitude": 45.778304,
        "longitude": 15.981304
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

        if (value !== null) {

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
                $scope.selectedContent = $scope.locationList[minId].url;
            } else {
                $scope.selectedContent = 'partials/mobile/locations/unlocation.jade';
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

controllers.controller('sidebarControllerMobile', ['$scope', function($scope) {

    $scope.firstRun = true;

    $scope.extended = false;
    $scope.toggleHeight = function() {
        $scope.extended = !$scope.extended;
    };
    $scope.toggleHeight();
    $scope.toggleHeight();
}]);