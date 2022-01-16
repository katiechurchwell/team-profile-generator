class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer.prompt({
      type: "text",
      name: "name",
      message: "Employee name?",
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
}
