// Packages required for application
const inquirer = require('inquirer');
const 
const axios = require('axios');
const questions = [
    { 
        type: 'input', 
        message: "Your project title",
        name: "title"
    },
    { 
        type: 'input', 
        message: "Short description explaining your project",
        name: "description"
    },
    { 
        type: 'input', 
        message: "Table of Contents",
        name: "contents"
    },
    { 
        type: 'input', 
        message: "Steps to install your project",
        name: "installation"
    },
    { 
        type: 'input', 
        message: "Provide instructions and examples for use",
        name: "usage"
    },
    { 
        type: 'input', 
        message: "List contributors and collaborators along with their github profile and any resources",
        name: "usage"
    },
    { 
        type: 'input', 
        message: "Choose your license",
        name: "license"
    }
];

inquirer
  .prompt([
      { type: 'list', message: ""}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });