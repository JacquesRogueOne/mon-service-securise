#!/bin/bash -e

PORT=${PORT:-1917}

docker-compose build
docker-compose run --rm -p ${PORT}:3000 -v $PWD:/usr/src/app web $*
