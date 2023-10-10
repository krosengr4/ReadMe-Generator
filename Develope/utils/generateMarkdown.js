// This function returns a badge based on what license the user selects. 
function renderLicenseBadge(license) {
  let badge = '';

  if(license != 'No License') {
    badge = `![License Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return badge; 
};

// This function returns a link of the license that the user selects. Uses switch function.
function renderLicenseLink(license) {
  let licLink;

  switch(license) {
    case 'MIT':
      licLink = "https://opensource.org/license/mit/";
      break;
    case 'BSD':
      licLink = "https://opensource.org/license/bsd-3-clause/";
      break;
    case 'GPL':
      licLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache':
      licLink = 'https://opensource.org/license/apache-2-0/';
      break;
    case 'No License':
      licLink = '';
      break;
  }
  
  return licLink;
};

// Title, Table of contents, Description, Installation, Usage, License, Contributing, Tests, Questions
// This function generates how the readme file will look.
const generateMarkdown = ({title, description, installation, usage, images, credits, repoTitle, tests, license, email, github}) =>

`# ${title} \n 
${renderLicenseBadge(license)}

## Table of Contents: 
[Description](#description) \n
[Installation](#installation) \n
[Usage](#usage) \n
[Contributing](#contributing) \n
[Tests](#tests) \n
[License](#license) \n
[Questions](#questions) \n

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Images
![image](${images})

## Contributing
${credits}
### Please contribute to this project:
- [Submit Bugs and Request Features you'd like to see Implemented](https://github.com/${github}/${repoTitle}/issues)

## Tests
${tests}

## License
For more information about the license, please follow this link: ${renderLicenseLink(license)}

## Questions
Here is the link to my Github Profile: https://github.com/${github} \n
For any additional questions, email me at ${email}`; 

module.exports = generateMarkdown;