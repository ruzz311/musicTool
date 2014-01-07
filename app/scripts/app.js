'use strict';

angular.module('angularMusicToolApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/root', {
        templateUrl: 'views/root.html',
        controller: 'RootCtrl'
      })
      .when('/chord', {
        templateUrl: 'views/chord.html',
        controller: 'ChordCtrl'
      })
      .when('/progression', {
        templateUrl: 'views/progression.html',
        controller: 'ProgressionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
