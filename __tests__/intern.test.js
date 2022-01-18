const Intern = require("../lib/intern.js");

test("Intern name working?", () => {
  const intern = new Intern("name", "id", "email", "school");
  expect(intern.name).toEqual("name");
});

test("Intern id working?", () => {
    const intern = new Intern("name", "id", "email", "school");
  expect(intern.id).toEqual("id");
});

test("Intern email working?", () => {
    const intern = new Intern("name", "id", "email", "school");
  expect(intern.email).toEqual("email");
});

test("getName() working?", () => {
    const intern = new Intern("name", "id", "email", "school");
    expect(intern.getName()).toEqual("name");
  });

  test("getId() working?", () => {
    const intern = new Intern("name", "id", "email", "school");
    expect(intern.getId()).toEqual("id");
  });

  test("getEmail() working?", () => {
    const intern = new Intern("name", "id", "email", "school");
    expect(intern.getEmail()).toEqual("email");
  });

  test("getRole() working?", () => {
    const intern = new Intern("name", "id", "email", "school");
    expect(intern.getRole()).toEqual("Intern");
  });

  test("getSchool() working?", () => {
    const intern = new Intern("name", "id", "email", "school");
    expect(intern.getSchool()).toEqual("school");
  });