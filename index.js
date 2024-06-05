const inquirer = require('inquirer');
const question = require('./questions');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function writeToFile (fileName, data) {
   fs.appendFile('${fileName}.md', generateMarkdown(data), err => {
    err ? console.log(err) : console.log('${fileName}.md was created!');
   });
}

function init() {
    inquirer
    .prompt(question)
    .then((response) => {
        writeToFile(reponse.filename, resposnse);
    });
        .catch(err => console.log(err));
}

init();