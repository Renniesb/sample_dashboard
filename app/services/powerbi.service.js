(function() {
    'use strict'
    angular.module('demoApp').service('powerbiService', ['powerBIUrl', '$http','$resource', powerbiService]);

    function powerbiService(powerBIUrl, $http, $resource) {
        // return {
        //     getGroups: getGroups
        // };

        function getUrl(path)
        {
            return "https://api.powerbi.com/v1.0/myorg/" + path
        }


          $http({method: 'GET', url: getUrl('dashboards'))
        .success(function(d){ console.log( "yay" ); })
        .error(function(d){ console.log( "nope" ); });


    };
})();