
function init() {
    //import node modules 
    const inquirer = require(`inquirer`);
    const fs = require(`fs`)
    const generate = require('./utils/generateMarkdown.js');
    const path = require('path');

    //inquirer to generate questions
    inquirer
        .prompt([
            {
                type: `input`,
                messages: "What's the project title?",
                name: `title`,
                //validate property to check that the user provided a value 
                validate: (value) => { if (value) { return true } else { return 'need an input' } }
            },
            {
                type: "input",
                message: "What is the Description of your project? (motivation, why is it built? what problems does it solve? what did you learn? what problem does it help?",
                name: "description",
                validate: (value) => { if (value) { return true } else { return 'need an input' } }
            },
            {
                type: "input",
                message: "How do you install your application?",
                name: "installation",
                validate: (value) => { if (value) { return true } else { return 'need an input' } }
            },
            {
                type: "input",
                message: "How to use your application?",
                name: "instructions",
                validate: (value) => { if (value) { return true } else { return 'need an input' } }
            },
            {
                type: "input",
                message: "Did you collaborate with others or used any third-party assets ( include the video tutorial and github link if yes)",
                name: "credits",
            },
            {
                type: "input",
                message: "How do you Use your application?",
                name: "usage",
            },
            {
                //list of licenses 
                type: "list",
                message: "What License did you use for this repository?",
                choices: ['The MIT License', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
                name: "license",
                validate: (value) => { if (value) { return true } else { return 'need an input' } }
            },
            {
                type: "input",
                message: "How can people Contribute to your project?",
                name: "contributing",
            },
            {
                type: "input",
                message: "How do people update the tests for your project?",
                name: "tests"
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "github",
                validate: (value) => { if (value) { return true } else { return 'need an input' } }

            },
            {
                type: "input",
                message: "What is your email address where users and contributors can send questions?",
                name: "email",
                validate: (value) => { if (value) { return true } else { return 'need an input' } }
            },

        ])

        // TODO: Create a function to write README file
        .then((response) => {
            return fs.writeFileSync(path.join(process.cwd(), "README.md"), generate(response));
        });

}


// Function call to initialize app
init();
