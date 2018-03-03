const mongoose = require('mongoose');
const schema = mongoose.Schema;

const GroupSchema = new schema({
	title: String,
});

let Groups = module.exports = mongoose.model('Groups', GroupSchema);

module.exports.addGroup = ((group, callback) => {
	Groups.create(group, callback);
});

module.exports.getGroupByTitle = ((title, callback) => {
	Groups.findOne({'title': title}, callback);
});