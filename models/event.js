var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Eventschema = new Schema({
	id: { type: String, required: true, unique: true},
	pic: { type: String, required: true },
	date:{ type: String},
	content: { type: String},
	updated_at: { type: Date, default: new Date() }
});

var Event = mongoose.model('Event', Eventschema);

module.exports = Event;