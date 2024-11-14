import { client } from "../utilis";

async function get (userID : number) {
   const q = `SELECT users.id as userID ,users.email , todos.id as TodoID , todos.description , todos.title , todos.done FROM 
   users LEFT JOIN todos ON users.id = todos.user_id 
   WHERE users.id=$1`
   const data = await client.query(q,[userID]);
   console.log(data.rows)
}

get(1) ;