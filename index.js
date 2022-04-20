// TODO: Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');
const { finished } = require('stream');
const generateMarkdown = require('./utils/generateMarkdown.js');
const markdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the project title?",
    name: "title",
},
{
    type: "input",
    message: "Enter project description",
    name: "description"
},
{
    type: "input",
    message:"Please provide installation instructions",
    name: "instructions",
},
{
    type: "input",
    message:"What is the usage of the application",
    name: "usage"
},
{   
    type:"list",
    message:"What license would you like to attach",
    name: "license",
    choices: ["MIT","APACHE","GPL"],
},
{
    type: "input",
    message:"Please list contributions",
    name: "contributions",
},
{
    type:"",
    message:"Test",
    name: "test"
},
{
    type: "input",
    message:"Please enter an email",
    name: "email"
},
{
    type:"input",
    message:"Enter GitHub username",
    name: "github",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName+'.md',data, (err)=>{
        if (err) throw err;
        console.log('file saved')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then((data =>{
        console.log(data)
      }))
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
