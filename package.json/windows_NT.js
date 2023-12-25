const os = require('os');

// Get operating system name
const osName = os.type();

// Get operating system release version
const osRelease = os.release();

// Print the information to the console
console.log(`Operating system name: ${osName}, OS release: ${osRelease}`);
