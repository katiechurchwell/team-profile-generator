const fs = require("fs");
const path = require("path");

const writeHTML = (teams) => {
  //build cards
  let cardsStr = "";
  teams.forEach((member) => {
    switch (member.role) {
      case "Intern":
        cardsStr += `
        <div class="card">
        <div class="card-header">
        <h2>${member.name}</h2>
        ${member.role}
        </div>
        <ul>
            <li>${member.id}</li>
            <li><a href="mailto:${member.email}">${member.email}</a></li>
            <li>${member.school}</li>
        </ul>
        </div>
        `;
        break;
      case "Manager":
        cardsStr += `
        <div class="card">
        <div class="card-header">
        <h2>${member.name}</h2>
        ${member.role}
        </div>
        <ul>
            <li>${member.id}</li>
            <li><a href="mailto:${member.email}">${member.email}</a></li>
            <li>${member.number}</li>
        </ul>
        </div>
        `;
        break;
      case "Engineer":
        cardsStr += `
        <div class="card">
        <div class="card-header">
        <h2>${member.name}</h2>
        ${member.role}
        </div>
        <ul>
            <li>${member.id}</li>
            <li><a href="mailto:${member.email}">${member.email}</a></li>
            <li><a href="https://www.github.com/${member.github}">${member.github}</a></li>
        </ul>
        </div>
        `;
        break;
      default:
        break;
    }
  });

  //add card to template
  const template = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    </head>
    <body>
    <header>
    <h1>Team Profile</h1>
    </header>
        <div class="container">
            ${cardsStr}
        </div>
    </body>
    </html>
  `;

  //write to html and create html if it does not exist
  fs.writeFile(
    path.join(__dirname, "../output/teams.html"),
    template,
    "utf8",
    () => {
      console.log("Page generated!");
    }
  );
};

module.exports = writeHTML;
