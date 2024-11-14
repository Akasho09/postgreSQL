import { client } from "./utilis";

async function createEntries () {

    const insetUserQuery = ` INSERT INTO users (email  , password ) VALUES ($1 , $2) RETURNING id`;
    const userValues = ["aakshbwd@gmail.com" , "Aakash@0123456"] ;

    let response = await client.query(insetUserQuery, userValues);

    const todoQuery = `INSERT INTO todos (title  , description , user_id ) VALUES ($1 , $2 , $3 ) RETURNING id`;
    const todoValues = ["Go To GYM " , "TOday at 8" , response.rows[0].id] ;

    await client.query(todoQuery , todoValues) ;
    console.log("Added data into Tables ");
}

// finally {
//     await client.end();
//   }

createEntries() ;