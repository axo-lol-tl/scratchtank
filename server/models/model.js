const { Pool } = require('pg');

const PG_URI = 'postgres://swwzsbqk:2H0DivQiFgEomiUWwrREzWSeNVcfGAnN@rajje.db.elephantsql.com:5432/swwzsbqk';

const pool = new Pool({
  connectionString: PG_URI
});

// reference for columns in tables and how to query

// CREATE TABLE users (
//   user_id INT GENERATED ALWAYS AS IDENTITY,
//   email VARCHAR UNIQUE NOT NULL,
//   accesstoken VARCHAR UNIQUE NOT NULL,
//   PRIMARY KEY(user_id)
// )

// INSERT INTO users(email, accesstoken) VALUES ('sql@gmail.com', 'token')

// need join table for users_in_fishes

// CREATE TABLE users_in_fishes(
//   _id INT GENERATED ALWAYS AS IDENTITY,
//   PRIMARY KEY(_id),
//   user_id INT NOT NULL,
//   fish_id INT NOT NULL,
//   CONSTRAINT user_id FOREIGN KEY(user_id) REFERENCES users(user_id),
//   CONSTRAINT fish_id FOREIGN KEY(fish_id) REFERENCES fishes(fish_id)
// )

// INSERT INTO fishes(name, color, size) VALUES ('Guppy', 'yellow', 15)

// CREATE TABLE fishes(
//   fish_id INT GENERATED ALWAYS AS IDENTITY,
//   name VARCHAR NOT NULL,
//   color VARCHAR NOT NULL,
//   size INT CHECK (size > 0),
//   PRIMARY KEY(fish_id),
//   )

  // INSERT INTO fishes(name, color, size) VALUES ('Guppy', 'yellow', 15)

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};