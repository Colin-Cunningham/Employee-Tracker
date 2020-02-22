
const mysql = require("mysql");
const script = require("../script")
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

const currentTeam = []

module.exports = currentTeam


module.exports.displayAll = response => {
    connection.query(
      "SELECT * FROM Employee_public",
  
      function(err, res) {
        if (err) throw err;
        console.table(`\n All Employees`,res);
      }
    );
  }


 module.exports.team = () => {
      connection.query(
        "SELECT concat(EmployeeName.first_name, ' ', EmployeeName.last_name) AS 'name' FROM EmployeeName",
  
        function(err, res) {
          if (err) throw err;
      
          currentTeam.push(res);
          
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
      "INSERT INTO Employee SET ? ",
     { 
      first_name: response.first,
      last_name: response.last,
      role_id: response.role,
      manager_id: response.manager
     },
      
      function(err, res) {
        if (err) throw err;
              console.log("Employee added!")
      }
    );
  }

  module.exports.queryRemove = response => {
    connection.query(
      "DELETE FROM Employee WHERE ?",
     { 
      id: response.ID
     },
      
      function(err, res) {
        if (err) throw err;
              console.log("Employee Removed!")
      }
    );
  }


  module.exports.queryDepartment = response => {
    connection.query(
      "INSERT INTO Department SET ? ",
     { 
     department: response.Dep
     },
      
      function(err, res) {
        if (err) throw err;
              console.log("Department added!")
      }
    );
  }

  module.exports.queryNewRole = response => {
    connection.query(
      "INSERT INTO Role SET ? ",
     { 
     id_r: response.ID,
     title: response.title,
     salary: response.salary,
     department_id: response.department

     },
      
      function(err, res) {
        if (err) throw err;
              console.log("Role added!")
      }
    );
  }

  module.exports.updateRole = response => {
    connection.query(
      "UPDATE Employee_public SET ? WHERE ?",
     [{ title: response.title},{first_name: response.name}],
      
      function(err, res) {
        if (err) throw err;
              console.log("Role updated!")
      }
    );
  }