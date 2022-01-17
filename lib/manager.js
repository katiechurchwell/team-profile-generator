class Employee {
    constructor(name, id, email, phone) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Manager";
      this.number = phone;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
    
    getRole() {
      return this.role;
    }

    getOfficeNumber() {
        return this.number;
      }
  }
  
  module.exports = Manager;
  