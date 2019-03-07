var close = 'images/close.svg';

$('.navbar-toggler-icon').on('click', function() {
	if ($('span').hasClass('closed-icon')) {
		$('.bg-opaque').css('background-color', 'rgba(255,255,255,0.8)');
		$('#homelogo').attr('src', 'images/oevn.png');
		$('.navbar-toggler-icon').removeClass('closed-icon');
		$('.navbar-toggler-icon').css('font-size', 1.35+'rem');
	} else {
		$('.navbar-toggler-icon').addClass('closed-icon');
		$('.bg-opaque').css('background-color', '#1a3077');
		$('#homelogo').attr('src', 'images/oevalt.png');
		// $(".navbar-toggler-icon").css("background-image", "url('"+close+"')")
		$('.toggle-close').css('border-color', 'rgba(0,0,0,0)');
		$('.navbar-toggler-icon').css('font-size', 1+'rem');
	}
	// $('#homelogo').fadeIn('slow');
});
