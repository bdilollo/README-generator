// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description for your project.',
    },
    {
      type: 'input',
      name: 'table',
      message: 'What to include in table of contents?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage instructions:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What sort of license would you like?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How to test your application?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Any questions to include?',
      },
  ])
  .then((answers) => {
    const newReadme = generateMarkdown(answers);
    fs.writeFile('generated-README.md', newReadme, (err) =>
    err ? console.log(err) : console.log('Congrats! You created a README for your project!'));
  });
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
