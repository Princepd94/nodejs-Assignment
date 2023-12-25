// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Get the default maximum number of listeners
const defaultMaxListeners = EventEmitter.defaultMaxListeners;

// Log the default maximum number of listeners
console.log(`Default maximum number of listeners: ${defaultMaxListeners}`);

// Set the maximum number of listeners to 5
myEmitter.setMaxListeners(5);

// Get the updated maximum number of listeners
const updatedMaxListeners = myEmitter.getMaxListeners();

// Log the updated maximum number of listeners
console.log(`Updated maximum number of listeners: ${updatedMaxListeners}`);
