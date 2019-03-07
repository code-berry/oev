$('#bba-left').on('click', navLeft);
$('#bba-right').on('click', navRight);

function bbaSearch() {
	// search button on click:
	// get int value from user selection
	$('#errormessage').hide();
	userSelection = $('#address-select option:selected').val();
	if (userSelection != 'null') {
		// convert to int
		userSelection = parseInt(userSelection);
		// get business name from user selection
		selectedName = $('#address-select option:selected').text();
		// change pics, name, address and hidden span
		$('#bbaCurrentEntry').text(userSelection);
		contentChanger(userSelection, selectedName);
		// display content
		$('#bba-content').fadeIn();
		$('.bbaNavButton').css('visibility', 'visible');	
	} else {
		$('#errormessage').show();
		return
	}
}

function navLeft() {
	$('#errorright').css('visibility', 'hidden');
	// change page position, found from hidden elem on page
	userSelection = parseInt($('#bbaCurrentEntry').html());
	//
	if (userSelection > 0) {
		userSelection--;
		// get new name and change content
		newName = $("#address-select option[value='"+userSelection+"']").text();
		$('#bbaCurrentEntry').text(userSelection);
		contentChanger(userSelection, newName);	
	} else {
		$('#errorleft').css('visibility', 'visible');
	}
}

function navRight() {
	$('#errorleft').css('visibility', 'hidden');
	// change page position, found from hidden elem on page
	userSelection = parseInt($('#bbaCurrentEntry').html());
	//
	if (userSelection < 12) {
		userSelection++;
		// get new name and change content
		newName = $("#address-select option[value='"+userSelection+"']").text();
		$('#bbaCurrentEntry').text(userSelection);
		contentChanger(userSelection, newName);
	} else {
		$('#errorright').css('visibility', 'visible');
	}
}

function contentChanger(userSelection, name) {
	// set img src for new selection
	picOne = 'images/bba/'+userSelection+'.jpg';
	picTwo = 'images/bba/'+userSelection+'a.jpg';
	$('#bba1').attr('src', picOne);
	$('#bba2').attr('src', picTwo);
	// change corresponding information on page
	$('#bbaName').text(name);
	$('#bbaAddress').text(getAddress(userSelection));
}

// go to bed






// function searchChanger() {
// 	// grabs value submitted from select => 0,1,2...
// 	userSelection = $('#address-select option:selected').val();
// 	// grabs corresponding address
// 	newAddress = $('#address-select option:selected').text();
// 	// inserts correct address onto page where #bbaAddress was
// 	$('#bbaAddress').text(newAddress);
// 	// initializes imgSwitch()
// 	bbaImgSwitch(userSelection);
// }


// function bbaImgSwitch(userSelection) {
// 	// set src for before/after pics
// 	picOne = 'images/bba/'+userSelection+'.jpg';
// 	picTwo = 'images/bba/'+userSelection+'a.jpg';
// 	// change src's
// 	$('#bba1').attr('src', picOne);
// 	$('#bba2').attr('src', picTwo);
// 	// get current position status
// 	$('#bbaCurrentEntry').html(userSelection);
// 	$('#bba-content').fadeIn();
// 	$('.bbaNavButton').css('visibility', 'visible');
// }

// function lazyNameFinder(userSelection) {
// 	if (userSelection == 0) {
// 		return "Maymo's Fry";
// 	}
// }

function getAddress(userSelection) {
	switch (userSelection) {
		case 0:
			return "420 Elizabeth Street"
			break;
		case 1:
			return "610 Dundas Street"
			break;
		case 2:
			return "623 Dundas Street"
			break;
		case 3:
			return "664 Dundas Street"
			break;
		case 4:
			return "697 Dundas Street"
			break;
		case 5:
			return "710 Dundas Street"
			break;
		case 6:
			return "717 Dundas Street"
			break;
		case 7:
			return "762 Dundas Street"
			break;
		case 8:
			return "764 Dundas Street"
			break;
		case 9:
			return "795 Dundas Street"
			break;
		case 10:
			return "849 Dundas Street"
			break;
		case 11:
			return "884-898 Dundas Street"
			break;
		case 12:
			return "610 Dundas Street"
	}
}


	// switch (userSelection) {
	// 	case 0:
	// 		return "Maymo's Fry"
	// 		break;
	// 	case 1:
	// 		return "Wisdom Tea Shop"
	// 		break;
	// 	case 2:
	// 		return "Root Cellar"
	// 		break;
	// 	case 3:
	// 		return "London Clay Art Center"
	// 		break;
	// 	case 4:
	// 		return "Unqiue Food Attitudes"
	// 		break;
	// 	case 5:
	// 		return "Palace Theatre"
	// 		break;
	// 	case 6:
	// 		return "Unity Project"
	// 		break;
	// 	case 7:
	// 		return "Freeborn + Company"
	// 		break;
	// 	case 8:
	// 		return "Love Alchemy"
	// 		break;
	// 	case 9:
	// 		return "True Taco"
	// 		break;
	// 	case 10:
	// 		return "Aeolian Hall"
	// 		break;
	// 	case 11:
	// 		return "OEV Dental Specialists"
	// 		break;
	// 	case 12:
	// 		return "Illbury + Goose"
	// 		break;
	// }