const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the 'subscribe' event
eventEmitter.on('subscribe', (channel) => {
  console.log(`Thanks for subscribing to ${channel}`);
});

// Trigger the 'subscribe' event
eventEmitter.emit('subscribe', 'college wallah');
