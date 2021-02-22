DROP DATABASE if exists wdkvljkwji8f7wh3;
CREATE DATABASE wdkvljkwji8f7wh3;
USE wdkvljkwji8f7wh3;

CREATE TABLE burgers (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(40) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY(id)
);