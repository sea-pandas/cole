const URI = process.env.PG_URI

const { Pool } = require ('pg');
const pool = new Pool ({
  connectionString: URI});
// const query = 'ALTER ROLE atsdlbbl CONNECTION LIMIT -1;'

const queryString1 = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,
username varchar(255) NOT NULL UNIQUE,password varchar(255) NOT NULL);

CREATE TABLE IF NOT EXISTS orgs(id SERIAL PRIMARY KEY, name varchar(255) NOT NULL);

CREATE TABLE IF NOT EXISTS topics(id SERIAL PRIMARY KEY, name varchar(255), description varchar(255));

CREATE TABLE IF NOT EXISTS items(id SERIAL PRIMARY KEY, topics_id integer NOT NULL, name varchar(255), 
description varchar(255), vote integer, FOREIGN KEY (topics_id) REFERENCES topics(id) ON DELETE CASCADE);

CREATE TABLE IF NOT EXISTS userorg(id SERIAL PRIMARY KEY, user_id int NOT NULL, org_id int NOT NULL,
checkout_date timestamp, return_date timestamp,FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, 
FOREIGN KEY (org_id) REFERENCES orgs(id) ON DELETE CASCADE );`

// pool.query(query);
pool.query(queryString1, (err, result) => {
  if(err) {
    console.log('error creating table1: ', err)
  }  
})

// pool.query(queryString2, (err, result) => {
//   if(err) {
//     console.log('error creating table2: ', err)
//   }  
// })

// pool.query(queryString3, (err, result) => {
//   if(err) {
//     console.log('error creating table3: ', err)
//   }  
// })

// pool.query(queryString4, (err, result) => {
//   if(err) {
//     console.log('error creating table4: ', err)
//   }  
// })


// pool.query(queryString5, (err, result) => {
//   if(err) {
//     console.log('error creating table5: ', err)
//   }  
// })


module.exports = pool;