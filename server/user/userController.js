const bcrypt = require('bcryptjs');
const pool = require('../models/requestModel');  
const SALT_ROUNDS = 10;
const salt = bcrypt.genSaltSync(SALT_ROUNDS);

const userController = {};

userController.verify = (req,res,next) => {
  //query database for user, if not exists, send res()
  console.log('inside the usercController.verify route')
  let pass = bcrypt.genSaltSync(req.body.pass, salt);
  let user = [req.body.username];
  let userExists = false;
  let passExists = false;
  let userQ = 'SELECT EXISTS (SELECT 1 from users where (username) = ($1));';
  let passQ = 'SELECT EXISTS (SELECT 2 from users where (username, password) = ($1, $2));';
  //if user exists but password is incorrect, res.send('username or password was incorrect)
  //if user not found, send to login
  if(pool.query(userQ, user)){
    userExists = true;
    //only check pass if username exists
    if(pool.query(passQ, [user, pass])){
      passExists = true;
    } else {
      return res.send('username or password was incorrect')
    }
  } else {
    return res.send('username or password was incorrect')
  }
  if(userExists && passExists){
    next();
  }
}


userController.signup = (req, res, next) => {
  console.log('inside the userController.signup route')
  // let pass = bcrypt.hashSync(req.body.password, salt);
  let pass = req.body.pass;
  let data = [req.body.username, pass];
  //if user already exists, send 'username is taken'
  let userQ = 'SELECT EXISTS (SELECT 1 from users where (username) = ($1));';
  let iQuery = 'INSERT INTO users (username, password) VALUES ($1, $2);';
  // console.log(pool.query(userQ, [req.body.username]))
  //else query the pool with the un/pw insertion into users
  pool.query(iQuery, data, (err, res) => {
    if(err){
      next(err);
    } else {
      console.log("success creating new user");
    }
    return next();
  })
}

module.exports = userController;