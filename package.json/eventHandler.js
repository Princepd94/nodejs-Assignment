const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event handler
const myEventHandler = () => {
  console.log('Event handler is triggered!');
};

// Attach the event handler to the 'myEvent' event
myEmitter.on('myEvent', myEventHandler);

// Call the event handler by emitting the 'myEvent' event
myEmitter.emit('myEvent');

// Remove the event handler
myEmitter.off('myEvent', myEventHandler); // Note: 'off' is used for removing event handlers in newer versions of Node.js

// Try to call the event handler again
myEmitter.emit('myEvent');

myEmitter.removeListener('myEvent', myEventHandler);
