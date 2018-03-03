const express = require('express');
const router = express.Router();
const user = require('../models/user');
const config = require('../config');
const plaid = require('plaid');

const plaidClient = new plaid.Client(config.CLIENT_ID, config.SECRET, config.PUBLIC_KEY, plaid.environments[config.PLAID_ENV]);


router.get('/users/', (req, res)=> {
	res.send("Hey");
});

router.get('/users/getUser/:_group_id', (req,res)=>{
	let group_id = req.params._group_id;

	user.getUserByGroupId(group_id, (err, users) => {
		if(err) res.json(err);
		res.json(users);
	});

});

console.log("I exist");
router.post('/users/createUser', (req, res)=>{
	let users = [];
	
	let name = req.body.name;
	let group_id = req.body.group_id;
	let token = req.body.token;

	console.log("Made it here");
	plaidClient.exchangePublicToken(token, (err, tokenResponse) => {
		let access_token = tokenResponse.access_token;
		let item_id = tokenResponse.item_id;
		let transactions;
		plaidClient.getTransactions(access_token,'2018-01-15','2018-02-15',{
		count: 250,
		offset: 0
		} ,(err,result) => {
			users.push({
				group_id: group_id,
				name: name,
				access_token: access_token,
				item_id: item_id,
				transactions: result.transactions
			});
			user.addUser(users, (err, user)=>{
				if(err) res.json(err);
				res.json(user);
			});
		});
		
	});
});

module.exports = router;