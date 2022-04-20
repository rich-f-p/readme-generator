// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 
${data.description}
# Table of Contents
1. [Instructions](#Instructions)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributions](#Contributions)
5. [Test](#Test)
6. [Questions](#questions)
## Instructions
${data.instructions}
## Usage
${data.usage}
## License
* ${data.license}
## Contributions
${data.contributions}
## Test
${data.test}
### Questions
* ${data.email}
* ${data.github}
`;
}

module.exports = generateMarkdown;
