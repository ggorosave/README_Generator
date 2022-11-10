// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the name of your project repo?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should the user run to install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'MPL 2.0', 'BSL 1.0', 'None',],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run tests?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

    // Logs instructions on screen
    console.log('=================================INSTRUCTIONS=================================')
    console.log('')
    console.log('Welcome to the README generator!')
    console.log('Answer the following questions to generate a README for your GitHub project.')
    console.log('If you want to exclude a section from your README or enter it manually, leave the answer blank.')
    console.log('(Do not exclude the description, GitHub username, or email.)')
    console.log('')
    console.log('==============================================================================')
    console.log('')

    inquirer
        .prompt(questions)
        .then((data) => {

            // Delete Later
            console.log('====data====');
            console.log(data);
            console.log('====data====');

            console.log('----MD----');
            console.log(generateMarkdown(data));
            console.log('----MD----');
            fs.writeFile('README.md', generateMarkdown(data), (error) => error ? console.log(error) : console.log("Generating README..."));
        }
        );
}

// Function call to initialize app
// init();


