namespace AngularAdvanced {

    angular.module('AngularAdvanced', ['ui.router', 'ngResource', 'ui.bootstrap', 'uiGmapgoogle-maps', 'angular-filepicker']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        uiGmapGoogleMapApiProvider: any,
        filepickerProvider: any,

    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: AngularAdvanced.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: AngularAdvanced.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            })
            .state('deepThought', {
                url: '/deepthought',
                templateUrl: '/ngApp/views/deepthought.html',
                controller: AngularAdvanced.Controllers.AnswerController,
                controllerAs: 'controller'
            })
            .state('fortune', {
                url: '/fortune',
                templateUrl: '/ngApp/views/fortune.html',
                controller: AngularAdvanced.Controllers.FortuneController,
                controllerAs: 'controller'
            })
            .state('googlemaps', {
                url: '/googlemaps',
                templateUrl: '/ngApp/views/googlemaps.html',
                controller: AngularAdvanced.Controllers.GoogleMapsController,
                controllerAs: 'controller'
            })
            .state('fileupload', {
                url: '/upload',
                templateUrl: '/ngApp/views/fileupload.html',
                controller: AngularAdvanced.Controllers.FileUpload,
                controllerAs: 'controller'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);


        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyB-JYmyeVPt_aWYJChsW8ZG7kq2b9EQqrU',
        });

        filepickerProvider.setKey('AhVMlUcIATNWaZdWZaeSqz');

    });


}




