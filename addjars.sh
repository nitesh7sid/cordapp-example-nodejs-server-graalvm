#!/bin/bash
export JAR_HOME=/root/workspace/cordapp-example-nodejs-server-graalvm/jars
i=0
for f in $JAR_HOME/*.jar
do
echo $i
if [[ $i == 0 ]]
then 
JAR_CLASSPATH=$f
else
JAR_CLASSPATH=$JAR_CLASSPATH:$f
fi
i=$((i + 1))
done
export JAR_CLASSPATH
