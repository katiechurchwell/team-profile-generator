// Dependencies
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");

// Question Arrays
const addAnother = [
  {
    type: "confirm",
    name: "addAnother",
    message: "Would you like to add another team member?",
  },
];
const roleQuestion = [
  {
    type: "list",
    name: "role",
    message: "Employee role (required):",
    choices: ["Engineer", "Intern"],
  },
];
const questions = [
  {
    type: "input",
    name: "name",
    message: "Name (required):",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
];

// Manager
const addManager = () => {
  var phone = {
    type: "input",
    name: "phone",
    message: "Office phone number?",
  };
  managerQuestions = questions;
  managerQuestions.push(phone);

  console.log(
    "Welcome to the Team Profile Generator! \nWho is the Team Manager?"
  );
  inquirer
    .prompt(questions)
    .then((managerInfo) => {
      this.manager = new Manager(
        managerInfo.name,
        managerInfo.id,
        managerInfo.email,
        managerInfo.phone
      );
    })
    .then(checkAddAnother);
};

const checkAddAnother = () => {
  inquirer.prompt(addAnother).then((answer) => {
    if (answer) {
      addEmployee();
    }
  });
  // else write HTML
};

// Employee
const addEmployee = () => {
  inquirer.prompt(questions).then((employeeInfo) => {
    if (employeeInfo.role === "Engineer") {
      inquirer.prompt({
        type: "input",
        name: "github",
        message: "GitHub username?",
      }),
        (this.engineer = new Engineer(
          employeeInfo.name,
          employeeInfo.id,
          employeeInfo.email,
          employeeInfo.github
        ));
      console.log(employeeInfo.github);
    } // else implied intern
    else {
      inquirer.prompt({
        type: "input",
        name: "school",
        message: "School?",
      }),
        (this.intern = new Intern(
          employeeInfo.name,
          employeeInfo.id,
          employeeInfo.email
        ));
    }

    if (employeeInfo.addAnother) {
      return addEmployee();
    } /* else write to HTML*/
  });
};

addManager();
/* then write html */
