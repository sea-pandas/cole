const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const messageModel = require('./models/requestModel');


// app.use(bodyParser.json());

//will give req.cookies
// app.use(cookieParser());

// app.use(express.static('client'));


app.listen(3434, () => console.log('listening on Port 3434'));