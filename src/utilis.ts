const { Client } = require('pg');

const connectionString = "postgresql://postgres:H5ESBDADq1BipDLB@formerly-warm-rabbitfish.data-1.use1.tembo.io:5432/postgres"

const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }  // Disable SSL certificate verification if necessary
});

async function getClient() {
    try {
        await client.connect();
        console.log("Connected to Tembo PostgreSQL successfully!");
        } catch (error) {
        console.error("Connection error:", error);
    } 
}
getClient();

export {client}