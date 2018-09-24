use sys; /* database called sys*/
CREATE table Teacher (
	ID int primary key auto_increment,
    firstName varchar(250),
   lastName varchar(250),
	classID int,
    email varchar(50)
);
/* creating a table inside sys database with its attrubutes*/
 
 