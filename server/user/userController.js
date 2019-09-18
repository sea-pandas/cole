
const bcrypt = require('bcryptjs');
const db = require('db');

const SALT_WORK_FACTOR = 10;
let salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);


const userController = {};

userController.verify = (req,res,next) => {
  //query database for user, if not exists, send res()
  let pass = bcrypt.genSaltSync(req.body.pass, salt);
  let user = [req.body.username];
  let userExists = false;
  let passExists = false;
  let userQ = 'SELECT EXISTS (SELECT 1 from users where (username) = ($1));';
  let passQ = 'SELECT EXISTS (SELECT 2 from users where (username, password) = ($1, $2));';
  //if user exists but password is incorrect, res.send('username or password was incorrect)
  //if user not found, send to login
  if(db.query(userQ, user)){
    userExists = true;
    //only check pass if username exists
    if(db.query(passQ, [user, pass])){
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
  let pass = bcrypt.genSaltSync(req.body.pass, salt);
  let data = [req.body.username, pass];
  //if user already exists, send 'username is taken'
  let userQ = 'SELECT EXISTS (SELECT 1 from users where (username) = ($1));';
  let iQuery = 'INSERT INTO users (user, pass) VALUES ($1, $2);';
  if(db.query(userQ, [req.body.user])){
    return res.send('a user with that name already exists');
  } else {
    //else query the db with the insertion into users
    db.query(iQuery, data, (err, res) => {
      if(err){
        next(err);
      } else {
        console.log("success creating new user");
      }
      next();
    })
  }
}

module.exports = userController;