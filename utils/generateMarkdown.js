// function that returns a license badge based on which license is passed in
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
// function that returns the license link
function renderLicenseLink(license) {
  let link = "";
  switch(license){  
case "GPL":
  link = `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0) : click to learn more`
  break;
case "APACHE":
  link = `[License: APACHE](https://opensource.org/licenses/Apache-2.0) : click to learn more`
  break;
case "MIT":
  link = `[License: MIT](https://opensource.org/licenses/MIT) : click to learn more`
  break;
case "none":
  link = "";
  break;
  }return link;
}
//function that returns the license section of README
function renderLicenseSection(license) {
  var include = renderLicenseLink(license);
  if(include){
    return `## License
${include}`
  }
  return "";
}
function licenseTOC(license){
  var include = renderLicenseLink(license)
  if(include){
    return `- [License](#license)`;
  }return "";
}
// function to generate markdown template for README
function generateMarkdown(data) {
  return `# ${data.title}   ${renderLicenseBadge(data.license)}
## Description 
${data.description}

![${data.alt}](${data.image})

# Table of Contents
- [Instructions](#instructions)
- [Usage](#usage)
${licenseTOC(data.license)}
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
* [${data.github}](https://github.com/${data.github})
`;
}
// export function
module.exports = generateMarkdown;
