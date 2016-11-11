![Payara Logo](http://cdn2.hubspot.net/hub/334594/hubfs/Payara_Blog_Images/payara_logo_edited.jpg?t=1464882446136&width=150) 
## Payara Micro Cluster

The JPS package initially deploys one container with [Payara Micro](http://blog.payara.fish/introducing-payara-micro) application server and one container with VTun bridge together with DCHP server for multicast networking setup across all containers in the environment.

### Topology 

![Payara Micro Cluster Topology](https://docs.google.com/drawings/d/1iFON5ngFWK821RNAEPQ20g-JVfzT7gUconiNB2ksiNc/pub?w=400&h=128)

### Horizontal Scaling 

When application server cluster scales out new containers join the cluster automatically. When it scales in the cluster removes deleted containers automatically. Underlying clustering mechanism is based on Hazelcast.        

Scaling can be triggered manually via [Jelastic Topology Wizard](https://docs.jelastic.com/multi-nodes#app) or automatically by defining [horizontal scaling triggers](https://docs.jelastic.com/automatic-horizontal-scaling#set-up) or via [Jelastic API](https://docs.jelastic.com/api/).

### Deployment

In order to get this solution instantly deployed, click the "Get It Hosted Now" button, specify your email address within the widget, choose one of the [Jelastic Public Cloud providers](https://jelastic.cloud) and press Install.

[![GET IT HOSTED](https://raw.githubusercontent.com/jelastic-jps/jpswiki/master/images/getithosted.png)](https://jelastic.com/install-application/?manifest=https%3A%2F%2Fgithub.com%2Fjelastic%2Fpayara%2Fraw%2Fmaster%2Fpayara-micro-cluster-multicast%2Fmanifest.jps&min-version=4.6&keys=app.mircloud.host;app.jelastic.dogado.eu;app.fi.cloudplatform.fi;app.appengine.flow.ch;app.jelasticlw.com.br;app.paas.datacenter.fi;app.whelastic.net)

To deploy this package to Jelastic  Cloud, import [this JPS manifest](../../../raw/master/payara-micro-cluster-multicast/manifest.jps) within your dashboard ([detailed instruction](https://docs.jelastic.com/environment-export-import#import)).

More information about Jelastic JPS package and about installation widget for your website can be found in the [Jelastic JPS Application Package](https://github.com/jelastic-jps/jpswiki/wiki/Jelastic-JPS-Application-Package) reference.

