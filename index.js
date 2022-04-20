// Packages required for application
const inquirer = require('inquirer');
const generateReadme = require('./config/generateReadme');
const axios = require('axios');
const { fstat } = require('fs');

// prompts requiring user input
const questions = [
    { 
        type: 'input', 
        message: "Your project title",
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('*Project title required')
                return false;
            }
        }
    },
    { 
        type: 'input', 
        message: "Short description explaining your project",
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('*Description required')
                return false;
            }
        }
    },
    { 
        type: 'input', 
        message: "Steps to install your project",
        name: 'install',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('*Installation instructions required')
                return false;
            }
        }
    },
    { 
        type: 'input', 
        message: "Provide instructions and examples for use",
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('*Use cases required')
                return false;
            }
        }
    },
    { 
        type: 'confirm', 
        message: "Include contributors and collaborators along with their github profile and any resources?",
        name: 'contributor',
        default: true
    },
    {
        type: 'input',
        message: "Include guide for contributors",
        name: 'contributeGuide',
        when: ({ contributor}) => {
            if (contributor) {
                return true;
            } else {
                return false;
            }
        }
    },
    { 
        type: 'list', 
        message: "Choose your license",
        choices: ['agpl', 'apache', 'mit', 'no license'],
        name: "license"
    }
];

// Generate README function
const generateFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "README complete!"
            });
        });
    });
};

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