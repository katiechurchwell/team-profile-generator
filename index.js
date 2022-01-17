const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");

const addManager = () => {
  console.log(
    "Welcome to the Team Profile Generator! \nPlease enter the team manager."
  );
  addEmployee();
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Employee name? (required)",
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
        type: "confirm" /* does this count as a menu?*/,
        name: "addAnother",
        message: "Would you like to add another team member?",
      },
    ])
    .then((employeeInfo) => {
      new Employee(
        employeeInfo.name,
        employeeInfo.id,
        employeeInfo.email,
        employeeInfo.phone
      );
      if (employeeInfo.addAnother) {
        return addEmployee();
      } /* else write to HTML*/
    });
};

addManager();
/* then write html */
