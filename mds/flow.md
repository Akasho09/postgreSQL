- create tables for data 
eg CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    email VARCHAR(255) UNIQUE NOT NULL ,
    password VARCHAR(255) NOT NULL
)
 
CREATE TABLE todos (
    id SERIAL PRIMARY KEY ,
    title `TEXT` ,
    description TEXT ,
    user_id INTEGER REFRENCES users(id),
    done BOOLEAN DEFAULT FALSE
) 