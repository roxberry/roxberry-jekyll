var example = angular.module("example", ['ui.router']);

example.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('secure', {
            url: '/secure',
            templateUrl: 'templates/secure.html',
            controller: 'SecureController'
        });
    $urlRouterProvider.otherwise('/login');
});

example.controller("LoginController", function($scope, $http) {

    $scope.login = function() {
        window.location.href = "http://roxberries.hopto.org:30000/oauth/authorize?client_id=782e42110249a390a87194e4bc86e8f898d7068bf7b9c7fdf0c7824a2980d64d&redirect_uri=http://roxberries.hopto.org/games/remnant/callback.html&response_type=code";
    }

});

example.controller("SecureController", function($scope) {

    $scope.accessToken = JSON.parse(window.localStorage.getItem("remnant")).oauth.access_token;

});