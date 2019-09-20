const bcrypt = require('bcryptjs');
const pool = require('../models/requestModel');  
const SALT_ROUNDS = 10;
const salt = bcrypt.genSaltSync(SALT_ROUNDS);

const userController = {};

userController.verify = (req,res,next) => {
  //query database for user, if not exists, send res()
  let pass = bcrypt.hashSync(req.body.password, salt);
  // let pass = req.body.password;
  console.log('pass is', pass)
  let creds = [req.body.username, pass]
  let credentials = false;
  let passQ = 'SELECT EXISTS (SELECT 2 from users where (username, password) = ($1, $2));'
  pool.query(passQ, creds)
    .then((res) => {
    console.log('querying the db for credentials, res is', res);
    credentials = res.rows[0].exists;
    console.log('credentials is', credentials )
  }).then(()=> {
    console.log('credentials is stilllll', credentials)
    if(credentials){
      return res.send('successfully logged in');
      next() 
    } else {
      return res.send('your username or password were incorrect')
    }
  })
}


userController.signup = (req, res, next) => {
  let pass = bcrypt.hashSync(req.body.password, salt);
  // let pass = req.body.password;
  let data = [req.body.username, pass];
  //if user already exists, send 'username is taken'
  let userQ = 'SELECT EXISTS (SELECT 1 from users where (username) = ($1));';
  let iQuery = 'INSERT INTO users (username, password) VALUES ($1, $2);';
  let found;
  // const found = pool.query(userQ, [req.body.username]);
  // console.log('checking', pool.query(userQ, [req.body.username]));

  // const promise = Promise.resolve(pool.query(userQ, [req.body.username]));
  // console.log("promise is", promise);
  pool.query(userQ, [req.body.username]).then(res => {
    console.log('res is', res)
    found = res.rows[0].exists;
    console.log('found is', found, 'type of is', typeof found)
  })
  //if found is false(user not found, sign up)
  if(found){
    return res.send('That username is already taken')
  } else {
    // else query the pool with the insertion into users
    pool.query(iQuery, data, (err, res) => {
      if(err){
        return next(err);
      } else {
        console.log("success creating new user");
      }
      return next();
    })
  }  
}

module.exports = userController;