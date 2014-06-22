var mongoose = require( 'mongoose' );
var promise  = require( 'promise' );
var Todo     = mongoose.model( 'Todo' );
var TodoID   = 0;

exports.todolist = function ( req, res ){

    Todo.
		find().
		sort( {'is_done: -1'}).
		exec(function(err, todos) {
			if (err) {
				console.error(err);
			};
			res.render('todolist', {
			title: 'TodoList',
			todos: todos
		});
	})
};

exports.create = function ( req, res ){
  
  new Todo({
      todo_id    : TodoID++, 
      user       : req.body.user,
      content    : req.body.content,
      date       : req.body.date,
      is_done    : 0,
      updated_at : Date.now()
  }).save( function ( err, todo, count ){

    res.redirect( '/todolist' );
  });
};

exports.destroy = function ( req, res ){
  
  console.log("in destroy id", req.params.id);
  
  Todo.find({
    todo_id: req.params.id
  },function (err, todos) {
    todos[0].remove({});
  })

  res.redirect( '/todolist' );
};

exports.update = function( req, res ){
  
  console.log("in update id", req.params.id);
  
  Todo.find({
    todo_id: req.params.id
  },function(err, todos) {
    updater = todos[0];
    updater.is_done = 1;
    updater.save({});
  })

  res.redirect( '/todolist' );

};

// exports.edit = function( req, res ){

//   Todo.
//     find({ user_id : user_id }).
//     sort( '-updated_at' ).
//     exec( function ( err, todos ){
//       if( err ) return next( err );

//       res.render( 'edit', {
//         title   : 'Editting TODO list',
//         todos   : todos,
//         current : req.params.id
//       });
//     });
// };
