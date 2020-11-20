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

// Query for adding user
// INSERT INTO users(email, accesstoken) VALUES ('sql@gmail.com', 'token')
// Query for deleting user 1
// DELETE FROM users WHERE user_id = 1
// Query for updating user 1 email
// UPDATE users SET email = 'postgresql@gmail.com' WHERE user_id = 1

// CREATE TABLE users_in_fishes(
//   _id INT GENERATED ALWAYS AS IDENTITY,
//   PRIMARY KEY(_id),
//   user_id INT NOT NULL,
//   fish_id INT NOT NULL,
//   CONSTRAINT user_id FOREIGN KEY(user_id) REFERENCES users(user_id),
//   CONSTRAINT fish_id FOREIGN KEY(fish_id) REFERENCES fishes(fish_id)
// )

// INSERT INTO users_in_fishes(user_id, fish_id) VALUES (1, 2)

// CREATE TABLE fishes(
//   fish_id INT GENERATED ALWAYS AS IDENTITY,
//   name VARCHAR NOT NULL UNIQUE,
//   color VARCHAR NOT NULL,
//   size INT CHECK (size > 0),
//   PRIMARY KEY(fish_id),
//   )

// Query for adding fishes
// INSERT INTO fishes(name, color, size) VALUES ('Guppy', 'yellow', 15)

// Get all fishes for a particular user 1
// SELECT * FROM fishes f
// INNER JOIN users_in_fishes uf ON f.fish_id = uf.fish_id WHERE uf.user_id = 1

// Get all data on fishes and users
// SELECT * from users u
// FULL JOIN users_in_fishes uf ON u.user_id = uf.user_id
// FULL JOIN fishes f ON uf.fish_id = f.fish_id


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};