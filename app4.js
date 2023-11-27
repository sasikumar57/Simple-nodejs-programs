// Import the os library (built-in)
const os = require('os');

// Simple function using os module
function getOSInfo() {
  return {
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
  };
}

// Call the function and log the output
console.log(getOSInfo());
