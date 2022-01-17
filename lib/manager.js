const inquirer = require('inquirer');

class Manager {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer.prompt({
      type: "input",
      name: "name",
      message: "Employee name? (required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    });
  }

  getId() {
    inquirer.prompt({
      type: "text",
      name: "id",
      message: "Employee id?",
    });
  }

  getEmail() {
    inquirer.prompt({
      type: "text",
      name: "email",
      message: "Email?",
    });
  }

  getOfficeNumber() {
    inquirer.prompt({
      type: "test",
      name: "phone",
      message: "Office Number?",
    });
  }
}

module.exports = Manager;