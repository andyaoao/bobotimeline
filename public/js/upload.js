
$(function() {
	filepicker.setKey('AF20zBITS3GVg5MA5JPITz');
	$("#pickfile").click(function chooseFile() {
		console.log("hi")
		filepicker.pick(function(InkBlob) {
			console.log(InkBlob.url);
			$("#empty").attr("src",InkBlob.url);
			$("#imgurl").attr("value",InkBlob.url);
		});
	});
})

