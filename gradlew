#!/bin/sh
exec java -Xmx64m -Dfile.encoding=UTF-8 -jar "$0"/../gradle/wrapper/gradle-wrapper.jar "$@"