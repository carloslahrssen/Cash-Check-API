const mongoose = require('mongoose');
const schema = mongoose.Schema;

const GroupSchema = new schema({
	title: String,
});

let Groups = module.exports = mongoose.model('Groups', GroupSchema);

module.exports.addGroup = ((group, callback) => {
	Groups.create(group, callback);
});

module.exports.getGroupByTitle = ((group_id, callback) => {
	Groups.findOne({'group_id': group_id}, callback);
});