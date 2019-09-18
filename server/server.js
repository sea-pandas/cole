const express = require('express');
const app = express();
const PORT = 6666;
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyparser.json());
app.use(cookieParser());










app.listen(PORT, () => console.log('server listening on Port:', PORT));