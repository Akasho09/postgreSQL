import { client } from "./utilis";

async function DELETE () {
    try {
       await client.query("DROP TABLE IF EXISTS todos");
       await client.query("DROP TABLE IF EXISTS users");
       console.log("-----DELETED TABLES-----")
    } catch(e) {
        console.log("error: " + e)
    }
}

DELETE() ;