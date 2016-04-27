#!/bin/bash
ifconfig br0 10.0.0.1/24
/etc/init.d/isc-dhcp-server start
/etc/init.d/vtun start

