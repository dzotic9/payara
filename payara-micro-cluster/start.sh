#!/bin/bash

PORT=${PORT:-80}
HAZELCAST_CONFIG="/opt/config/hazelcast.xml";

sed -i "s@GROUPNAME@${HAZELCAST_GROUP}@g" $HAZELCAST_CONFIG;
sed -i "s@PASSWORD@${HAZELCAST_PASSWORD}@g" $HAZELCAST_CONFIG;

java -jar /opt/payara-micro.jar --port $PORT --deploymentDir /opt/payara-micro-wars --hzConfigFile /opt/config/hazelcast.xml

