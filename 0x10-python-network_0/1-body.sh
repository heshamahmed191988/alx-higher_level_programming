#!/bin/bash

url="$1"
response=$(curl -s -w "%{http_code}" "$url")

if [[ $response == 200 ]]; then
  body=$(curl -s "$url")
  echo "$body"
else
  echo "Error: Unexpected status code $response"
fi
