const mysql = require("mysql");
const inquirer = require("inquirer");
const art = require("ascii-art");
const table = require("console.table");

//Module Imports//
const employee =  require(".Employee")
const department = require(".Department")
const role = require(".Role")


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Rastler1234!",
  database: "topSongs_db"
});

