(function(){
})();

var app;

app = angular.module('app', ['ngMaterial'
    , 'ngRoute'
    , 'ui.router'
    , 'authJWT'
    , 'satellizer'
    , 'ngResource'
    , 'angular-loading-bar'
    , 'ngAnimate'
    , 'ngMessages'
    ,  'app-controllers'
    ]);

app.config(['$stateProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $authProvider) {

    // Satellizer configuration that specifies which API
    // route the JWT should be retrieved from
    $authProvider.loginUrl = '/api/login';

    // Redirect to the auth state if any other states
    // are requested other than users
    $urlRouterProvider.otherwise('/auth');

    $stateProvider
        .state('auth', {
            url: '/auth',
            templateUrl: '/users/auth',
            controller: 'AuthController as auth'
        })
        .state('users', {
            url: '/users',
            templateUrl: '/users',
            controller: 'UserController as user'
        })
        .state('dashboard', {
            url: "dashboard",
            templateUrl: "/admin/dashboard"
        })
        .state('shows', {
            url: "/shows",
            templateUrl: "/shows",
            controller: 'ShowsController as quizzes'
        });

}]);

app.config(function ($interpolateProvider) {

    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');

});

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
}]);


