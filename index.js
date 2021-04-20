const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")
// array of questions for user
const questions = [
    {
        message: "What is your GitHub username? (Required)",
        name: "Username",
        type: "input",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter a Githuhb Username!');
                return false;
            }
        }
    },
    {
        message: "What is your email address? (Required)",
        name: "email",
        type: "input",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address!');
                return false;
            }
        }
    },
    {
        message: "What is the title of your project? (Required)",
        name: "title",
        type: "input",
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log('Please enter a project name!');
                return false;
            }
        }
    },
    {
        message: "What are the steps necessary to run your project?",
        name: "install",
        type: "input",
    },
    {
        message: "What languages did you use for this project? (Check all that apply)",
        name: "language",
        type: "checkbox",
        choices:
            ['Javascript',
                'HTML',
                'CSS',
                'ES6',
                'jQuery',
                'Bootstrap',
                'Node'
            ]
    },

    {
        message: "What kind of license would you like your project to have?",
        name: "license",
        type: "list",
        choices:
            [
                "MIT",
                "GPL 3.0",
                "BSD 3",
                "None"
            ],
    },
    {
        message: "Any questions you would like to ask?",
        name: "questions",
        type: "input",
    },
]
inquirer.prompt(questions)
    // function to write ReadMe file
    .then(function (response) {
        fs.writeFile("ReadMe.md", generateMarkdown(response), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Your ReadMe Was successfuly created!");
        });
    });
