## Psql 
is a command-line tool that allows users to interact with PostgreSQL, a relational database management system (RDBMS).
- connect : psql -U username -d database_name
or psql -h hostname -p port -U username -d database_name

## Settings up locally
### usually brew and psql 
- brew install postgresql@15
- brew services start postgresql@15 // restart
- psql postgresql
\q --> to exit or exit
### using docker and psql
- docker run --name aakash -e POSTGRES_PASSWORD=aakash@01234  -d -p 5432:5432 postgres
- docker exec -it f43fc77918b3 /bin/bash
- psql -h localhost -d postgres -U postgres
or outside also it works 