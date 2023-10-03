// TODO: Include packages needed for this application

const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');

// Title, Table of contents, Description, Installation, Usage, License, Contributing, Tests, Questions

const generateReadMe = ({title, description, installation, usage, License, images, credits, tests, github, email}) =>
`# ${title} 
## Table of Contents: 
[Description](#description) | [Installation](#installation) | [Usage](#usage) | [Contributing](#contributing) | [Tests](#tests) | [License](#license) | [Questions](#questions)

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

## Questions
If you have any questions, reach out to me at ${email} \n
Here is the link to my Github Profile: https://github.com/${github}`;

// TODO: Create an array of questions for user input
const questionsArr = [
'What is the Title of your Project?', 
'Please provide a description of your project explaining the what, why, and how:', 
'Please provide the steps required to install your project?',
'Please provide instructions for how to use the application', 
'Please provide the URL for any images you would like to use:',
'Please provide any collaborators you have worked with:',
'Please provide tests for your project and examples how to run them:',
'Please provide your github username: ',
'Please provide your Email address: '
];

inquirer.prompt([
    { 
      type: 'input',
      name: 'title',
      message: questionsArr[0],
    }, 
    {
      type: 'input',
      name: 'description',
      message: questionsArr[1],
    },
    {
      type: 'input',
      name: 'installation',
      message: questionsArr[2],
    },
    {
      type: 'input',
      name: 'usage',
      message: questionsArr[3],
    }, 
    {
      type: 'input',
      name: 'images',
      message:questionsArr[4],
    }, 
    {
      type: 'input',
      name: 'credits',
      message: questionsArr[5],
    },
    {
      type: 'input',
      name: 'tests',
      message: questionsArr[6],
    },
    {
      type: 'input',
      name: 'github',
      message: questionsArr[7],
    },
    {
      type: 'input',
      name: 'email',
      message: questionsArr[8],
    }
  ])
  .then((response) => {
    const readMeContent = generateReadMe(response);

    fs.writeFile('ReadMe.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created your Read Me!')
    );
  });





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();