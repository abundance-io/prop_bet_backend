# Installs Node.js image
FROM node:latest

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
WORKDIR /app

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "yarn.lock", "tsconfig.json", ".env", "./"]

# Copies everything in the src directory to WORKDIR/src
COPY ./src ./src
COPY ./prisma ./

# Installs all packages
RUN npm install yarn
RUN yarn 

# Runs the dev npm script to build & start the server
CMD yarn dev
