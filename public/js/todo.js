(function () {

var done_btn = $('#done'),
	tag = $('#tag');

done_btn.click(function(){

	var div = $(this).parents('.place');
	var id  = div.attr('id');
	var li  = div.find('.sticker');
	var url = '/todolist/update'+id; 
	li.removeClass('sticker');
	li.addClass('is_done');
	div.remove();
	div.appendTo(tag);

	$.ajax({
            type: 'PUT',
            url: url,
        }).done(function( response ) {
            console.log('update is_done successed');
        });
});


}());
