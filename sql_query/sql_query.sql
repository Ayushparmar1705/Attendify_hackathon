create database Attendance;
use Attendance;


create table admin_signup(id int primary key auto_increment,
name varchar(100),
email varchar(100),
password varchar(100));
select * from admin_signup;


drop table admin_signup;


create table Add_class(class_id int primary key auto_increment,
admin_id int,
class_name varchar(100),
foreign key(class_id) references admin_signup(id));
drop table Add_class;
insert into Add_class values(1,1,'A');
select * from Add_class;
create table Students(id int primary key auto_increment,
admin_id int,
class_id int,
name varchar(100),
phone varchar(100),
date_of_birth varchar(100),
foreign key(admin_id) references admin_signup(id),
foreign key(class_id) references Add_class(class_id));

create table subjects(admin_id int,
id int primary key auto_increment,
subject_name varchar(100),
foreign key(admin_id) references admin_signup(id));




create table AddTeacher(id int primary key auto_increment,
admin_id int,
name varchar(100),
email varchar(100),
phone varchar(100),
foreign key(id) references admin_signup(id));


create table Teachers_data(tid int,
class_id int,
subject_id int,
foreign key(tid) references AddTeacher(id),
foreign key(class_id) references Add_class(class_id),
foreign key(subject_id) references subjects(id));