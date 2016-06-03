#!/bin/bash

PORT=${PORT:-80}
HAZELCAST_CONFIG="/opt/config/hazelcast.xml";

sed -i "s@GROUPNAME@${HAZELCAST_GROUP}@g" $HAZELCAST_CONFIG;
sed -i "s@PASSWORD@${HAZELCAST_PASSWORD}@g" $HAZELCAST_CONFIG;

source /opt/memoryConfig.sh

JAVA_OPTS="$JAVA_OPTS -javaagent:/opt/lib/jelastic-gc-agent.jar"

java -jar /opt/payara-micro.jar $JAVA_OPTS --port $PORT --deploymentDir /opt/payara-micro-wars --hzConfigFile /opt/config/hazelcast.xml 

