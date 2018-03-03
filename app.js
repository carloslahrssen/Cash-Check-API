const express = require('express');
const app = express();
const mongoose = require('mongoose');
const plaid = require('plaid');
const config = require('./config');

//Initial Connection to the database
mongoose.connect('mongodb://fsuhacks_database_1/plaid');
//Initializing plaid API
const plaidClient = new plaid.Client(config.CLIENT_ID, config.SECRET, config.PUBLIC_KEY, plaid.environments[config.PLAID_ENV]);
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
	res.send("Success Motherfucker");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);