![Payara Logo](http://cdn2.hubspot.net/hub/334594/hubfs/Payara_Blog_Images/payara_logo_edited.jpg?t=1464882446136&width=150) 
## Payara Micro Cluster

The JPS package initially deploys one container with [Payara Micro](http://blog.payara.fish/introducing-payara-micro) application server. 
### Topology 

![Payara Micro Cluster Topology](https://docs.google.com/drawings/d/1wmuodzkGoiWnHw_4LT-MZ07mRRyDOhoOlykSxQ5dIBk/pub?w=400&h=82)

### Horizontal Scaling 

When application server cluster scales out new containers join the cluster automatically. When it scales in the cluster removes deleted containers automatically. Underlying clustering mechanism is based on Hazelcast.        

Scaling can be triggered manually via [Jelastic Topology Wizard](https://docs.jelastic.com/multi-nodes#app) or automatically by defining [horizontal scaling triggers](https://docs.jelastic.com/automatic-horizontal-scaling#set-up) or via [Jelastic API](https://docs.jelastic.com/api/).

### Vertical Scaling 

Each container with Payara Micro application server can be scaled vertically by increasing the total RAM limits for the container. By default, [optimal memory configs](bin/memoryConfig.sh) will be applied to JVM according to the available RAM. You can redefine default configs with environment variables such as XMX, XMS, XMN, MAXPERSIZE, XMAXF, XMINF, GC or directly adjust the memory configs script.

### Pricing Details

In addition, the package injects [Jelastic GC Agent](lib/jelastic-gc-agent.jar) that helps to scale JVM vertically automatically by forcing memory heap compaction periodically by default. As a result the application consumes less RAM during idle time. 

<img src="https://drive.google.com/uc?export=view&id=0BwJfg6h8bVzUVDNyWkh1aTZ3OGM" alt="JVM Automatic Vertical Scaling" align="left" width="500" >

This approach helps to save money and do not pay for unused resources. More details about the benefits of this technology can be found in the article [The Only PaaS with Automatic Vertical Scaling for Containers](http://blog.jelastic.com/2014/12/11/paas-automatic-vertical-scaling/).  


Please note, Full GC is used by the agent. If it significantly influences performance of your application then you can easily disable the agent injection by defining environment variable VERT_SCALING=false.

### Deployment

The JPS package can be deployed via [environment import](https://docs.jelastic.com/environment-export-import#import) feature.

