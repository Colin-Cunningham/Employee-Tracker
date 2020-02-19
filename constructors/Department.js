const Employee = require("./Employee")


class Department extends Employee {
    constructor (id, name){
        super(firstName, lastName, roleID, managerID);
        this.id = id;
        this.name = name;
    }
}

module.exports = Department