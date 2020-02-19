const Employee = require("./Employee")


class Role extends Employee {
    constructor (title, salary, departrment){
        super(firstName, lastName, roleID, managerID);
        this.title = title;
        this.salary = salary;
        this.departrment = departrment
    }
}

module.exports = Role