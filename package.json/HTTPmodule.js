// Importing the HTTP module
const http = require('http');

// Setting up the server
const server = http.createServer((req, res) => {
  // Setting the content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Sending the response text
  res.end('I am happy to learn full stack web development from pw skills!\n');
});

// Setting the port for the server to listen on
const port = 3000;

// Starting the server and listening on the specified port
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
