require('./db');

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var promise  = require( 'promise' );
var partials = require('express-partials');
var routes  = require( './routes' );
var events  = require( './routes/event' );
var todo  = require( './routes/todo' );

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Routes
app.get('/', routes.index);
app.get('/upload', routes.upload);

app.get('/timeline', events.timeline);
app.post('/uploadevent', events.uploadevent);

app.get('/todolist', todo.todolist);
app.post('/todolist/create', todo.create);
app.get('/todolist/destroy/:id', todo.destroy);
app.get('/todolist/update/:id', todo.update);
// app.get('/todolist/edit/:id', todo.edit);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
