### Schema

CREATE DATABASE sequelburger_db;

USE sequelburgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    date timestamp Not Null,
    devoured boolean NOT NULL,
	PRIMARY KEY (id)
);

