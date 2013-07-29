How to use
========

hosts2bind.sh:
#!/bin/bash
node /home/admin01/node-show/bind/main.js /home/admin01/main.json

main.json:
{
	"domains" : "/home/admin01/domains.txt",
	"hosts" : "/home/admin01/hosts",
	"bindFile" : "/etc/bind/named.conf.gfw",
	"dbFilePath" : "/etc/bind/zones/"
}

hosts address:
https://smarthosts.googlecode.com/svn/trunk/hosts
Power by https://code.google.com/p/smarthosts/
