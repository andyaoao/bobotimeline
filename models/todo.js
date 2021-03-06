var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todoschema = new Schema({
    todo_id    : Number,
    user	   : String,
    content    : String,
    date       : String,
    is_done    : Number,
    updated_at : Date
});

var Todo = mongoose.model('Todo', Todoschema);

module.exports = Todo;