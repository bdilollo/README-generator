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
      type: 'checkbox',
      name: 'table',
      message: 'What to include in table of contents?',
      choices : [
        'installation',
        'usage',
        'contribute',
        'tests',
        'questions'
      ]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What sort of license would you like?',
      choices : [
        "MIT",
        "GNU GPL v3.0",
        "Apache 2.0"
      ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Test instructions:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
      },
  ])
  .then((answers) => {
    const newReadme = generateMarkdown(answers);
    fs.writeFile('generated-README.md', newReadme, (err) =>
    err ? console.log(err) : console.log('Congrats! You created a README for your project!'));
  });