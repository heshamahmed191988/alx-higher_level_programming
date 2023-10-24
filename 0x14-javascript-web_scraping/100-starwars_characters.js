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

  // Define a recursive function to print each character name
  function printCharacter(index) {
    // Base case: if index is out of bounds, return
    if (index >= characters.length) {
      return;
    }

    // Get the character URL at the current index
    const characterURL = characters[index];

    // Make another GET request to the character URL
    request(characterURL, function (error, response, body) {
      // Handle any errors
      if (error) {
        console.error(error);
        return;
      }

      // Parse the response body as JSON
      const characterData = JSON.parse(body);

      // Print the character name
      console.log(characterData.name);

      // Call the recursive function with the next index
      printCharacter(index + 1);
    });
  }

  // Call the recursive function with the initial index of 0
  printCharacter(0);
});
