#Payara Micro Cluster - Advanced Pack 

Autoscaling triggers + Load balancing and Auto-discovery + Storage container with pre-deployed war application.    

###Topology 

<img src="https://docs.google.com/drawings/d/1Hne1WJ0fnVmpz3BqNYnCwGFp7ZJPLMN5qwcTl9z_CPw/pub?w=1033&h=804&rnd=3" width="500"/>

###Automated Actions 
1. create one PM container 
2. mount storage and deploy .war app
3. configure horizontal autoscaling triggers
4. add lb layer with auto-discovering
5. add build node with auto update from git (coming soon)    

### Deploy Now
[![Deploy](https://github.com/jelastic-jps/git-push-deploy/raw/master/images/deploy-to-jelastic.png)](https://jelastic.com/install-application/?manifest=https://raw.githubusercontent.com/jelastic-jps/payara/master/payara-micro-cluster-advanced/manifest.jps) 
