/// <reference path="../../../../typings/index.d.ts" />
namespace CoreApp.MainPage {
    'use strict'

    export class MainPageController {
        public value: number = 10;
    }
    
    angular.module('coreApp.mainpage')
        .controller('mainPageController', [MainPageController]);
}