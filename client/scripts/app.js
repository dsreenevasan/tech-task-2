'use strict';

var states = [
    {
        name: 'main',
        state:
        {
            url:'/main',
            templateUrl: 'views/main.html',
            data: {
                text: "Main",
                visible: false
            }
        }
    }
];

var movies = angular.module('moviesApp', [
                        'ui.router',
                        'toaster',
                        'snap',
                        'ngAnimate'
                    ]);
    /*.run(
        function($location) {
            $location.path('');
        }
    )*/
    movies.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        angular.forEach(states, function(state) {
            $stateProvider.state(state.name, state.state);
        });

        /*$stateProvider
            .state('home', {
                url: '/home',
                /!*views: {
                    "main": {
                        controller: "MainController",
                        templateUrl: 'views/main.html'
                    }
                }*!/
                templateUrl: 'views/main.html'
            })

            .state('hello', {
                url: '/hello',
                template: '<h1>Hello</h1>'
            });*/
    });

