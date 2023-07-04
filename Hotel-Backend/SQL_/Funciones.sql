Create Table Users(
 user_id serial primary key not null,
 user_name varchar(50) not null,
 phone varchar(13),
 email varchar(30),
 address varchar(150)
);