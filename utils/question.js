const { type } = require("os");

const question = [
    {
        name : 'title',
        message: 'What is the title of your project?',
        type: 'input',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please enter a title for your project.';
            }
        }
    },
    {
        name: 'license',
        message: 'What is the license type for this application?',
        type: 'list',
        choices: ['Apache license 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License', 'GNU Alfredo General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense', ''],
    },
    {
        name: 'description',
        message: 'What does this application do?',
        type: 'input',
    },
    {
        name: 'install',
        message: 'How do you install this application?',
        type: 'input',
    },
    {
        name: 'usage',
        message: "How is this application used?",
        type: 'input',
    },
    {
        name: 'contributing',
        message: 'How can others contribute to this application?',
        type: 'input',
    },
    {
        name: 'tests',
        message: 'How can you test this application?',
        type: 'input',
    },
    {
        name: 'username',
        message: 'What is your GitHub username?',
        type: 'input',
    },
    {
        name: 'email',
        message: 'What is your email?',
        type: 'input',
    },
    {
        name: 'fileName',
        message: 'What would you like to name this file?',
        type: 'input',
        // validate: requires user to input text/file name before building README
        validate: (answer) => {
            if (answer === "") {
                return console.log("\n Try again");
            }
            return true;
        }
    },
];

module.exports = question;
