# Color API

## Description

This is a NestJS application that provides a single endpoint `/color` to fetch a random color from a PostgreSQL database.

## Decision Made
- [NestJS]: Chose NestJS as the backend framework for its simplicity, scalability, and built-in TypeScript support.
- [PostgreSQL]: Selected PostgreSQL as the database for data storage due to its reliability and support for complex queries.
- [TypeORM]: Implemented TypeORM as the Object-Relational Mapping (ORM) library to interact with the database.
- [Swagger]: Swagger is used for API endpoint Documentation.
- [Jest]: This Project is implement with Jest for testing framework.


## Table of Contents

- [Installation](#installation)
- [Running The App](#Running-The-App)
- [Database Schema](#database-schema)
- [Running Test](#running-test)
- [Dependencies](#dependencies)
- [Endpoints](#endpoints)
- [Support](#support)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/skazal15/color-api.git
   ```
   or if you have this zip file, you can unzip the project

2. **Install Dependencies:**
   - Navigate to the project directory:
   ```bash
   cd color-api
   ```
   - Install Dependencies:
   ```bash
   npm install
   ```

3. **Set up a PostgreSQL Database:**

   - Install PostgreSQL locally or use a cloud-based service (this project is tested with Postgres version 12).
   - Update the database connection details in `src/app.module.ts` and `ormconfig.json` with your own credentials:

   ```bash
   // src/app.module.ts
   TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'your-database-host',
    port: 5432,
    username: 'your-username',
    password: 'your-password',
    database: 'your-database-name',
    synchronize: true, // Caution: Set to false in production.
    logging: true, // Enable logging for debugging. //set false on production
    entities: [__dirname + '/**/*.entity{.ts,.js}'],})
   ```

   ```json
   // ormconfig.json
   {
    "type": "postgres",
    "host": "your-database-host",
    "port": 5432,
    "username": "your-username",
    "password": "your-password",
    "database": "your-database-name",
    "synchronize": true,
    "entities": ["dist/**/*.entity.js"],
    "cli": {
      "entitiesDir": "src/color",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
    }
    }
   ```

4. **Create Table:**
   Before create table, you must to create the database, this is SQL example for create Database:
   ```sql
   -- Database: color

   -- DROP DATABASE color;
   
   CREATE DATABASE colors
       WITH 
       ENCODING = 'UTF8'
       LC_COLLATE = 'Indonesian_Indonesia.1252'
       LC_CTYPE = 'Indonesian_Indonesia.1252'
       TABLESPACE = pg_default
       CONNECTION LIMIT = 5;
   ```
   After you create the database, Create table on your database with this SQL.
   ```sql
   -- Table: public.color

   -- DROP TABLE public.color;

   CREATE TABLE public.color
   (
       id integer NOT NULL DEFAULT nextval('color_id_seq'::regclass),
       name character varying COLLATE pg_catalog."default" NOT NULL,
       CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY (id)
   )
   ```

5. **Seed the Table:**
   Create a script to seed the database with color data. it helps to give some initial data in the database.
   ```sql
   INSERT INTO public.color(id, name)
	VALUES 
   (1, blue),
   (2, red),
   (3, green),
   (4, yellow);
   ```

## Running the app

   # development
   ```bash
   $ npm run start
   ```
   # watch mode(development)
   ```bash
   $ npm run start:dev
   ```

   # production mode
   ```bash
   $ npm run start:prod
   ```

## Database Schema
The database schema includes a colors table with the following columns:
   
   - id (Primary Key): Unique identifier for each color.
   - name: The name of the color.

## Running Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dependencies

- [NodeJS](https://nodejs.org/en/) 16+ or higher is required.
- [PostgreSQL](https://www.postgresql.org/) Postgresql12.
- [@nestjs/typeorm,typeorm] Used for seamless integration with the PostgreSQL database.
- [@nestjs/testing,@nestjs/schematics,jest] Used for testing framework

## Endpoints
- GET `/api`: Returns a Swagger API Documentation
- GET `/color`: Returns a random color from the database.
   Example Request:
   ```bash
   curl http://localhost:3000/color
   ```
   Example Response:
   ```json
   {
   "id": 1,
   "name": "blue"
   }
   ```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
