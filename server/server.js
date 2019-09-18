const express = require('express');
const app = express();
<<<<<<< HEAD
const PORT = 6666;
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyparser.json());
app.use(cookieParser());










app.listen(PORT, () => console.log('server listening on Port:', PORT));
=======
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
>>>>>>> master
