const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
	group_id: String,
	name: String,
	plaid_credentials: String
});

let Users = module.exports = mongoose.model('Users', UserSchema);

module.exports.addUser = ((user, callback)=>{
	Users.create(user, callback);
});

module.exports.getUserByGroupId = ((group_id, callback) => {
	Users.findOne({'group_id':group_id}, callback)
});