// Install axios: npm install axios
const axios = require('axios');

async function fetchGitHubUserProfile(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

fetchGitHubUserProfile('octocat').then(data => console.log(data)); // Output: GitHub user profile data for 'octocat'
