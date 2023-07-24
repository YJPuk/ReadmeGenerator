// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = ["MIT", "Apache 2.0", "BSD 3", "GPL 3.0", "None"]
function renderLicenseBadge(license) {
  if (license===licenses[0]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenses[1]){
    return "[[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license===licenses[2]){
    return "[[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license===licenses[3]){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else {
  return ""  
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenses[0]){
    return `[${licenses[0]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenses[1]){
    return `[${licenses[1]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenses[2]){
    return `[${licenses[2]}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license===licenses[3]){
    return `[${licenses[3]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
  return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenses[0]){
    return `You can read more about ${licenses[0]} by clicking here`
  } else if (license===licenses[1]){
    return `You can read more about ${licenses[1]} by clicking here`
  } else if (license===licenses[2]){
    return `You can read more about ${licenses[2]} by clicking here`
  } else if (license===licenses[3]){
    return `You can read more about ${licenses[3]} by clicking here`
  } else {
  return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ${renderLicenseBadge(data.license)}

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  To run test, run the following command:
  ${data.tests}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}
  You can find more of my work at [${data.username}](https://github.com/${data.username}) .  
  `;
}

module.exports = generateMarkdown;
