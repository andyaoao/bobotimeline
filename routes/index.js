
exports.index = function(req, res) {
	res.render('index', {
		title: 'Our story'
	});
}

exports.timeline = function(req, res) {
	res.render('timeline', {
		title: 'TimeLine'
	});
}

exports.todolist = function(req, res) {
	res.render('todolist', {
		title: 'TodoList'
	});
}

exports.upload = function(req, res) {
	res.render('upload', {
		title: 'Upload'
	});
}