/// <reference path="../../../../typings/index.d.ts" />
namespace CoreApp.MainPage {
    'use strict'

    export class NewsController {
        public value: number = 11;
    }
    
    angular.module('coreApp.mainpage')
        .controller('newsPageController', [NewsController]);
}