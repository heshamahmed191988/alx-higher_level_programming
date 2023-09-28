#!/bin/bash
# This script takes a URL as an argument, sends a request, and displays the status code
curl -so /dev/null -w "%{http_code}" "$1"
