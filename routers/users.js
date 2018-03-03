const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get('/users', (req, res)=> {
	res.send("Hey");
});

router.get('/users/getUser', (req,res)=>{
	res.send("Hey User");
});

module.exports = router;