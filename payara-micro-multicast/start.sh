#!/bin/bash

/etc/init.d/vtun start

java -jar /opt/payara-micro.jar --deploymentDir /opt/payara-micro-wars

