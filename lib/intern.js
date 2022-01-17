class Intern {
    constructor(name, id, email, school) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Intern";
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

    getSchool() {
        return this.school;
      }
  }
  
  module.exports = Intern ;
  