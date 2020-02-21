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
      ]).then(function(response){
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
          ]).then(function(response) {
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
                type: "Choice",
                message: "Role ID",
                name:"role_ID"
              },

            ])
          }
    