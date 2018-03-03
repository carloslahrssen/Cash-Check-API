const express = require('express');
const router = express.Router();
const user = require('../models/user');




router.get('/users/', (req, res)=> {
	res.send("Hey");
});

router.get('/users/getUser/:_group_id', (req,res)=>{
	let group_id = req.params._group_id;

	user.getUserByGroupId(group_id, (err, user) => {
		if(err) res.json(err);
		res.json(user);
	});

});

router.post('/users/createUser', (req, res)=>{
	let users = [];
	
	let name = req.body.name;
	let token = req.body.token;

	users.push({
		group_id: 1,
		name: name,
		plaid_credentials: token,
	});

	user.addUser(users, (err, user)=>{
		if(err) res.json(err);
		res.json('Success');
	});
});

module.exports = router;