// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "" ;
  switch(license){
case "GPL":
  badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  break;
case "APACHE":
  badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  break;
case "MIT":
  badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  break;
case "none":
  badge = "";
  break;
}return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link = "";
  switch(license){  
case "GPL":
  link = "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
  break;
case "APACHE":
  link = "[License](https://opensource.org/licenses/Apache-2.0)"
  break;
case "MIT":
  link = "[License: MIT](https://opensource.org/licenses/MIT)"
  break;
case "none":
  link = "";
  break;
  }return link;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var Include = renderLicenseLink(license);
  if(Include){
    return `## License
* ${Include}`
  }
  contents = "";
  return ""
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   ${renderLicenseBadge(data.license)}
## Description 
${data.description}

![${data.alt}](${data.image})

# Table of Contents
- [Instructions](#instructions)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Test](#test)
- [Questions](#questions)
## Instructions
${data.instructions}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributions
${data.contributions}
## Test
${data.test}
### Questions
For questions proceed to:
* [${data.email}](mailto:${data.email})
* [${data.github}](${data.github})
`;
}

module.exports = generateMarkdown;
