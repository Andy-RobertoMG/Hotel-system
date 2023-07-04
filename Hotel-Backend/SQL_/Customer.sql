Create Table customer(
  Guest_id serial primary key,
  c_name varchar(50) not null,
  phone int not null,
  email varchar(30),
 address varchar(150),
	city varchar(100),
	pwd varchar(100)
);