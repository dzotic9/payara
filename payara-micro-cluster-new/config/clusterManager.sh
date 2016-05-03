#!/bin/bash

HAZALCAST_CONFIG="/opt/hazelcast.xml";
LOG="/var/log/cluster_manager.log"

echo "$@" >> $LOG;

function addHost(){
    [ ! -z "$host" ] && { grep -q "$host" $HAZALCAST_CONFIG || sed -i "/<member-list/a  <member>${host}</member>" $HAZALCAST_CONFIG; 
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
