// Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 

const generateMarkdown = require('./utils/generateMarkdown');//<--- Gets functions from "generateMarkdown.js" file.

const licenses = ['No License', 'MIT', 'BSD', 'GPL', 'Apache']; //<--- Array for the different licenses a user can select. 

// Array of the questions that I ask the user
const questionsArr=[
'Please provide the Title of your Project?', 
'Please provide a description of your project', 
'Please provide the steps required to install your project?',
'Please provide instructions for how to use the application', 
'Please provide the URL for a screenshot of your project:',
'Please provide any collaborators you have worked with (if none, leave blank):',
'Please provide any tests for your project and examples how to run them:',
'Please select a license that you would like to use:',
'Please provide the title of your repository:', 
'Please provide your github username: ',
'Please provide your Email address: '
];

// Array of user prompts using the questions in "questionsArr".
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
      name: 'repoTitle',
      message: questionsArr[8]
    },
    {
      type: 'input',
      name: 'github',
      message: questionsArr[9],
    },
    {
      type: 'input',
      name: 'email',
      message: questionsArr[10],
    }
  ];

  // This function initializes the app and asks the user questions when called.
  function init() {
  inquirer.prompt(questions)
  // This function will write the data to a README file
  .then((response) => {
    const readMeContent = generateMarkdown(response);
    const fileName = './your_README/README.md';

    fs.writeFile(fileName, readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created your Read Me in the file "/your_README"!')
    );
  });
  };

// Function call to initialize app when user types "node (root folder)" into CLI.
init();