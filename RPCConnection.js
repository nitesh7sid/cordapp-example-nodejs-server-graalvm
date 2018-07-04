var nodeConfig = require('./nodeConfig.json')
var rpcAddress = nodeConfig.webServers[0].rpcAddress
var rpcPort = nodeConfig.webServers[0].rpcPort
var rpcUserName = nodeConfig.webServers[0].rpcUserName
var rpcUserPassword = nodeConfig.webServers[0].rpcUserPassword
var CordaRPCClient = Java.type('net.corda.client.rpc.CordaRPCClient')
var networkHostAndPort = Java.type('net.corda.core.utilities.NetworkHostAndPort')
var rpcAddress = new networkHostAndPort(rpcAddress, rpcPort)
var rpcClient = new CordaRPCClient(rpcAddress)
var rpcConnection = rpcClient.start(rpcUserName, rpcUserPassword)
var rpcOps = rpcConnection.getProxy()

module.exports = rpcOps