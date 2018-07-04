//node --jvm --jvm.cp=./corda-rpc-3.1-corda.jar:./corda-core-3.1-corda.jar:./kotlin-stdlib-1.1.60.jar:./corda-node-api-3.1-corda.jar test.js 


var rpcOps = require('./RPCConnection.js') 
var IOUState = Java.type('com.example.state.IOUState')
var ExampleFlow = Java.type('com.example.flow.ExampleFlow')
var CN = Java.type('net.corda.core.identity.CordaX500Name')

console.log(rpcOps)

//legal identity /me

function whoami(){
    var name = rpcOps.nodeInfo().getLegalIdentities().get(0).getName()
    return name
    //console.log(name.toString())
}

function getPeers(){
    
    //console.log(name.toString())
    //peers /getPeers() we need to filter ourselves, notary and networkmap
    var nodeInfo = rpcOps.networkMapSnapshot()
    nodeInfo.forEach(element => {
        //console.log(element)
    })
}

function createIOU(){

    var otherParty = rpcOps.wellKnownPartyFromX500Name(new CN("PartyB","New York","US"))
    // start a flow
    var signedTx = rpcOps.startTrackedFlowDynamic(ExampleFlow.Initiator, 2, otherParty).getReturnValue().get()
    console.log(signedTx.getId().toString())  
}

function getIOUs(){
    // get ious
    var iou = rpcOps.vaultQuery(IOUState).getStates()
    iou.forEach(element => {
        console.log(element.getState().getData().toString())
    })
}
