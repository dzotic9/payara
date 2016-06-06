#!/bin/bash        

GC_LIMMIT=8000;
[ -z "$XMS" ] && { XMS=32M; }
[ -z "$XMN" ] && { XMN=30M; }
memory_total=`free -m | grep Mem | awk '{print $2}'`;
[ -z "$XMX" ] && {
#optimal XMX = 90% * total available RAM
#it differs from default values -Xmx http://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html
            let XMX=memory_total*9/10;
            XMX="${XMX}M";
}
[ -z "$GC" ] && {  [ "$XMX" -ge "$GC_LIMMIT" ] && GC="-XX:+UseG1GC" || GC="-XX:+UseParNewGC"; }

if ! `echo $confresult | grep -q "\-Xminf[[:digit:]\.]"`
then
    confresult=$confresult" -Xminf0.1"
fi

if ! `echo $confresult | grep -q "\-Xmaxf[[:digit:]\.]"`
then
           confresult=$confresult" -Xmaxf0.3"
fi

# 1) we need to check version of java, if it's > 7 then ignore this parameter 
# 2) otherwise to define MaxPermSize in optimal way (it should not be bigger than available RAM) 
if ! `echo $confresult | grep -q "\-XX:MaxPermSize"`
then
            confresult=$confresult" -XX:MaxPermSize=256m "
fi
   
if ! `echo $confresult | grep -q "UseCompressedOops"`
then
            confresult=$confresult" -XX:+UseCompressedOops"
fi
export JAVA_OPTS=$confresult" $GC"

