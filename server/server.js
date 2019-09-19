const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const messageModel = require('./models/requestModel');
const userController = require('./user/userController');
const { postItem, getItem } = require('./controllers/taskController');

app.use(bodyParser.json());

//will give req.cookies
app.use(cookieParser());

// app.use(express.static('client'));

app.post('/login', userController.verify,  (req, res) => {
  console.log('user is trying to login')

  res.status(200);
})

app.post('/signup', userController.signup, (req, res) => {
  console.log('user is trying to sign')
  res.send('user succesfully signed up');
})


app.post('/items', postItem, (req, res) => {
    res.send('item successfully posted')
});

app.get('/items', getItem, (req, res) => {
    res.status(200).json(res.locals.items)
});



app.listen(3434, () => console.log('listening on Port 3434'));