(function() {
    'use strict'
    angular.module('demoApp').service('onedriveService', ['$scope','$http','$resource', onedriveService]);

    function onedriveService($scope, $http, $resource) {

    	$scope.OneDriveAPI = $resource('https://login.live.com/oauth20_authorize.srf?client_id={"0000000044177AA6"}&scope={"onedrive.readonly"}&response_type=token&redirect_uri={"http://renniesb.github.io/sample_dashboard/#/"}', { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

    	// $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });


     //      $http({method: 'GET', url: 'https://login.live.com/oauth20_authorize.srf?client_id={"0000000044177AA6"}&scope={"onedrive.readonly"}&response_type=token&redirect_uri={"http://renniesb.github.io/sample_dashboard/#/"}'})
     //    .success(function(d){ console.log( "yay" ); })
     //    .error(function(d){ console.log( "nope" ); });


    };
})();