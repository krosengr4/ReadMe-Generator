// TODO: Include packages needed for this application

const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [
'What is the Title of your Project?', 
'What was the motivation to build your project?', 
'What problem does it solve?', 
'If your README is long, include a table of contents. ie (Descritption, Installation, Usage, Credits)',
'What are the steps required to install your project?',
'Provide instructions for how to use the application', 
'Provide any screenshots:',
'List the collaborators you have worked with:',
];

inquirer.prompt([
    { 
      type: 'input',
      name: 'Title',
      message: questions[0],
    }, 
    {
      type: 'input',
      name: 'Description1',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'Description2',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'Contents',
      message: questions[3],
    }, 
    {
      type: 'input',
      name: 'Installation',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'Usage',
      message: questions[5],
    }, 
    {
      type: 'input',
      name: 'Screenshots',
      message:questions[6],
    }, 
    {
      type: 'input',
      name: 'Credits',
      message: questions[7],
    },
  ]);

  // const generateReadMe = ({Title, Description1, Description2, Description3, Contents, Installation, Usage, Screenshots, Credits}) =>





  // .then((response) => {
  //   fs.writeFile("ReadMe.md", JSON.stringify(response, null, 2), (err) => {
  //     if(err) {
  //       console.log(err)
  //     }else{
  //       console.log("Success write to file!")
  //     }
  //   })
  // });



  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();