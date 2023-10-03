// Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['No License', 'MIT', 'BSD', 'GPL', 'Apache']; //<--- Array for the different licenses a user can select. 

// Array of the questions that I ask the user
const questionsArr=[
'Please provide the Title of your Project?', 
'Please provide a description of your project explaining the what, why, and how:', 
'Please provide the steps required to install your project?',
'Please provide instructions for how to use the application', 
'Please provide the URL for any images you would like to use:',
'Please provide any collaborators you have worked with:',
'Please provide any tests for your project and examples how to run them:',
'Please select a license that you would like to use:',
'Please provide your github username: ',
'Please provide your Email address: '
];

const questions = [
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
      type: 'list',
      name: 'license',
      message: questionsArr[7],
      choices: licenses,
    },
    {
      type: 'input',
      name: 'github',
      message: questionsArr[8],
    },
    {
      type: 'input',
      name: 'email',
      message: questionsArr[9],
    }
  ];

  // This function initializes the app and asks the user questions when node index.js is run in command line.
  function init() {
  inquirer.prompt(questions)
  // This function will write the data to a README file
  .then((response) => {
    const readMeContent = generateMarkdown(response);

    fs.writeFile('ReadMe.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created your Read Me!')
    );
  });
  };

// Function call to initialize app when user types "node (root folder)" into CLI.
init();