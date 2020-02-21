const Employee = require("./Employee")
const mysql = require("mysql");
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


module.exports.displayAll = response => {
    connection.query(
      "SELECT * FROM Employee_public",
  
      function(err, res) {
        if (err) throw err;
        console.table(`\n All Employees`,res);
      }
    );
  }


 module.exports.queryMan = response => {
    connection.query(
      "SELECT * FROM view_manager WHERE ?",
     {Manager: response.manager},
  
     function(err, res) {
        if (err) throw err;
              console.table(` \n Manager: ${response.manager}`,res)
      }
    );
  }

  module.exports.queryDep = response => {
    connection.query(
      "SELECT * FROM Employee_public WHERE ? ",
     { department: response.department},
      
      function(err, res) {
        if (err) throw err;
              console.table(`\n ${response.department}`,res)
      }
    );
  }


  module.exports.queryEmployee = response => {
    connection.query(
      "INSERT INTO Employee_public ",
     { department: response.department},
      
      function(err, res) {
        if (err) throw err;
              console.table(res)
      }
    );
  }