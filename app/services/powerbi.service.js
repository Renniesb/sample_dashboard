(function() {
    'use strict'
    angular.module('demoApp').service('powerbiService', ['powerBIUrl', '$http','$resource', powerbiService]);

    function powerbiService(powerBIUrl, $http, $resource) {


          $http({method: 'GET', url: 'https://api.powerbi.com/v1.0/myorg/datasets'})
        .success(function(d){ console.log( "yay" ); })
        .error(function(d){ console.log( "nope" ); });


    };
})();