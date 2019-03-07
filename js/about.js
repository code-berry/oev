$('.gall-min').on('click', function(event) {
	source = event.target.src;
	pieces = source.split('/');
	source = pieces[pieces.length-1];
	newImage = "url('images/" + source + "')";
	console.log(source);
	$('#gall-main').css("background-image", newImage);
	$('#gall-main2').css('background-image', newImage);
	// $('#alt-container').html('<p>'++'</p>');
	$('#alt-container').html('<p>'+altTextChanger()+'</p>');
});

$('#gall-main').on('mouseenter', function(){
	$('#alt-container').fadeIn();
});

$('#gall-main').on('click', function(){
	var currentUrl = $(location).attr('href');
	var imgUrl = $(this).css('background-image');
	var splitUrl = imgUrl.split('/');
	splitUrl = splitUrl[splitUrl.length-1];
	window.open('http://www.oldeastvillage.com/images/'+splitUrl);
})

$('#gall-main').on('mouseout', function(){
	$('#alt-container').fadeOut();
})

function altTextChanger() {
	switch (source) {
		case 'slider1.jpg':
			return "Lilley's Corners, Old East Village";
			break
		case 'slider2.jpg':
			return "Skateboarder in Old East Village, Street Festical";
			break
		case 'slider3.jpg':
			return "Crowd at TELL ME WHERE JEN :), Old East Village";
			break
		case 'slider4.jpg':
			return "St. Regis Tavern, Old East Village";
			break
		case 'main.jpg':
			return 'Need caption, Old East Village';
	}
}