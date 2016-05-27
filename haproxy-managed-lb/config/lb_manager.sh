#!/bin/bash

HAPROXY_CONFIG="/usr/local/etc/haproxy/haproxy.cfg";
HAPROXY_PID="/var/run/haproxy.pid";

echo "$@" >> /var/log/lb_manager.log

function add_hosts(){
for host in ${hosts}
    do
        grep -q "${host}:[0-9]* " $HAPROXY_CONFIG && return 0;
        count=$(cat $HAPROXY_CONFIG | grep -o "webserver[0-9]*" | sed 's/webserver//g' | sort -n | tail -n1);
        let "count+=1";
        sed -i "/backend bk_http ###HOSTS/a\server webserver${count} ${host}:80 check" $HAPROXY_CONFIG;
    done
    [  -f "$HAPROXY_PID" ] && haproxy -D -f $HAPROXY_CONFIG  -p $HAPROXY_PID -sf $(cat $HAPROXY_PID) || haproxy -D -f $HAPROXY_CONFIG  -p $HAPROXY_PID
}



function remove_host(){
    sed -i '/server.*webserver.*'${host}'/d' $HAPROXY_CONFIG;
    haproxy -D -f $HAPROXY_CONFIG  -p /var/run/haproxy.pid -sf $(cat /var/run/haproxy.pid);
}

function clean(){
    sed -i '/server.*webserver.*/d' $HAPROXY_CONFIG;
    }

while [ "$1" != "" ];
   do
    case $1 in

    --addhosts )                    shift;
                                    hosts="$@";
                                    add_hosts;
                                    #shift
                                    ;;
    --removehost )                  shift;
                                                    host="$1";
                                    remove_host;
                                    ;;
    --clean )                       #shift;
                                    clean;
#                                   shift
                                                    ;;
    esac
    shift
  done