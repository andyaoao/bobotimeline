var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todoschema = new Schema({
    todo_id    : String,
    user	   : String,
    content    : String,
    date       : Date,
    updated_at : Date
});

var Todo = mongoose.model('Todo', Todoschema);

module.exports = Todo;