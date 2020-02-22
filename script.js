const mysql = require("mysql");
const inquirer = require("inquirer");
// const art = require("ascii-art");
const table = require("console.table");
const prompts = require("./lib/prompts")
const query = require("./lib/query")

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Rastler1234!",
  database: "companyData_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  getAnswer();
});

// Main Function //
function getAnswer() {
  query.team();
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all Employees",
          "View all Employees by Department",
          "View all Employees by Manager",
          "Add Employee",
          "Add Department!",
          "Add Role!",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager"
          
        ],
        name: "action"
      }
    ])
    .then(function(res) {
      switch (res.action) {
        case "View all Employees":
          query.displayAll();
          
          break;
      }
      switch (res.action) {
        case "View all Employees by Department":
          prompts.displayDep();
          
          break;
      }
      switch (res.action) {
        case "View all Employees by Manager":
         prompts.displayMan();
      
        break;
      }

      switch (res.action) {
        case "Add Employee":
          prompts.addEmployee();
        
          break;
      }
      switch (res.action) {
        case "Remove Employee":
          prompts.removeEmployee();
          
          getAnswer()
          break;
      }
      switch (res.action) {
        case "Update Employee Role":
          prompts.updateEmployee()
          break;
      }
      switch (res.action) {
        case "Add Department! ":
          prompts.addDepartment()
          break;
      }
      switch (res.action) {
        case "Add Role!":
          prompts.addRole()
          break;
      }
    });
}


