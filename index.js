const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Hello! Please enter your project name. (Required)', 
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log("Please enter the title to your project!");
                return false;
            }
            }
        },

    {
        type: 'input',
        name: 'description',
        message: 'Now, can you please a provide a description of your project? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter the instructions on how you would install your project.");
                return false;
            }
        }
    },
    { 
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true; 
            } else {
                console.log("Please enter the instructions on how you use the project.");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List whether you want other users to contribute on this project. (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Please enter the instructions on how you would want contributions on this project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project? (Required)',
        validate: testInput => {
            if (testInput){
                return true;
            } else {
                console.log("Please enter the instructions on how you would test your project.");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license fits with your project? Please choose one.',
        choices: ['None', 'Apache 2.0','APM','Eclipse','GitHub','MIT','Mozilla-Public','NPM'],
        validate: licenseSelection => {
            if (licenseSelection){
                return true;
            } else {
                console.log("Please choose a license for your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'For the questions section, contact information is required. Please enter your GitHub username.',
        validate: gitHubInput => {
            if (gitHubInput){
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'For the questions section, contact information is required. Please enter your email address.',
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log("Please enter your email address.");
                return false;
            }
        }
    }
])
}

const writeToFile = (data) => {
    fs.writeFile('.newREADME.md', data, err => {
        if (err) 
            throw err;
           console.log("README file has been created!");
});
}

questions()
.then(data => {console.log('Done!'); return data})
    .then(data => {return generateMarkdown(data)})
        .then(writeReadme => {
            return writeToFile(writeReadme);
        })
        .catch(error => {console.log(error + "An error has popped up!")
    })