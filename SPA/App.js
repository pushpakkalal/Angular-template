(function() {
    'use strict'
    // var myApp = angular.module("mainApp", ['ngRoute']);
    // myApp.config(function($routeProvider) {
    //     $routeProvider
    //         .when('/', {
    //             templateUrl: 'pages/home.html',
    //             controller: 'MainCtrl'
    //         })
    //         .when('/about', {
    //             templateUrl: 'pages/about.html',
    //             controller: 'MainCtrl'
    //         })
    //         .when('/services', {
    //             templateUrl: 'pages/services.html',
    //             controller: 'MainCtrl'
    //         })
    //         .when('/career', {
    //             templateUrl: 'pages/career.html',
    //             controller: 'MainCtrl'
    //         })
    //         .when('/portfolio', {
    //             templateUrl: 'pages/portfolio.html',
    //             controller: 'MainCtrl'
    //         })
    //         .when('/contact', {
    //             templateUrl: 'pages/contact.html',
    //             controller: 'MainCtrl'
    //         })
    //         .otherwise({
    //             redirectTo: '/'
    //         });
    // });

    var myApp = angular.module("mainApp", ['ui.router']);

    myApp.config(['$stateProvider','$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'pages/home.html',
                controller: 'MainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'pages/about.html',
                controller: 'MainCtrl'
            })
            .state('services', {
                url: '/services',
                templateUrl: 'pages/services.html',
                controller: 'MainCtrl'
            })
            .state('career', {
                url: '/career',
                templateUrl: 'pages/career.html',
                controller: 'MainCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'pages/contact.html',
                controller: 'MainCtrl'
            })
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'pages/portfolio.html',
                controller: 'MainCtrl'
            })
            .state('root', {
                url: '/',
                templateUrl: 'pages/home.html',
                controller: 'MainCtrl'
            });
            $urlRouterProvider.otherwise('/');
    }])

})();
