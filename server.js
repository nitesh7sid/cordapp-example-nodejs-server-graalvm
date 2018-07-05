var express = require('express')
const bodyParser     = require('body-parser');
var nodeConfig = require('./nodeConfig.json')
var port = nodeConfig.webServers[0].webPort
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes'); 
routes(app); 

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

rpcOps = require('./RPCConnection.js') 

var server = app.listen(port, function(){
    console.log(nodeConfig.webServers[0].OrganizationName +" "+ "Node.js server listening on port" +" "+port)
})