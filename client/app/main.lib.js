/// <reference path="../../typings/index.d.ts" />
var CoreApp;
(function (CoreApp) {
    'use strict';
    var app = angular.module('coreApp', [
        'ngRoute',
        'ngMaterial',
        'coreApp.mainpage',
        'coreApp.news'
    ]);
    app.config(['$routeProvider', ($routeProvider) => {
            $routeProvider.when('/', {}).when('/News', {
                templateUrl: './app/scripts/Templates/News/News.html',
            }).otherwise({
                templateUrl: './app/scripts/Templates/Main/MainPage.html',
            });
        }]);
})(CoreApp || (CoreApp = {}));

/// <reference path="../../../typings/index.d.ts" />
var CoreApp;
(function (CoreApp) {
    var MainPage;
    (function (MainPage) {
        'use strict';
        angular.module('coreApp.mainpage', []);
    })(MainPage = CoreApp.MainPage || (CoreApp.MainPage = {}));
})(CoreApp || (CoreApp = {}));

/// <reference path="../../../typings/index.d.ts" />
var CoreApp;
(function (CoreApp) {
    var MainPage;
    (function (MainPage) {
        'use strict';
        angular.module('coreApp.news', []);
    })(MainPage = CoreApp.MainPage || (CoreApp.MainPage = {}));
})(CoreApp || (CoreApp = {}));

/// <reference path="../../../../typings/index.d.ts" />
var CoreApp;
(function (CoreApp) {
    var MainPage;
    (function (MainPage) {
        'use strict';
        class MainPageController {
            constructor() {
                this.value = 10;
            }
        }
        MainPage.MainPageController = MainPageController;
        angular.module('coreApp.mainpage')
            .controller('mainPageController', [MainPageController]);
    })(MainPage = CoreApp.MainPage || (CoreApp.MainPage = {}));
})(CoreApp || (CoreApp = {}));

/// <reference path="../../../../typings/index.d.ts" />
var CoreApp;
(function (CoreApp) {
    var MainPage;
    (function (MainPage) {
        'use strict';
        class NewsController {
            constructor() {
                this.value = 11;
            }
        }
        MainPage.NewsController = NewsController;
        angular.module('coreApp.mainpage')
            .controller('newsPageController', [NewsController]);
    })(MainPage = CoreApp.MainPage || (CoreApp.MainPage = {}));
})(CoreApp || (CoreApp = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvQ29yZS5BcHAudHMiLCJzY3JpcHRzL01haW5QYWdlL01haW5QYWdlLk1vZHVsZS50cyIsInNjcmlwdHMvTmV3cy9OZXdzLk1vZHVsZS50cyIsInNjcmlwdHMvTWFpblBhZ2UvY29udHJvbGxlcnMvTWFpblBhZ2VDb250cm9sbGVyLnRzIiwic2NyaXB0cy9OZXdzL2NvbnRyb2xsZXJzL05ld3NDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRCxJQUFVLE9BQU8sQ0FrQmhCO0FBbEJELFdBQVUsT0FBTyxFQUFDLENBQUM7SUFDZixZQUFZLENBQUE7SUFDWixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUNoQyxTQUFTO1FBQ1QsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixjQUFjO0tBQ2pCLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUMxQixjQUF1QztZQUN2QyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDYixXQUFXLEVBQUUsd0NBQXdDO2FBQ3hELENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsV0FBVyxFQUFFLDRDQUE0QzthQUM1RCxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1IsQ0FBQyxFQWxCUyxPQUFPLEtBQVAsT0FBTyxRQWtCaEI7O0FDbkJELG9EQUFvRDtBQUNwRCxJQUFVLE9BQU8sQ0FHaEI7QUFIRCxXQUFVLE9BQU87SUFBQyxJQUFBLFFBQVEsQ0FHekI7SUFIaUIsV0FBQSxRQUFRLEVBQUMsQ0FBQztRQUN4QixZQUFZLENBQUE7UUFDYixPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsRUFIaUIsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFHekI7QUFBRCxDQUFDLEVBSFMsT0FBTyxLQUFQLE9BQU8sUUFHaEI7O0FDSkQsb0RBQW9EO0FBQ3BELElBQVUsT0FBTyxDQUdoQjtBQUhELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQUd6QjtJQUhpQixXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3hCLFlBQVksQ0FBQTtRQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsRUFIaUIsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFHekI7QUFBRCxDQUFDLEVBSFMsT0FBTyxLQUFQLE9BQU8sUUFHaEI7O0FDSkQsdURBQXVEO0FBQ3ZELElBQVUsT0FBTyxDQVNoQjtBQVRELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQVN6QjtJQVRpQixXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3hCLFlBQVksQ0FBQTtRQUVaO1lBQUE7Z0JBQ1csVUFBSyxHQUFXLEVBQUUsQ0FBQztZQUM5QixDQUFDO1FBQUQsQ0FBQztRQUZZLDJCQUFrQixxQkFFOUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7YUFDN0IsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsRUFUaUIsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFTekI7QUFBRCxDQUFDLEVBVFMsT0FBTyxLQUFQLE9BQU8sUUFTaEI7O0FDVkQsdURBQXVEO0FBQ3ZELElBQVUsT0FBTyxDQVNoQjtBQVRELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQVN6QjtJQVRpQixXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3hCLFlBQVksQ0FBQTtRQUVaO1lBQUE7Z0JBQ1csVUFBSyxHQUFXLEVBQUUsQ0FBQztZQUM5QixDQUFDO1FBQUQsQ0FBQztRQUZZLHVCQUFjLGlCQUUxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQzthQUM3QixVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUMsRUFUaUIsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFTekI7QUFBRCxDQUFDLEVBVFMsT0FBTyxLQUFQLE9BQU8sUUFTaEIiLCJmaWxlIjoibWFpbi5saWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxubmFtZXNwYWNlIENvcmVBcHAge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2NvcmVBcHAnLCBbXHJcbiAgICAgICAgJ25nUm91dGUnLFxyXG4gICAgICAgICduZ01hdGVyaWFsJyxcclxuICAgICAgICAnY29yZUFwcC5tYWlucGFnZScsXHJcbiAgICAgICAgJ2NvcmVBcHAubmV3cydcclxuICAgIF0pO1xyXG5cclxuICAgIGFwcC5jb25maWcoWyckcm91dGVQcm92aWRlcicsIChcclxuICAgICAgICAkcm91dGVQcm92aWRlcjogbmcucm91dGUuSVJvdXRlUHJvdmlkZXIpID0+IHtcclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICAgIH0pLndoZW4oJy9OZXdzJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL3NjcmlwdHMvVGVtcGxhdGVzL05ld3MvTmV3cy5odG1sJyxcclxuICAgICAgICB9KS5vdGhlcndpc2Uoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL3NjcmlwdHMvVGVtcGxhdGVzL01haW4vTWFpblBhZ2UuaHRtbCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxubmFtZXNwYWNlIENvcmVBcHAuTWFpblBhZ2Uge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcbiAgIGFuZ3VsYXIubW9kdWxlKCdjb3JlQXBwLm1haW5wYWdlJywgW10pO1xyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5uYW1lc3BhY2UgQ29yZUFwcC5NYWluUGFnZSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuICAgIGFuZ3VsYXIubW9kdWxlKCdjb3JlQXBwLm5ld3MnLCBbXSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxubmFtZXNwYWNlIENvcmVBcHAuTWFpblBhZ2Uge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE1haW5QYWdlQ29udHJvbGxlciB7XHJcbiAgICAgICAgcHVibGljIHZhbHVlOiBudW1iZXIgPSAxMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2NvcmVBcHAubWFpbnBhZ2UnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdtYWluUGFnZUNvbnRyb2xsZXInLCBbTWFpblBhZ2VDb250cm9sbGVyXSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxubmFtZXNwYWNlIENvcmVBcHAuTWFpblBhZ2Uge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE5ld3NDb250cm9sbGVyIHtcclxuICAgICAgICBwdWJsaWMgdmFsdWU6IG51bWJlciA9IDExO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnY29yZUFwcC5tYWlucGFnZScpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ25ld3NQYWdlQ29udHJvbGxlcicsIFtOZXdzQ29udHJvbGxlcl0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
