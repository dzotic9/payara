#!/bin/bash

HAZALCAST_CONFIG="/opt/config/hazelcast.xml";
LOG="/var/log/cluster_manager.log"

echo "$@" >> $LOG;
sed -i "s@USERNAME@${HAZALCAST_USER}@g" $HAZALCAST_CONFIG;
sed -i "s@PASSWORD@${HAZALCAST_PASSWORD}@g" $HAZALCAST_CONFIG;

function addHost(){
    [ ! -z "$host" ] && { grep -q "$host" $HAZALCAST_CONFIG || sed -i "/<member-list/a \\\t\t\t<member>${host}</member>" $HAZALCAST_CONFIG; 
    echo "HOST $host ADEED"  >>  $LOG; }
}



function removeHost(){
    [ ! -z "$host" ] && sed -i "/${host}/d" $HAZALCAST_CONFIG && echo "HOST $host REMOVED"  >>  $LOG;

}

while [ "$1" != "" ];
   do
    case $1 in

    --addhost )                     shift;
                                    host="$1";
                                    addHost;
                                    ;;
    --removehost )                  shift;
                                    host="$1";
                                    removeHost;
                                    ;;
    esac
    shift
  done
