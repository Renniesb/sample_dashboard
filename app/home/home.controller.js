(function(){
  'use strict';

  angular.module('demoApp')
         .controller('homeController', ['powerbiService', homeController]);

  /**
   * Controller constructor
   */
  function homeController(powerbiService) {
    var vm = this;  // jshint ignore:line
    vm.title = 'home controller';
    vm.dataObject = {};

  }

})();
