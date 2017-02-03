/// <reference path="../../typings/index.d.ts" />
namespace CoreApp {
    'use strict'
    var app = angular.module('coreApp', [
        'ngRoute',
        'ngMaterial',
        'coreApp.mainpage',
        'coreApp.news'
    ]);

    app.config(['$routeProvider', (
        $routeProvider: ng.route.IRouteProvider) => {
        $routeProvider.when('/', {
        }).when('/News', {
            templateUrl: './app/scripts/Templates/News/News.html',
        }).otherwise({
            templateUrl: './app/scripts/Templates/Main/MainPage.html',
        });
    }]);
}