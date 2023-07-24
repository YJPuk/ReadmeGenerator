// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
function answers(){
return inquirer.prompt([
    {
    type: 'Input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
    type: 'Input',
    name: 'email',
    message: 'What is your email address?',
    },
    {
    type: 'Input',
    name: 'project',
    message: 'What is your project name?',
    },
    {
    type: 'Input',
    name: 'description',
    message: 'Please write a short description of your project',
    },
    {
    type: 'list',
    name: 'license',
    message: 'What kind of Licese should your project have?',
    choices: ["MIT", "Apache 2.0", "BSD 3", "GPL 3.0", "None"]    
    },
    {
    type: 'Input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    },
    {
    type: 'Input',
    name: 'tests',
    message: 'What command should be run to run tests?',
    },
    {
    type: 'Input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
    },
    {
    type: 'Input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
    },
    {
    type: 'Input',
    name: 'fileName',
    message: 'What would you like to name the Readme?',
    },
  ])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./generated/${fileName}.md`, data, (err) =>
    err ? console.log(err): console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();
