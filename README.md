# Resturrants-Reviewer
### A Full-stack application that has both front and back end technologies and development.

* Technologies:
1. React.js For Front-end And User Interface.
1. Node.js(express.js) For Back-end And Routes.
1. TypeScript For Backend.
1. Postgresql For Database.
1. Jasmine.js For Unit-Testing.
1. Bootstrap For Styling.
1. Git And Github For Version Control.
-> Be sure these technologies are installed globaly on your machine.

* Liberaries:
1. [db-migrate Liberary](https://www.npmjs.com/package/db-migrate).
1. [Font Awesome Icons](https://fontawesome.com/icons).
1. [React Router Dom](https://www.npmjs.com/package/react-router-dom).
1. [Bootstrap](https://getbootstrap.com/).
1. [pg](https://www.npmjs.com/package/pg).
1. [Supertest](https://www.npmjs.com/package/supertest).
1. [nodemon](https://www.npmjs.com/package/nodemon).
1. [dotenv](https://www.npmjs.com/package/dotenv).

* Running The Application On Your Local Machine:
1. Cloning The Repositery.
2. Making ``` npm install ``` for both server and client.
3. DB Creation And Migrations:
####Creating A database.
* Start The Postgres Server : For Example ``` sudo service postgresql start && sudo -u postgres psql ``` In A Wsl Machine .
* Creating A User For The Database: `CREATE USER usern_name WITH PASSWORD 'password';`
* Creating A Database For Restaurants: `CREATE DATABASE db_name;`.
* Creating A Database For Testing: `CREATE DATABASE db_name_test;`.
* The Databases Are Running On Port 5432 (which is the default port for databases).
#####Running The Migrations.
* Making The migrations files with the required table schemas (which were made in this repo).

### Tables Schemas
1. Resturants Table:
```
CREATE TABLE resturants (id SERIAL PRIMARY KEY NOT NULL, rest_name VARCHAR(50) NOT NULL,
rest_location VARCHAR(100) NOT NULL, price_range INTEGER CHECK(price_range < 6));
```
2. Reviews Table:
```
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY NOT NULL,
    resturant_id INTEGER NOT NULL REFERENCES resturants (id) ON DELETE CASCADE ,
    name VARCHAR(50),
    review TEXT NOT NULL,
    rate INTEGER NOT NULL CHECK (rate >= 0 and rate <= 5)
);
```

* Then You Make Your .env File With the required environment Variables.
-> For Example:
` PORT= your port
  ENV= test || dev
  POSTGRES_HOST=localhost
  POSTGRES_DB=db_name
  POSTGRES_DB_TEST=db_name_test
  POSTGRES_USER=
  POSTGRES_PASSWORD=
  DB_PORT=5432 `
  
* Restaurants Table Routes:
1. Get All Restaurants: 'http://localhost:3000/resturants' [Get].
1. Get One Restaurant: 'http://localhost:3000/resturants/:id' [Get].
1. Create One Restaurant: 'http://localhost:3000/resturants' [Post].
1. Update One Restaurant: 'http://localhost:3000/resturants/:id' [Patch].
1. Delete One Restaurant: 'http://localhost:3000/resturants/:id' [Delete].

* Reviews Table Routes:
1. Get All Reviews: 'http://localhost:3000/resturants/:id/reviews' [Get].
1. Create Review: 'http://localhost:3000/resturants/:id/addReview' [Post].
