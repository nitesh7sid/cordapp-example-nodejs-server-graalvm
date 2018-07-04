//node --jvm --jvm.cp=./corda-rpc-3.1-corda.jar:./corda-core-3.1-corda.jar:./kotlin-stdlib-1.1.60.jar:./corda-node-api-3.1-corda.jar test.js 

var nodeConfig = require('./nodeConfig.json')
var rpcAddress = nodeConfig.webServers[0].rpcAddress
var rpcPort = nodeConfig.webServers[0].rpcPort
var rpcUserName = nodeConfig.webServers[0].rpcUserName
var rpcUserPassword = nodeConfig.webServers[0].rpcUserPassword
var CordaRPCClrpcPortient = Java.type('net.corda.client.rpc.CordaRPCClient')
var networkHostAndPort = Java.type('net.corda.core.utilities.NetworkHostAndPort')
//var InitiatorFlow = Java.type('com.example.flow.ExampleFlow')
//var IOUState = Java.type('com.example.state.IOUState')
//var CN = Java.type('net.corda.core.identity.CordaX500Name')
// create object of the class in the std js way
var rpcAddress = new networkHostAndPort(rpcAddress, rpcPort)
var rpcClient = new CordaRPCClient(rpcAddress)
var rpcConnection = rpcClient.start(rpcUserName, rpcUserPassword)
var rpcOps = rpcConnection.getProxy()

module.exports = rpcOps

/*console.log(rpcOps)

//legal identity /me
var name = rpcOps.nodeInfo().getLegalIdentities().get(0).getName()
//console.log(name.toString())

//peers /getPeers() we need to filter ourselves, notary and networkmap
var nodeInfo = rpcOps.networkMapSnapshot()
nodeInfo.forEach(element => {
    //console.log(element)
})

// create iou
var otherParty = rpcOps.wellKnownPartyFromX500Name(new CN("PartyB","New York","US"))


// start a flow
//var signedTx = rpcOps.startTrackedFlowDynamic(InitiatorFlow.Initiator, 2, otherParty).getReturnValue().get()
//console.log(signedTx.getId().toString())

// get ious
var iou = rpcOps.vaultQuery(IOUState).getStates()
iou.forEach(element => {
    console.log(element.getState().getData().toString())
})*/