#!/bin/bash
# This script takes a URL as an argument and displays the HTTP methods the server accepts
curl -sI "$1" | grep "Allow" | cut -d " " -f 2-
