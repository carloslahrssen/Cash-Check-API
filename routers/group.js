const express = require('express');
const router = express.Router();
const group = require('../models/group');

router.get('/group', (req, res)=>{
	res.send("workin");
});

module.exports = router;