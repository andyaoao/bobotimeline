(function () {

	eventExpand();

	function eventExpand() {
		$('.fs-title').click(function (e) {
			$('#content1').slideToggle(1000);
		});
	}

}());
