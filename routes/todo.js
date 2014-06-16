var mongoose = require( 'mongoose' );
var Todo     = mongoose.model( 'Todo' );
var TodoID   = 0;

exports.todolist = function ( req, res ){

    Todo.
		find().
		sort( '-date' ).
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
      updated_at : Date.now()
  }).save( function ( err, todo, count ){

    res.redirect( '/todolist' );
  });
};

exports.destroy = function ( req, res ){
  Todo.findById( req.params.id, function ( err, todo ){

    todo.remove({});
    res.redirect( '/todolist' );
  });
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

// exports.update = function( req, res, next ){
//   Todo.findById( req.params.id, function ( err, todo ){
//     var user_id = req.cookies ?
//       req.cookies.user_id : undefined;

//     if( todo.user_id !== user_id ){
//       return utils.forbidden( res );
//     }

//     todo.content    = req.body.content;
//     todo.updated_at = Date.now();
//     todo.save( function ( err, todo, count ){
//       if( err ) return next( err );

//       res.redirect( '/' );
//     });
//   });
// };
