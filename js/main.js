var isMenuOpen = false;

$(document).ready(function(){
	$('.fadethis').fadeIn();
});

$('#hider-icon').on('click', function() {
	if ($(this).hasClass('icon-menu')) {
		$(this).removeClass('icon-menu');
		$(this).addClass('icon-x');
	} else {
		$(this).removeClass('icon-x');
		$(this).addClass('icon-menu');
	}
});

if ($('.simonsArt')) {
    $('.simonsArt').each(function() {
        $(this)[0].oncontextmenu = function() {
            alert("We're sorry. Simon's art is just too unique for us to allow right-clicking.");
            return false;
        };
    });
}

// $(document).on('click', function(event) {
//     console.log(event);
// });