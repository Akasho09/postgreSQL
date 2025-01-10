import { Client } from "pg";

const akash = new Client ({
    connectionString : "postgresql://postgres:aakash%4001234@localhost:5432/akash1"
})

async function connectWaliFn() {
akash.connect(()=>{
    console.log(" yo connected bitvh ")
})  
}
connectWaliFn();


// async function createUsersTable(){
//     await akash.connect();
//     const result = await akash.query(`
//         CREATE TABLE users4 (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR (50) UNIQUE NOT NULL, email VARCHAR (255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
//         )`
//     )
// console.log(result)
// }

// createUsersTable();



// async function createUsersTable() {
//     const result = await akash.query(`
//       CREATE TABLE addresses2 (
//         id SERIAL PRIMARY KEY, 
//         user_id INTEGER NOT NULL, 
//         city VARCHAR(100) NOT NULL, 
//         country VARCHAR(100) NOT NULL, 
//         street VARCHAR(255) NOT NULL, 
//         pincode VARCHAR(20),
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, 
//         FOREIGN KEY (user_id) REFERENCES users4(id) ON DELETE CASCADE
//       )
//     `);
//     console.log(result);
//   }
  
//   createUsersTable();


export default akash
