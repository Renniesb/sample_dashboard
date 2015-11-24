(function () {
  'use strict';

  var demoApp = angular.module('demoApp');

  demoApp.config(['$httpProvider', 'adalAuthenticationServiceProvider', 'appId', 'powerBIUrl', adalConfigurator]);

  function adalConfigurator($httpProvider, adalProvider, appId, powerBIUrl) {
      var adalConfig = {
          instance: 'https://login.microsoftonline.com/',
      tenant: 'e4c4ef57-deb2-4c90-be22-d6cd73eb5a3b',//'common',
      clientId: appId,
      extraQueryParameter: 'nux=1',
      endpoints: {},
      cacheLocation: 'localStorage' // enable this for IE, as sessionStorage does not work for localhost.
    };
      //The url used to talk to the powerbi api
      adalConfig.endpoints['https://api.powerbi.com/v1.0/myorg'] = powerBIUrl;
    adalProvider.init(adalConfig, $httpProvider);
  }
})();
