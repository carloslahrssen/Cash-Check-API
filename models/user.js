const mongoose = require('mongoose');
const schema = mongoose.schema;

const UserSchema = new Schema({
	group_id: String,
	name: String,
	plaid_credentials: String,
	transactions: Object
});