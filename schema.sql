DROP DATABASE IF EXISTS company_data;
CREATE database company_data;

USE company_data;

CREATE TABLE Employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30), 
  role_id INT,
  manager_id INT 
);

CREATE TABLE Role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,4) NULL,
    department_id INT,
)

CREATE TABLE department (
     id INT PRIMARY KEY,
     name VARCHAR(30),
)



SELECT * FROM Employee;