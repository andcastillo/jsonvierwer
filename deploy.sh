#!/bin/bash

rm Dockerfile
wget https://raw.githubusercontent.com/andcastillo/jsonvierwer/main/Dockerfile
docker stop jsonviewer
docker build -t jsonviewer .
docker run -d --rm -p 80:5000 --name jsonviewer jsonviewer