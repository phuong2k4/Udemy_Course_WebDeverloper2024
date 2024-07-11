-- create data base
CREATE DATABASE IF NOT EXISTS customers;
USE customers;

-- create table
CREATE TABLE infomation(id int NOT NULL, fullname char, address char, PRIMARY KEY (id));
CREATE TABLE job(nameJob char, salary int);

-- add new value in column and rows
INSERT INTO infomation values (1,'David Matthew', 'VietNam');
INSERT INTO infomation(id, fullname) values (2, 'Javis Thomsons');
INSERT INTO infomation(id, fullname) values (3, 'Angela Yu');

-- show value from table
select * from infomation;

-- show value if condition 
SELECT id, fullname FROM infomation;
SELECT * FROM infomation WHERE id = 1;
SELECT * FROM  infomation WHERE fullname = "David Matthew";

-- update single value in column
UPDATE infomation
SET address = 'Germany'
WHERE id = 2;

-- use alter table add for create column
ALTER TABLE infomation
ADD language char;

-- delete column condition
DELETE FROM infomation
WHERE id = 3;

-- challenge 1
INSERT INTO infomation
VALUES (3, 'Angela Yu', 'China', 'China Language');

-- create foreign key link to infomation id 
create table job(id int not null,namejob char(100),salary int, information_id int,PRIMARY KEY (id), foreign key (information_id) references infomation(id));

-- course solution
INSERT INTO job
VALUES (1, 'Teacher Udemy', 1295156, 3);

-- join table
SELECT job.namejob, job.salary, infomation.fullname, infomation.address 
FROM job
INNER JOIN infomation ON job.information_id = infomation.id;
SELECT * FROM job;