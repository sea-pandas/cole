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

app.post('/login', userController.verify, (req, res) => {
  res.send('sucessfully logged in');
})

app.post('/signup', userController.signup, (req, res) => {
  res.send('successfully signed up')
})



// app.use(express.static('client'));

//api/items
//body { topic : id(integer)}
//get everything from items from a specific topic id
//instead of having a user_id, replace user_id with username

app.post('/items', postItem, (req, res) => {
    res.send('item successfully posted')
});

app.get('/items', getItem, (req, res) => {
  console.log('gettin us some items, yee haw!!!')
    res.status(200).json(res.locals.items)
});



app.listen(3434, () => console.log('listening on Port 3434'));
