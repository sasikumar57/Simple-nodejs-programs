// Import the uuid library
const { v4: uuidv4 } = require('uuid');

// Simple function using uuid
function generateUUID() {
  return uuidv4();
}

// Call the function and log the output
console.log('Generated UUID:', generateUUID());
