// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = ["Academic Free License v3.0", "Apache license 2.0", "MIT", "Open Software License 3.0"]


function renderLicenseBadge(license) {
  if (license===licenseArr[0]){
    return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)"
  } else if (license===licenseArr[1]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license===licenseArr[2]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArr[3]){
    return "[![License: OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-lightgrey.svg)](https://opensource.org/licenses/OSL-3.0)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/AFL-3.0)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr[24]){
    return `[${licenseArr[24]}](https://opensource.org/licenses/OSL-3.0)`
  } else {
    return ""
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArr[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license===licenseArr[1]){
    return `Read more about ${licenseArr[1]} here:`
  } else if (license===licenseArr[2]){
    return `Read more about ${licenseArr[2]} here:`
  } else if (license===licenseArr[3]){
    return `Read more about ${licenseArr[3]} here:`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guideline)
  * [Test](#test)
  * [Any Questions?](#any-questions)
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contribution-Guidelines
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.contributing}
  ## Test
  ${data.testing}
  ## Any-Questions?
  ### Reach out here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}

module.exports = generateMarkdown;
