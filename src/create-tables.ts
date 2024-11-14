import { client } from "./utilis";


async function createTables(){

    const createUserTableQuery =
`
CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    email VARCHAR(255) UNIQUE NOT NULL ,
    password VARCHAR(255) NOT NULL
)`
const createTodoTable = `
CREATE TABLE todos (
    id SERIAL PRIMARY KEY ,
    title TEXT NOT NULL,
    description TEXT ,
    user_id INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
) `
try {
    await client.query(createUserTableQuery);
    console.log("User Table Created Successfully");

    await client.query(createTodoTable);
    console.log("Todo Table Created Successfully");
} catch (e) {
    console.error("Error Creating Tables:", e);
}

}

createTables() ;