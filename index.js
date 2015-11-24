
/*
 * Module Dependencies
 */
var express = require('express');

var httpProxy = require('http-proxy');


var apiForwardingUrl = 'https://api.powerbi.com/v1.0/myorg';


var server = express();
server.set('port', 44326);
server.use(express.static(__dirname));


var apiProxy = httpProxy.createProxyServer();

console.log('Forwarding API requests to ' + apiForwardingUrl);

// Grab all requests to the server with "/dashboards/".
server.all("/dashboards/*", function(req, res) {

   apiProxy.web(req, res, {target: apiForwardingUrl});

});

server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});