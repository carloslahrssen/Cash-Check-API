const express = require('express');
const app = express();
// const router = app.Router();
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
//Initial Connection to the database
mongoose.connect('mongodb://fsuhacks_database_1/plaid');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, application/json');
    next();
});

const group = require('./routers/group');
const users = require('./routers/users');
const index = require('./routers/index')

app.use(index);
app.use(group);
app.use(users);

app.listen(PORT, () => {
console.log("Listening ..");
});