# wa_ss24_primeflex

## Getting started

***

```
cd existing_repo
git remote add origin https://git.ai.fh-erfurt.de/ma4163sp1/wa/ss24/wa_ss24_primeflex.git
git branch -M main
git push -uf origin main
git checkout release
```

To get started with wa_ss24_primeflex, follow these steps:

1. **Clone the Repository**: Download or clone the latest version of wa_ss24_primeflex from our [GitLab repository](https://git.ai.fh-erfurt.de/ma4163sp1/wa/ss24/wa_ss24_primeflex.git).

2. **Install Docker**: If you haven't already, install Docker by following the instructions provided on the [Docker website](https://docs.docker.com/get-docker/).

3. **Install MongoDB**: Install MongoDB (mongosh) if you don't already have it installed. You can find instructions for installing MongoDB (mongosh) on the [MongoDB website](https://www.mongodb.com/docs/mongodb-shell/install/).

4. **Install npm and Necessary Libraries**: Ensure npm is installed on your system. You may also need to install other necessary libraries. Once installed, navigate to the project directory `git checkout release` and run `docker-compose up`.

5. **Set Up IDE**: Install and configure an IDE, such as [IntelliJ IDEA](https://www.jetbrains.com/idea).

6. **Configure Environment Variables**: Set up environment variables as needed. These variables are typically configured in a `.env` file. See the example `.env` file provided in the project for reference.

7. **Run the Application**: After completing the setup steps, you should be able to run the wa_ss24_primeflex application.

## Project Structure

The project consists of the following components:

- **Backend**: Node.js application serving API endpoints.
- **Frontend**: React.js application for the user interface.
- **Database**: MongoDB database for data storage.

## Installation Instructions

For detailed installation instructions, see the InstallationPage.js component.

## Contributing

Contributions to wa_ss24_primeflex are welcome. Please see the CONTRIBUTING.md file for guidelines.

## License

This project is licensed under the MIT License.

This README provides a structured guide for users to get started with your project, including installation instructions, project structure overview, Docker Compose configuration, and information about contributing and licensing. Let me know if you need further modifications or additions!

## Docker Compose Configuration

```yaml
# wa_ss24_primeflex/docker-compose.yml
version: "3"
services:

  mongodb:
    image: mongo:4.4
    container_name: db_wa_ss24_primeflex
    restart: always
    ports:
      - 10035:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    volumes:
      - data:/data/db
      - ./backend/database/init-mongo.js:/docker-entrypoint-initdb.d/init-mongo.js

  database_web:
    image: mongo-express
    container_name: database_web_wa_ss24_primeflex
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongodb:27017/
    depends_on:
      - mongodb

  backend:
    build: ./backend
    container_name: backend_wa_ss24_primeflex
    restart: always
    ports:
      - 10033:10033
    environment:
      - PORT=10033
      - MONGO_URI=mongodb://root:example@mongodb:27017/primeflex
      - REACT_APP_MOVIES_RATING_RAPIDAPI_HOST=imdb188.p.rapidapi.com
      - REACT_APP_MOVIES_RATING_RAPIDAPI_KEY=29d4407cfdmsh6d2b236182761e4p142b4ejsn6a4a6fa0a39a
      - REACT_APP_IMDB_RAPIDAPI_HOST=imdb-top-100-movies.p.rapidapi.com
      - REACT_APP_IMDB_RAPIDAPI_KEY=29d4407cfdmsh6d2b236182761e4p142b4ejsn6a4a6fa0a39a
      - JWT_SECRET=431d2268ff2d197e94d85ee71534bc5d143d958c7a5c553d7051f24f03d975ec
    volumes:
      - ./backend:/usr/src/app

  frontend:
    build: ./frontend
    container_name: frontend_wa_ss24_primeflex
    restart: always
    ports:
      - 10034:3000
    stdin_open: true
    tty: true
    depends_on:
      - backend

volumes:
  data: {}
