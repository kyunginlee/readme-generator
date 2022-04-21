// Packages required for application
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateReadme');
const axios = require('axios');
const fs = require('fs')

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
        name: 'contributorGuide',
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
        choices: ['mit', 'agpl', 'apache', 'none'],
        name: "license"
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Your github username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('*Github username required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('*Email required');
                return false;
            }
        }
    },
];

// Generate README function using fs writeFile with promise error handling
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/README.md', fileContent, err => {
            if (err) {
                reject(`Error during setup: ${err}`);
                return;
            }

            resolve({
                status: true,
                message: "README complete!"
            });
        });
    });
};

//Present question array and store user input
const init = () => {
    return inquirer.prompt(questions)
    .then(userInput => {
        return userInput;
    })
}

//Startup application 
init()
.then(userInput => {
    console.log(userInput);
    return generateReadme(userInput);
})
.then(outputMD => {
    return writeFile(outputMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})