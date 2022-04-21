// Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// array of questions for user input
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
    type:"input",
    message: "Enter image alt description",
    name: "alt"
},
{
    type: "input",
    message: "Enter image url",
    name: "image"
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
    choices: ["MIT","APACHE","GPL","none"],
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

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName+'.md',data, (err)=>{
        if (err) throw err;
        console.log('file saved')
    });
}

// function to initialize app
function init() {
    inquire.prompt(questions).then((data =>{
        console.log(data)
        let newRead='NEWREADME';
        writeToFile(newRead,generateMarkdown(data));
      }))
}

// Function call to initialize app
init();