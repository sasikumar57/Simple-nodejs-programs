// Install moment.js: npm install moment
const moment = require('moment');

function getCurrentDate() {
  return moment().format('YYYY-MM-DD');
}

console.log(getCurrentDate()); 
