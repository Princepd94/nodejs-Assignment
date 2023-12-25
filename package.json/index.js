// index.js

const fs = require('fs');

// Information about Node.js architecture
const nodejsArchitectureInfo = `
Node.js Architecture:

Node.js is built on the V8 JavaScript runtime and follows an event-driven, non-blocking I/O model that makes it lightweight and efficient. It uses an event loop for handling asynchronous operations and a single-threaded event-driven architecture.

Key components of Node.js architecture include:
1. Event Loop: Manages asynchronous operations and callbacks.
2. V8 Engine: Google's open-source JavaScript engine for executing JavaScript code.
3. Libuv: Provides the event loop implementation and handles I/O operations.
4. Modules: Encapsulated units of functionality using the CommonJS module system.
5. NPM (Node Package Manager): Manages dependencies and packages for Node.js projects.

Node.js is well-suited for building scalable network applications and is commonly used for server-side development.

`;

// Writing Node.js architecture information to nodejs_architecture.txt
fs.writeFile('nodejs_architecture.txt', nodejsArchitectureInfo, (err) => {
  if (err) {
    console.error('Error writing to nodejs_architecture.txt:', err);
  } else {
    console.log('Node.js architecture information has been written to nodejs_architecture.txt');
  }
});
