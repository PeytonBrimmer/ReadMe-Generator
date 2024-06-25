const inquirer = require('inquirer');
const question = require('./utils/question');
const fs = require('fs');
const path = require('path');   
const generateMarkdown = require('./utils/generateMarkdown');

function writeToFile (fileName, data) {
   fs.writeFile(path.join(fileName), data, err => {
    err ? console.log(err) : console.log('${fileName}.md was created!');
   });
}

function init() {
    inquirer
    .prompt(question)
    .then((response) => {
        console.log(response);
        writeToFile('generated-readme.md', generateMarkdown( {...response}));
    })
        .catch(err => console.log(err));
}

init();