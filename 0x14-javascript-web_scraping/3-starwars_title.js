#!/usr/bin/node
// Import the request module
const request = require('request');

// Get the movie ID from the first argument
const movieID = process.argv[2];

// Construct the API endpoint URL
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

// Make a GET request to the API endpoint
request(url, function (error, response, body) {
  // Handle any errors
  if (error) {
    console.error(error);
    return;
  }

  // Parse the response body as JSON
  const data = JSON.parse(body);

  // Print the title of the movie
  console.log(data.title);
});
