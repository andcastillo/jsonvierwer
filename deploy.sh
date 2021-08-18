#!/bin/bash
# Execute this script to deploy the jsonviewer into the AWS instance. 
# We can move the deploy sequence into a tool for CD
rm Dockerfile
wget https://raw.githubusercontent.com/andcastillo/jsonvierwer/main/Dockerfile
docker stop jsonviewer
docker build -t jsonviewer .
docker run -d --rm -p 80:5000 --name jsonviewer jsonviewer
