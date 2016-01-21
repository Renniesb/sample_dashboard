(function() {
    'use strict'
    angular.module('demoApp').service('onedriveService', ['$http','$resource', onedriveService]);

    function onedriveService($http, $resource) {


          $http({method: 'GET', url: 'https://login.live.com/oauth20_authorize.srf?client_id={"0000000044177AA6"}&scope={"wl.signin onedrive.readonly"}&response_type=token&redirect_uri={"http://renniesb.github.io/sample_dashboard/#/"}'})
        .success(function(d){ console.log( "yay" ); })
        .error(function(d){ console.log( "nope" ); });


    };
})();