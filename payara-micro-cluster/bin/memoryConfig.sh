#!/bin/bash        

GC_LIMMIT=8000;
[ -z "$XMS" ] && { XMS=32M; }
[ -z "$XMN" ] && { XMN=30M; }
local memory_total=`free -m | grep Mem | awk '{print $2}'`;
[ -z "$XMX" ] && {
            let XMX=memory_total-35;
            XMX="${XMX}M";
}
[ -z "$GC" ] && {  [ "$memory_total" -ge "$GC_LIMMIT" ] && GC="-XX:+UseG1GC" || GC="-XX:+UseParNewGC"; }

if ! `echo $confresult | grep -q "\-Xminf[[:digit:]\.]"`
then
    confresult=$confresult" -Xminf0.1"
fi

if ! `echo $confresult | grep -q "\-Xmaxf[[:digit:]\.]"`
then
           confresult=$confresult" -Xmaxf0.3"
fi

if ! `echo $confresult | grep -q "\-XX:MaxPermSize"`
then
            confresult=$confresult" -XX:MaxPermSize=256m "
fi
   
if ! `echo $confresult | grep -q "UseCompressedOops"`
then
            confresult=$confresult" -XX:+UseCompressedOops"
fi
export JAVA_OPTS=$confresult" $GC"

