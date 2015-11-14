angular.module('MyApp', ['ngResource','ngRoute'])
.config(['$locationProvider','$routeProvider',function($locationProvider ,$routeProvider){
  $locationProvider.html5Mode(true);


  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/evaluate', {
        templateUrl: 'views/equations.html',
        controller: 'EquationsCtrl'
    }).when('/stop', {
        templateUrl: 'views/end.html',
        controller: 'EndCtrl'
      }).otherwise({
      redirectTo: '/'
    });
}]);
