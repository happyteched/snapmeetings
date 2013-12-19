'use strict';

angular.module('snapmeetingsApp', [
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
      }).when('/about',{template:'<h1>32323</h1>', controller:'aboutController'})
      .otherwise({
        redirectTo: '/'
      });
  });
