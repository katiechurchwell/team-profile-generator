const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, phone) {
    super(name,id,email);

    this.role = "Manager";
    this.number = phone;
  }

  getOfficeNumber() {
    return this.number;
  }
}

module.exports = Manager;
