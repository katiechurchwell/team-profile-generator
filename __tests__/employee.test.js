const Employee = require("../lib/employee.js");

test("Employee name working?", () => {
  const employee = new Employee("Katie", "id", "email");
  expect(employee.name).toEqual("Katie");
});

test("Employee id working?", () => {
  const employee = new Employee("name", "id", "email");
  expect(employee.id).toEqual("id");
});

test("Employee email working?", () => {
  const employee = new Employee("name", "id", "email");
  expect(employee.email).toEqual("email");
});

test("getName() working?", () => {
  const employee = new Employee("name", "id", "email");
  expect(employee.getName()).toEqual("name");
});

test("getId() working?", () => {
  const employee = new Employee("name", "id", "email");
  expect(employee.getId()).toEqual("id");
});

test("getEmail() working?", () => {
  const employee = new Employee("name", "id", "email");
  expect(employee.getEmail()).toEqual("email");
});

test("getRole() working?", () => {
  const employee = new Employee("name", "id", "email");
  expect(employee.getRole()).toEqual("Employee");
});
