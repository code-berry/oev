var currentPage = 1;

// grab our pagination element, set onclick function
$('#bba-pagination').on('click', function(event){
	// see if the href is valid
	targetid = (event.target.href).split('#page');
	// if len = 1, we know the href was invalid
	if (targetid.length == 1) {
		// use innerHTML to determine + or -
		direction = event.target.textContent;
		console.log(direction)
		switch (direction) {
			case 'Next':
				currentPage++;
				pagiNav(currentPage);
				break;
			case 'Previous':
				currentPage--;
				pagiNav(currentPage);
		} 

	// if len != 1, we know that href was valid
	} else {
		// isolate the page number
		targetid = targetid[targetid.length-1];
		currentPage = parseInt(targetid);
		pagiNav(currentPage);
		formattedtarget = "#page"+targetid;
		// remove .page-active from all
		$('.page').removeClass('page-active');
		// reapply style to correct element
		$(formattedtarget).addClass('page-active');
	}
});

function pagiNav(page) {
	if (page == 2) {
		// enable previous button
		$('.prev').removeClass('disabled');
		// remove .page-active from all elements
		$('.page').removeClass('page-active');
		// display proper element
		$('#page2').addClass('page-active');
		// removing the active class from all elements
		$('.page-item').removeClass('active');
		// adding active class to proper button
		$('#pagin-i2').addClass('active');
	
	} else if (page == 3) {
		// disable the next button
		$('.next').addClass('disabled');
		// removing .page-active from all elements
		$('.page').removeClass('page-active');
		// adding .page-active to proper element
		$('#page3').addClass('page-active');
		// removing the active class from all elements
		$('.page-item').removeClass('active');
		// adding active class to proper button
		$('#pagin-i3').addClass('active');
	} else if (page == 1) {
		// disable previous button
		$('.prev').addClass('disabled');
		// enable next button
		$('.next').removeClass('disabled');
		// remove .page-active from all elements
		$('.page').removeClass('page-active');
		// add .page-active to proper element
		$('#page1').addClass('page-active');
		// removing the active class from all elements
		$('.page-item').removeClass('active');
		//adding active class to proper button
		$('.pagein-i1').addClass('active');
	}
};
