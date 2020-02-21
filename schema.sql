DROP DATABASE IF EXISTS companyData_db;
CREATE database companyData_db;

USE companyData_db;

CREATE TABLE Employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30), 
  role_id INT,
  manager_id INT,
  PRIMARY KEY(id)
);

CREATE TABLE Role (
    id INT NOT NULL,
    title VARCHAR(80),
    salary DECIMAL(10,4) NULL,
    department_id INT,
     PRIMARY KEY(id)
);

CREATE TABLE department (
     id INT AUTO_INCREMENT NOT NULL,
     name VARCHAR(30)
);

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES("Michael", "Scott", 1, NULL),("Jim", "Halpert", 2, 1),("Angela", "Martin",7, 1),
("Kevin","Malone", 7, 1),("Oscar","Nunez",6, 1),("Dwight", "Schrute", 3, 2), ("Stanley","Hudson", 5, 1),
("Phyllis" "Smith", 6, 1),("Ryan", "Howard", 10, NULL);


-- Roles

INSERT INTO Role (id, title, salary, department_id)
VALUES(1, "Manager", 100000, 1),(2, "Co-Manager", 80000, 1),(3, "Assitant to the Regional Manager", 70000, 3),
(4, "Human Resources", 60000, 2),(5, "Salesmen", 40000, 3),(6, "SalesLead", 40000, 3),(6, "Head Accountant", 60000, 4),
(7, "Accountant", 50000, 4),(8, "Customer-Service", 60001, 2),(9, "Forklift Operator", 70000, 5),(10, "Corporate", 100000, 1);

INSERT INTO department (id, name)
VALUES(1, "Managment"),(2, "HR"),(3, "Sales"),(4, "Accounting"),(5, "Warehouse")

CREATE VIEW Employee_publictest AS
SELECT first_name, last_name 
FROM Employee

CREATE VIEW Employee_data AS
SELECT * FROM Employee INNER JOIN Role 
ON Employee.role_id = Role.id_r
;



-- All Query
SELECT first_name, last_name, title, salary FROM Employee INNER JOIN Role 
ON Employee.role_id = Role.id;

--

CREATE VIEW Employee_data AS
SELECT * FROM Employee INNER JOIN Role 
ON Employee.role_id = Role.id_r
;

CREATE VIEW EmployeeName AS
SELECT id, first_name, last_name FROM Employee 
;
SELECT * FROM EmployeeName;

--
CREATE VIEW Employee_public AS
SELECT first_name,last_name, title, salary, department FROM Employee_data INNER JOIN department 
ON Employee_data.department_id = department.id_d;

--Manager View
CREATE VIEW view_manager AS
SELECT Employee_data.id, Employee_data.first_name,Employee_data.last_name, 
concat(EmployeeName.first_name, ' ', EmployeeName.last_name) AS 'Manager'
FROM Employee_data INNER JOIN EmployeeName ON Employee_data.manager_id = EmployeeName.id;

