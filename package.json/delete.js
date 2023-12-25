const fs = require('fs');

const filePath = 'nodejs_architecture.txt';

fs.unlink(filePath, (err) => {
  if (err) {
    console.error(`Error deleting file: ${err.message}`);
  } else {
    console.log(`${filePath} deleted successfully`);
  }
});
