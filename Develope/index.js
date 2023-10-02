// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    { 
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'language',
    },
    {
      type: 'input',
      message: 'What is your preffered method of communication?',
      name: 'communication',
    },
  ])
  .then((response) => {
    fs.writeFile("read.txt", JSON.stringify(response, null, 2), (err) => {
      if(err) {
        console.log(err)
      }else{
        console.log("Success write to file!")
      }
    })
  });



  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

