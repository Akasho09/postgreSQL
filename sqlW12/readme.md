## using pg library 


## docker run --name akashPG -e POSTGRES_PASSWORD=aakash1234 -d postgres

Command Breakdown
docker run:

Starts a new Docker container based on the specified image.
--name akashPG:

Assigns the name akashPG to the container. This makes it easier to reference the container later (e.g., with docker stop akashPG or docker exec akashPG).
-e POSTGRES_PASSWORD=aakash1234:

Sets an environment variable POSTGRES_PASSWORD inside the container. This is required by PostgreSQL to initialize the superuser account (postgres). The password for the default postgres user will be set to aakash1234.
-d:

Runs the container in detached mode (in the background). Without -d, the container runs in the foreground, and its logs are shown in the terminal.
postgres:

Specifies the image to use for the container. The postgres image is the official PostgreSQL Docker image available on Docker Hub.