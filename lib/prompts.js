const inquirer = require("inquirer");
const query = require("./query");


module.exports.displayMan = function () {
    inquirer
      .prompt([
        {
          type: "rawlist",
          message: "Choose the Manager",
          choices: [
            "Michael Scott",
            "Jim Halpert",
            "Ryan Howard",
          ],
          name: "manager"
        }
      ]).then(response =>{
       query.queryMan(response)
      })

      };

      module.exports.displayDep =  function () {
        inquirer
          .prompt([
            {
              type: "rawlist",
              message: "What would you like to do?",
              choices: [
                "Management",
                "HR",
                "Sales",
                "Accounting",
                "Warehouse",
              ],
              name: "department"
            }
          ]).then(response => {
              query.queryDep(response)
          })
        }


          module.exports.addEmployee = function (){
            inquirer.prompt([{
              type: "input",
              message: "Enter First Name",
              name: "first"
              },
              {
                type: "input",
                message: "Enter Last Name",
                name:"last"
              },
              {
                type: "input",
                message: "Enter role ID Number",
                name:"role"
              },
              {
                type: "input",
                message:"Enter Manager ID",
                name: "manager"
              },

            ]).then(response =>{
                query.queryEmployee(response)
            })
          }

          module.exports.removeEmployee =  function () {
            inquirer
              .prompt([
                {
                  type: "number",
                  message: "Enter ID of Employee youd like to terminate",
                  name: "ID"
                }
              ]).then(response => {
                  query.queryRemove(response)
              })
            }
    
            module.exports.updateEmployee =  function () {

              inquirer
                .prompt([
                  {
                    type: "rawlist",
                    message: "Enter ID of Employee youd like to update",
                    choices:
                    ["Michael", 
                    "Jim", 
                    "Dwight", 
                    "Angela",
                     "Kevin"],
                    name: "name"
                  },
                  {
                    type: "input",
                    message: "Enter new title",
                    name: "title"
                  }
                ]).then(response => {
                    query.updateRole(response)
                })
              }
    


              module.exports.addDepartment = function (){
                inquirer.prompt([{
                  type: "input",
                  message: "Add Deprtment",
                  name: "Dep"
                  },
    
                ]).then(response =>{
                    query.queryDepartment(response)
                })
              }
              
              module.exports.addRole = function (){
                inquirer.prompt([{
                  type: "input",
                  message: "Enter Title",
                  name: "title"
                  },
                  {
                    type: "input",
                    message: "Enter ID",
                    name: "ID",
                    },
                    {
                      type: "number",
                      message: "Enter Salary",
                      name: "salary",
                      },
                      {
                        type: "number",
                        message: "Enter Department ID",
                        name: "department",
                        },
    
                ]).then(response =>{
                    query.queryNewRole(response)
                })
              }