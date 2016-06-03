![Payara Logo](http://cdn2.hubspot.net/hub/334594/hubfs/Payara_Blog_Images/payara_logo_edited.jpg?t=1464882446136&width=150) 
## Payara Micro Cluster

The package deploys initially one container with Payara Micro application server. When it scales out new containers join the cluster automatically. When it scales in the cluster removes deleted containers automatically. Underlying clustering mechanism is based on Hazelcast.        

Scaling can be triggered manually via [Jelastic Topology Wizard](https://docs.jelastic.com/multi-nodes#app) or automatically by defining [horizontal scaling triggers](https://docs.jelastic.com/automatic-horizontal-scaling#set-up) or via [Jelastic API](https://docs.jelastic.com/api/) 

### Topology 

![Payara Micro Cluster Topology](https://docs.google.com/drawings/d/1wmuodzkGoiWnHw_4LT-MZ07mRRyDOhoOlykSxQ5dIBk/pub?w=342&h=70)

