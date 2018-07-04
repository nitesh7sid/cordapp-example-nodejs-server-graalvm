var nodeConfig = require('./nodeConfig.json')
var express = require('express')
var app = express();
var port = nodeConfig.webServers[0].webPort
var server = app.listen(port, function(){
    console.log(nodeConfig.webServers[0].OrganizationName +" "+ "Node.js server listening on port" +" "+port)
})