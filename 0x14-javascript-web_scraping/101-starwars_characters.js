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

  // Get the array of characters URLs
  const characters = data.characters;

  // Define an array to store the character names
  const characterNames = [];

  // Define a counter to keep track of the number of requests completed
  let counter = 0;

  // Loop through each character URL
  for (let i = 0; i < characters.length; i++) {
    // Get the character URL at the current index
    const characterURL = characters[i];

    // Make another GET request to the character URL
    request(characterURL, function (error, response, body) {
      // Handle any errors
      if (error) {
        console.error(error);
        return;
      }

      // Parse the response body as JSON
      const characterData = JSON.parse(body);

      // Store the character name at the same index in the array
      characterNames[i] = characterData.name;

      // Increment the counter by one
      counter++;

      // Check if all requests are completed
      if (counter === characters.length) {
        // Print each character name by line in the same order
        for (let name of characterNames) {
          console.log(name);
        }
      }
    });
  }
});
