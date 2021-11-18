// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const promptUser = () => [
  return inquirer.prompt([
    {
      type: 'input',
      name: 'description',
      message: 'Add a descsription of your work? (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter your installation methods. (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter your installation method!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter your usages for site. (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter your usages for site!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter your license. (Required)',
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('Please enter your license!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter your contributions. (Required)',
      validate: contributingInput => {
        if (contributingInput) {
          return true;
        } else {
        console.log('Please enter your contributions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter your tests for the site, with examples. (Required)',
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
        console.log('Please enter your tests, and examples!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Enter your methods of communication to reach you. (Required)',
      validate: questionsInput => {
        if (questionsInput) {
          return true;
        } else {
        console.log('Please enter your email and github!');
          return false;
        }
      }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
function init() {};

// Function call to initialize app
init();
