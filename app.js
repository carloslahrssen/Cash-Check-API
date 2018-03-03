const express = require('express');
const app = express();
// const router = app.Router();
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
//Initial Connection to the database
mongoose.connect('mongodb://fsuhacks_database_1/plaid');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

const group = require('./routers/group');
const users = require('./routers/users');
const index = require('./routers/index')

app.use(index);
app.use(group);
app.use(users);

app.listen(PORT, () => {
console.log("Listening ..");
});