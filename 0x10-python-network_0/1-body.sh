#!/bin/bash
# Curls to the end, location!
response=$(curl -Ls "$1")
echo -e "Route 2\n$(whoami)@$(hostname):$(pwd)\$ $0 $1\n$response"
