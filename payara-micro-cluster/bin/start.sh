#!/bin/bash

PORT=${PORT:-80}
GC_PERIOD=${GC_PERIOD:-300}
GC_DEBUG=${GC_DEBUG:-0}
HAZELCAST_CONFIG="$PAYARA_PATH/config/hazelcast.xml";

sed -i "s@GROUPNAME@${HAZELCAST_GROUP}@g" $HAZELCAST_CONFIG;
sed -i "s@PASSWORD@${HAZELCAST_PASSWORD}@g" $HAZELCAST_CONFIG;

source $PAYARA_PATH/bin/memoryConfig.sh

[ ! -z "$VERT_SCALING" -a "$VERT_SCALING" != "false" -a "$VERT_SCALING" != "0" ] && JAVA_OPTS="$JAVA_OPTS -javaagent:$PAYARA_PATH/lib/jelastic-gc-agent.jar=period=$GC_PERIOD,debug=$GC_DEBUG"

java $JAVA_OPTS -jar $PAYARA_PATH/payara-micro.jar --port $PORT --deploymentDir $PAYARA_PATH/deployments --hzConfigFile $PAYARA_PATH/config/hazelcast.xml 

