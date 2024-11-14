# SQL
- SQL is a standard database `language` used to access and manipulate data in databases. 
- SQL stands for Structured Query Language. It was developed by IBM Computer Scientists in the 1970s. By executing queries SQL can create, update, delete, and retrieve data `in databases` like MySQL, Oracle, PostgreSQL, etc. Overall, SQL is a query language that communicates with databases.
- SQL (Structured Query Language) is designed for managing and querying data in `relational` databases. A relational database organizes data into tables (also called relations), where each table consists of rows and columns.

## $1 , $2 for values
Security Against SQL Injection:
Using parameters instead of directly embedding values helps prevent SQL injection attacks, as the database treats each parameter as data rather than executable SQL code.

## Boolean = 2 (T & F) , boolean = 3 (NULL , T & F)

# Postgresql
PostgreSQL is an advanced and open-source relational database management system (RDBMS) and is used as a database for many web applications, mobile and analytics applications. It supports both SQL (relational) and JSON (non-relational) querying and It is a stable database supported by more than 20 years of development by the open-source community.

# JOINS --> DEFAULT = INNER 
## INNER JOIN
The INNER JOIN keyword selects records that have matching values in both tables. It returns only the rows where there is a match in both tables.

## LEFT JOIN (or LEFT OUTER JOIN)
Definition: The LEFT JOIN (or LEFT OUTER JOIN) keyword returns all records from the left table (table1), and the matched records from the right table (table2). If there is no match, the result is NULL from the right table.

## RIGHT JOIN (or RIGHT OUTER JOIN)
Definition: The RIGHT JOIN (or RIGHT OUTER JOIN) keyword returns all records from the right table (table2), and the matched records from the left table (table1). If there is no match, the result is NULL from the left table.

## FULL OUTER JOIN
Definition: The FULL OUTER JOIN keyword returns all records when there is a match in either the left (table1) or right (table2) table. It returns NULL for non-matching rows from both tables.

<!-- # ElephantSQL - PostGresql AAS  -->
<!-- // psql -h trumpet.db.elephantsql.com -p 5432 -U wzsxsnxg  -->

# supabase 
https://supabase.com/dashboard/project/bjzudewjefvctbanpros/sql/14fa0993-4087-4f56-b9fb-b8f5473d0331

password =  SCA8K.6HghyNT#Q
- postgres.bjzudewjefvctbanpros = username 
- aws-0-ap-south-1.pooler.supabase.com = host
- 6543 = port

postgresql://postgres.bjzudewjefvctbanpros:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
postgresql://postgres.bjzudewjefvctbanpros:SCA8K.6HghyNT%23Q@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

## acesses supabase from terminal ?????

- psql -h <host> -U <username> -d <database_name> -p 5432
psql -h aws-0-ap-south-1.pooler.supabase.com -U postgres.bjzudewjefvctbanpros -d postgres -p 6543

- remote procedure call

## render
hostname : dpg-csqr00ij1k6c73c1eqb0-a
port : 5432
u : akash_7nnv_user
pas : X44wA0ItFBU3QBjdPwn3ZCY41LnDcT7J

PGPASSWORD=X44wA0ItFBU3QBjdPwn3ZCY41LnDcT7J psql -h dpg-csqr00ij1k6c73c1eqb0-a.oregon-postgres.render.com -U akash_7nnv_user akash_7nnv

postgresql://akash_7nnv_user:X44wA0ItFBU3QBjdPwn3ZCY41LnDcT7J@dpg-csqr00ij1k6c73c1eqb0-a/akash_7nnv

# tembo
const connectionString = "postgresql://postgres:H5ESBDADq1BipDLB@formerly-warm-rabbitfish.data-1.use1.tembo.io:5432/postgres"

