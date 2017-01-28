### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE clients
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    date timestamp Not Null,
    devoured boolean NOT NULL,
	PRIMARY KEY (id)
);

