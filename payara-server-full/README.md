![Payara Logo](http://cdn2.hubspot.net/hub/334594/hubfs/Payara_Blog_Images/payara_logo_edited.jpg?t=1464882446136&width=150) 
## Payara Server Full

The JPS package initially deploys one container with Payara Server Full. The package is based on the official [Payara Docker image](https://github.com/payara/docker-payaraserver-full).

### Deployment

In order to get this solution instantly deployed, click the "Get It Hosted Now" button, specify your email address within the widget, choose one of the [Jelastic Public Cloud providers](https://jelastic.cloud) and press Install.

[![GET IT HOSTED](https://raw.githubusercontent.com/jelastic-jps/jpswiki/master/images/getithosted.png)](https://jelastic.com/install-application/?manifest=https%3A%2F%2Fgithub.com%2Fjelastic%2Fpayara%2Fraw%2Fmaster%2Fpayara-server-full%2Fmanifest.jps&min-version=4.6&keys=app.mircloud.host;app.jelastic.dogado.eu;app.fi.cloudplatform.fi;app.appengine.flow.ch;app.jelasticlw.com.br;app.paas.datacenter.fi;app.whelastic.net)

To deploy this package to Jelastic  Cloud, import [this JPS manifest](../../../raw/master/payara-server-full/manifest.jps) within your dashboard ([detailed instruction](https://docs.jelastic.com/environment-export-import#import)).

More information about Jelastic JPS package and about installation widget for your website can be found in the [Jelastic JPS Application Package](https://github.com/jelastic-jps/jpswiki/wiki/Jelastic-JPS-Application-Package) reference.

### Access to Admin Console 
After the deployment go to [Endpoints Panel](https://docs.jelastic.com/endpoints) and copy the predefined link to the admin console.  

Default Credentials: admin/admin
