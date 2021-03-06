#!/bin/bash
# Execute this script on a new AWS VM to prepare the instance for jsonviewer. 

sudo yum update -y
sudo amazon-linux-extras install docker
sudo yum install docker
sudo service docker start
sudo systemctl enable docker.service
sudo usermod -a -G docker ec2-user

sudo reboot
