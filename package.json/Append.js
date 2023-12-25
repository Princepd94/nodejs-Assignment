const fs = require('fs');

const filePath = 'nodejs_architecture.txt';
const additionalData = '\nAdvantages of Node.js:\n1. Non-blocking I/O operations\n2. Scalability\n3. Fast execution\n4. Large ecosystem of modules\n5. Cross-platform\n6.Flexibility\n';

// Read existing content
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
    return;
  }

  // Append additional data
  const updatedContent = data + additionalData;

  // Write updated content back to the file
  fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to the file: ${err}`);
      return;
    }

    console.log('Additional data has been appended to the file.');

    // Read and print the updated content to the console
    fs.readFile(filePath, 'utf8', (err, updatedData) => {
      if (err) {
        console.error(`Error reading the updated file: ${err}`);
        return;
      }

      console.log('\nUpdated File Content:');
      console.log(updatedData);
    });
  });
});
