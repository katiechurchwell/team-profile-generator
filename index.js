// const Manger = require("./lib/manager");
const inquirer = require("inquirer");

console.log("Welcome to the Team Profile Generator");

const promptUser = () => {
  inquirer.prompt([
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
      message: "Employee id?",
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
  ]);
};

promptUser()

/* team manager */

/* then engineer or intern option menu */

/* then write to page */
