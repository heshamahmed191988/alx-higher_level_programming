#!/bin/bash
# This script takes a URL as an argument, sends a POST request with two variables, and displays the body of the response
curl -sX POST -d "email=test@gmail.com&subject=I will always be here for PLD" "$1"
