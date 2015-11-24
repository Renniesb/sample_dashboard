(function(){
  'use strict';

  // create
  var demoApp = angular.module('demoApp', [
    'ngRoute',
    'ngSanitize',
    'AdalAngular',
    'ngResource'
  ]);

  // configure
  demoApp.config(['$logProvider', function($logProvider){
    // set debug logging to on
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }]);

  // when it has initalized, manually bootstrap the app
  //Office.initialize = function(){
  //};
  jQuery(function () {
      console.log('>>> Office.initialize()');
      angular.bootstrap(jQuery('#container'), ['demoApp']);
  });

})();
