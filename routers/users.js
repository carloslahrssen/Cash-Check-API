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

router.post('/users/createUser', (req, res)=>{
	let users = [];
	
	let name = req.body.name;
	let group_id = req.body.group_id;
	let token = req.body.token;
	let access_token;
	let item_id;

	plaidClient.exchangePublicToken(token)
	.then((tokenResponse)=>{
		access_token = tokenResponse.access_token;
		item_id = tokenResponse.item_id;
		const options = {count: 250, offset: 0}
		return plaidClient.getTransactions(access_token,'2018-01-15','2018-02-15', options);
	})
	.then((result)=>{
		users.push({
			group_id: group_id,
			name: name,
			access_token: access_token,
			item_id: item_id,
			transactions: result.transactions
		});
		return user.addUser(users);
	})
	.then(()=>{
		res.json(users);
	});

});

module.exports = router;