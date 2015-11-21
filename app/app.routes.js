(function(){
  'use strict';

  var demoApp = angular.module('demoApp');

  // load routes
  demoApp.config(['$routeProvider', routeConfigurator]);

  function routeConfigurator($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm',
        requireADLogin: true
      });

    $routeProvider.otherwise({redirectTo: '/'});
  }

})();
