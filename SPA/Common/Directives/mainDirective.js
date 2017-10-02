(function() {
    'use strict';
    angular.module("mainApp").directive("w3TestDirective", function() {
        return {
            restrict: "CEA", // "E","C", "M", "EA"
            controller: "MainCtrl",
            templateUrl: 'Common/templates/about_us_content.html'
        };
    });
})();
