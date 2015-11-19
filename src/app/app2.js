(function(){
    var app = angular.module('Workshop', ['ui.router']);

    app.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/view3');

        $stateProvider
            .state('view1',{
                url:'/view1',
                templateUrl:'views/view1.html'
            })
            .state('view2',{
                url:'/view2',
                templateUrl:'views/view2.html'
            })
            .state('view3',{
                url:'/view3',
                templateUrl:'views/view3.html'
            })
    });

    app.controller('ClubController', function ($scope,$http){


        //getPlaces();

    });
})();


