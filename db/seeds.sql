create table users (
    user_id serial primary key,
    name varchar, 
    email varchar, 
    password varchar
);

create table posts (
    posts_id serial primary key, 
    user_id int references users,
    title varchar,
    content text
);