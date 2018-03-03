const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
	group_id: String,
	name: String,
	access_token: String,
	item_id: String,
	transactions: Object
});

let Users = module.exports = mongoose.model('Users', UserSchema);

module.exports.addUser = ((user, callback)=>{
	Users.create(user, callback);
});

module.exports.getUserByGroupId = ((group_id, callback) => {
	Users.find({'group_id':group_id}, callback)
});