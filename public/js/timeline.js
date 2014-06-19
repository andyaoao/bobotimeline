(function () {

	eventExpand();

	function eventExpand() {
		$('.fs-title').click(function (e) {
			var id = $(this).next('.fs-content').attr('id');
			var DivId = '#' + id;
			$(DivId).slideToggle(1000);
		});
	}

}());
