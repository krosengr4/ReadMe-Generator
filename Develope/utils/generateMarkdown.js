// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = '';

  if(license != 'No License') {
    badge = `![License Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return badge; 
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

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
// Function to generate the readme file format. 
const generateMarkdown = ({title, description, installation, usage, images, credits, tests, license, email, github}) =>

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

## How to Use
${usage}

## Images
![image](${images})

## Contributing
${credits}

## Tests
${tests}

## License
For more information about the license, please go here: ${renderLicenseLink(license)}

## Questions
If you have any questions, email me at ${email} \n
Here is the link to my Github Profile: https://github.com/${github}`;
  
// // return `# ${data.title}
// // `;

module.exports = generateMarkdown;