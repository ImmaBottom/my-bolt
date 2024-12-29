<<<<<<< HEAD
const { execSync } = require('child_process');

// Get git hash with fallback
const getGitHash = () => {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'no-git-info';
  }
};

let commitJson = {
  hash: JSON.stringify(getGitHash()),
  version: JSON.stringify(process.env.npm_package_version),
};
=======
const { commit } = require('./app/commit.json');
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e

console.log(`
★═══════════════════════════════════════★
          B O L T . D I Y
         ⚡️  Welcome  ⚡️
★═══════════════════════════════════════★
`);
<<<<<<< HEAD
console.log('📍 Current Version Tag:', `v${commitJson.version}`);
console.log('📍 Current Commit Version:', commitJson.hash);
console.log('  Please wait until the URL appears here');
console.log('★═══════════════════════════════════════★');
=======
console.log('📍 Current Commit Version:', commit);
console.log('  Please wait until the URL appears here')
console.log('★═══════════════════════════════════════★');
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e
