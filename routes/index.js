var mongoose = require( 'mongoose' );
var Event   = mongoose.model('Event');
var EventId = 0;

exports.index = function(req, res) {
	res.render('index', {
		title: 'Our story'
	});
}

exports.timeline = function(req, res) {
	Event.
		find().
		sort( '-date' ).
		exec(function(err, events) {
			if (err) {
				console.error(err);
			};
			res.render('timeline', {
			title: 'TimeLine',
			events: events
		});
	})
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

exports.uploadevent = function(req, res) {

	var image = req.body.imgurl + "/convert?width=400&height=400&fit=crop"

	new Event({
		id         : EventId++,
	    pic		   : image,
	    date       : req.body.date,
	    title	   : req.body.title,
	    content	   : req.body.content,
      	updated_at : Date.now()
  	}).save( function ( err, event, count ){
    	console.log('upload event successfully');
    	var redirect = '<html><meta http-equiv="refresh" content="1;url=/upload" />'
		var flash = '<h1>成功上傳!</h1></html>';
		res.end(redirect+flash);
  	});
}