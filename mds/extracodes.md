# create TABLE
// import { getClient } from "./utilis";

// async function createTable() {
// console.log(" Create Table fn called ")
// const client = await getClient() ;
// console.log("Back to Create Table fn")


// // let { data: users, error } = await client
// //   .from('users')
// //   .select('email')


// const createUserTableQuery =
// `
// CREATE TABLE users2 (
//     id SERIAL PRIMARY KEY ,
//     email VARCHAR(255) UNIQUE NOT NULL ,
//     password VARCHAR(255) NOT NULL
// )`

// const data = await client.query(createUserTableQuery);

//     // // Use Supabase's SQL execution API to run the query
//     // const { data, error } = await client.rpc('sql',{
//     //     query: createUserTableQuery 
//     // })

//     console.log("data " , data)
//     // console.log(error)
// }
// createTable();

# utilis 
// import { createClient } from '@supabase/supabase-js'

// // const supabaseUrl = 'postgresql://postgres.bjzudewjefvctbanpros:SCA8K.6HghyNT%23Q@aws-0-ap-south-1.pooler.supabase.com:6543/postgres'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqenVkZXdqZWZ2Y3RiYW5wcm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MTMzMTQsImV4cCI6MjA0NzA4OTMxNH0.n0pvnwvanr_bvUW9bJY2u-lp20eU2xghVKNgCGr_WMs'

// const supabaseUrl = 'https://bjzudewjefvctbanpros.supabase.co'

// export async function getClient() {
//     console.log("getClient fn called")
//     const supabase = await createClient(supabaseUrl, supabaseKey)
//     console.log("Client created")
//     return supabase 
// }


// import { Client } from 'pg' ;


// export async function getClient() {
//    console.log("getClient fn called")
//    const client = new Client ('postgresql://postgres:H5ESBDADq1BipDLB@formerly-warm-rabbitfish.data-1.use1.tembo.io:5432/postgres') 
//    await client.connect();
//    return client
// } 

// getClient();