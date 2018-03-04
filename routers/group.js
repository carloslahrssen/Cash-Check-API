const express = require('express');
const router = express.Router();
const group = require('../models/group');

router.get('/groups/', (req, res)=>{
	res.send("workin");
});

router.post('/groups/createGroup/:_title', (req, res) => {
	let groups = [];	
	let title = req.params._title;
	groups.push({
		title:title
	});
	group.addGroup(groups, (err, group) => {
		if(err) res.json(err);
		res.json(group);
	});

});

router.get('/groups/getGroup/:_title', (req, res) => {
	let title = req.params._title;

	group.getGroupByTitle(title, (err, group) =>{
		if(err) throw err;
		res.json(group);
	});
});

module.exports = router;