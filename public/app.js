var app = angular.module('scotcha', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', {
      url: '/home',
      templateUrl: './templates/partial-home.html'
    })
    .state('home.list', {
      url: '/list',
      templateUrl: './templates/partial-home-list.html',
      controller: function ($scope) {
        $scope.scotches = ['Balvenie', 'The Balmore', 'Highland Park'];
      }
    }).state('home.about', {
      url: '/about',
      templateUrl: './templates/partial-home-about.html'
    });
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: './templates/partial-contact.html'
  });
  $stateProvider.state('scotch', {
    url: '/scotch/:type?temp',
    templateUrl: './templates/partial-scotch.html',
    controller: function ($scope, $stateParams) {
      $scope.myScotch = $stateParams;
    }
  });
  $stateProvider.state('scotchlibrary', {
    url: '/library/:type',
    templateUrl: function ($stateParams) {
      return './templates/partial-scotch-' + $stateParams.type + '.html';
    }
  });
  $locationProvider.html5Mode(true);
});