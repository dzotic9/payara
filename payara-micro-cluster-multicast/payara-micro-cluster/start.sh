#!/bin/bash

/etc/init.d/vtun start

PORT=${PORT:-80}

java -jar /opt/payara-micro.jar --port $PORT --deploymentDir /opt/payara-micro-wars

