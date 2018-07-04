# cordapp-example-nodejs-server-graalvm
This example demonstates a nodejs server which uses corda rpc-3.1 library running in GraalVM. The nodejs server serves APIs to create IOU, fetch IOUs similar to the [cordapp-example](https://github.com/corda/cordapp-example)

## Pre-requisites
* [Cordapp-example network](https://docs.corda.net/tutorial-cordapp.html#running-the-example-cordapp)
* [GraalVM environment](https://www.graalvm.org/docs/getting-started/)


### Setting Up the GraalVM environment

* Follow the official [GraalVM](https://www.graalvm.org/docs/getting-started/) documentation on how to setup the Graal for linux or osX.
* To learn more about GraalVM refer to the Mike Hearn's [blog](https://groups.io/g/corda-dev/topic/corda_scripting_languages/21231730?p=,,,20,0,0,0::recentpostdate%2Fsticky,,,20,2,0,21231730) 

### Steps to the run the node.js server with GraalVM

* Run the [cordapp-example](https://docs.corda.net/tutorial-cordapp.html#running-the-example-cordapp) nodes
* Make sure that the `nodeConfig.json` file matches the settings of a running node
* Run `./gradlew printClassPath` once to make sure everything is downloaded. You should see a big classpath be printed.
* Run `npm install` from root directory of the project to install express and body-parser npm modules.
* Run `node --jvm --jvm.cp=$( ./gradlew -q printClasspath ) server.js`
* Output will look like:
```PartyA Node.js server listening on port 3000```

### TroubleShooting

If you get the following error when starting the server, you need to install GraalVM:

    node: bad option: --jvm
    node: bad option: --jvm.cp=
    
### Interacting with the Cordaapp-example network to create IOUs from nodejs server

1) ### Create-iou 

```curl -d '{"iouValue":10, "otherPartyOrgName":"PartyB","otherPartyOrgCountry":"New York", "otherPartyOrgLocality":"US"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/example/create-iou```

2) ### Fetch IOUs

``` curl http://localhost:3000/api/example/ious```

Other endpoints

* GET /api/example/me
* GET /api/example/peers
