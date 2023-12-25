// Import the fs module
const fs = require('fs');

// Specify the file name to read
const fileName = 'nodejs_architecture.txt';

// Use fs.readFile to read the content of the file
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    // Handle any errors that occurred during reading the file
    console.error(`Error reading ${fileName}: ${err.message}`);
  } else {
    // Print the content to the console
    console.log(`Content of ${fileName}:\n${data}`);
  }
});
