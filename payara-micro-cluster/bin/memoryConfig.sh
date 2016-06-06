#!/bin/bash        

if ! `echo $JAVA_OPTS | grep -q "\-Xms[[:digit:]\.]"`
then
            [ -z "$XMS" ] && { XMS=32M; }
            JAVA_OPTS=$JAVA_OPTS" $XMS"; 
fi

if ! `echo $JAVA_OPTS | grep -q "\-Xmn[[:digit:]\.]"`
then
            [ -z "$XMN" ] && { XMN=30M; }
            JAVA_OPTS=$JAVA_OPTS" $XMN"; 
fi

if ! `echo $JAVA_OPTS | grep -q "\-Xmx[[:digit:]\.]"`
then
            [ -z "$XMX" ] && {
                        #optimal XMX = 80% * total available RAM
                        #it differs a little bit from default values -Xmx http://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html
                        memory_total=`free -m | grep Mem | awk '{print $2}'`;
                        let XMX=memory_total*8/10;
                        XMX="${XMX}M";
            }
            JAVA_OPTS=$JAVA_OPTS" $XMX";
fi

if ! `echo $JAVA_OPTS | grep -q "\-XX:+Use.*GC"`
then
            GC_LIMMIT=8000;
            [ -z "$GC" ] && {  [ "$XMX" -ge "$GC_LIMMIT" ] && GC="-XX:+UseG1GC" || GC="-XX:+UseParNewGC"; }
            JAVA_OPTS=$JAVA_OPTS" $GC"; 
fi


if ! `echo $JAVA_OPTS | grep -q "\-Xminf[[:digit:]\.]"`
then
            [ -z "$XMINF" ] && { XMINF=-Xminf0.1; }
            JAVA_OPTS=$JAVA_OPTS" $XMINF"; 
fi

if ! `echo $JAVA_OPTS | grep -q "\-Xmaxf[[:digit:]\.]"`
then
            [ -z "$XMAXF" ] && { XMAXF=-Xmaxf0.3; }
            JAVA_OPTS=$JAVA_OPTS" $XMAXF"; 
fi

# 1) we need to check version of java, if it's > 7 then ignore this parameter 
# 2) otherwise to define MaxPermSize in optimal way (it should not be bigger than available RAM) 
if ! `echo $JAVA_OPTS | grep -q "\-XX:MaxPermSize"`
then
            [ -z "$MAXPERMSIZE" ] && { 
                        let MAXPERMSIZE_VALUE=$XMX/10; 
                        [ $MAXPERMSIZE_VALUE -ge 64 ] && {
                                    MAXPERMSIZE="-XX:MaxPermSize=$MAXPERMSIZE_VALUE";
                                    JAVA_OPTS=$JAVA_OPTS" $MAXPERMSIZE";
                        }
            }
            JAVA_OPTS=$JAVA_OPTS" $MAXPERMSIZE";
fi
   
if ! `echo $JAVA_OPTS | grep -q "UseCompressedOops"`
then
            JAVA_OPTS=$JAVA_OPTS" -XX:+UseCompressedOops"
fi

export $JAVA_OPTS

