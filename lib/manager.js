const Employee = require("./employee");

class Manager extends Employee {
  constructor(phone) {
    super();

    this.role = "Manager";
    this.number = phone;
  }

  getOfficeNumber() {
    console.log(this.number);
  }
}

module.exports = Manager;
