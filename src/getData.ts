import { client } from "./utilis";

async function getUsers () {

    const getUsersQuery = `
    SELECT * FROM users`
    const usersData = await client.query(getUsersQuery) ;
    console.log("----All Users : ----")
    for(let user of usersData.rows) {
        console.log(`ID : ${user.id} EMAIL: ${user.email} \n`)
    }
}

async function getUserByEmail( email : string){

    const query = `SELECT * FROM users WHERE email = $1`;
    const response = await client.query(query,[email]) ;
    console.log(response.rows)
}

async function getTodosOfUsers(userID : number) {
   const query = `
   SELECT * FROM todos WHERE user_id = $1`
   const response =  await client.query(query , [userID]) ;
   console.log("Todos Of User with ID = " , userID) 
   for(let i in response.rows ){
    console.log(response.rows[i])
   }
}

getUsers() ;
getUserByEmail("aakshbwd@gmail.com");
getTodosOfUsers(1);