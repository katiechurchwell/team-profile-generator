const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");

const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Team Manager's name (required)",
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
        message: "Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "Email?",
      },
      {
        type: "input",
        name: "phone",
        message: "Office Number?",
      },
    ])
    .then((answers) => {
      new Manager(
        answers.role,
        answers.name,
        answers.id,
        answers.email,
        answers.phone
      );
    });
};

addManager();
/* then promptUser */

/* team manager */

/* then engineer or intern option menu */

/* then write to page */
