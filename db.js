var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/test');

// mongoose.connect('mongodb://localhost/test');

// Error handler
mongoose.connection.on('error', function(err) {
	console.log(err);
});

// Connection established
mongoose.connection.once('open', function() {
	console.log('database connection established');
});

require('./models/event');
require('./models/todo');
require('./models/setting');

var Setting = mongoose.model('Setting');

function createIfEmpty(name, defaultVal) {
	Setting
		.find({
			name: name
		})
		.exec(function(err, setting) {
			if (!err && setting.length == 0) {
				Setting.create({
					name: name,
					value: defaultVal
				});
			}
		});
}

function init() {
	createIfEmpty("Todo_id", 0);
}

init();


function addTodo(value) {
	Setting
		.findOne({
			name: "Todo_id"
		})
		.exec(function(err, todo) {
			if (!err) {
				todo.value = value;
				todo.save();
			}
		});
}