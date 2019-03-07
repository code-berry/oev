var marker;


function initMap(){
	count = 0;
  	
	var options = {
		zoom: 17,
		center: {lat:42.989609,lng:-81.229860}
	}

	// New map
	var map = new google.maps.Map(document.getElementById('map'), options);

	// Listen for click on map
	google.maps.event.addListener(map, 'click', function(event) {
		//
	});

	var styles = [
		{
		  featureType: 'poi.business',
		  stylers: [{visibility: 'off'}]
		},
		{
		  featureType: 'transit',
		  elementType: 'labels.icon',
		  stylers: [{visibility: 'off'}]
		}
	]

	map.set('styles', styles);

  // Array of markers
	var markers = [
		{ // 1
			coords: {lat:42.988526,lng:-81.230864},
			content:'<h1 id="inWindowTitle">Melanie Schambach, 2018 - Can you see me in you?</h1><hr><h6 id="inWindowName">In collaboration with International Children’s Summer Villages local property owners, LIHC and the OEV BIA.</h6>'
		},
		{ // 2
			coords: {lat:42.988355,lng:-81.231102},
			content:'<h1 id="inWindowTitle">Susan Day, Supported by the London Clay Art Centre 2018 – Wayfinding Marshal.</h1><hr><h6 id="inWindowName">A community generated clay mosaic funded by the City of London Neighbourhood Decision Making Grant</h6>',
		},
		{ // 3
			coords: {lat:42.988902,lng:-81.230887},
			content: '<h1 id="inWindowTitle">VibraFusionLab & Inclusive Arts London  - See Hear Feel Wall</h1><hr><h6 id="inWindowName">Programming here varies however all pieces have an emphasis on inclusion and attention to the Deaf and Disability Arts in London.</h6>',
		},
		{ // 4
			coords: {lat:42.989196,lng:-81.230919},
			content: '<h1 id="inWindowTitle">Ian Gordon, 2015 – Musical Chair</h1><hr><h6 id="inWindowName">Commissioned by the OEV BIA. Honours community members who create the weekly Musical Chairs event at the St. Regis Tavern.</h6>',
		},
		{ // 5
			coords: {lat:42.989626,lng:-81.231783},
			content: '<h1 id="inWindowTitle">Dave Cook/Ian Gordon, 2018 – Sunflower on Patio</h1>',
		},
		{ // 6
			coords: {lat:42.990032,lng:-81.231826},
			content: '<h1 id="inWindowTitle">Susan Day supported by the London Clay Art Centre - Gateway Mosaic #1</h1><hr><h6 id="inWindowName">Coming Spring 2019!</h6>',
		},
		{ // 7
			coords: {lat:42.990205,lng:-81.231402},
			content: '<h1 id="inWindowTitle">7a. Banting Flame of Hope, 1989</h1><hr><h6 id="inWindowName">Kindled by Her Majesty Queen Elizabeth The Queen Mother it will be extinguished by the research team that finds the cure for diabetes.</h6><hr><h1 id="inWindowTitle">7c. Daniel Castillo, 2010 – Globe</h1><hr><h6 id="inWindowName">Represents Canada’s gift of insulin to the world. It is a symbol of ongoing global research determined to find a cure for diabetes.</h6><hr><h1 id="inWindowTitle">7d. Nohl Reiser, 2018 – Banting Mural</h1>',
		},
		{ // 8
			coords: {lat:42.990362,lng:-81.230812},
			content: '<h1 id="inWindowTitle">Simon Shegelman, 2013 - One of a Kind Shopping</h1><hr><h6 id="inWindowName">Three distinct pieces commissioned by the Old East Village BIA to represent the kinds of businesses driving the OEV economy. Parking sign in partnership with the City of London</h6>',
		},
		{ // 9
			coords: {lat:42.990303,lng:-81.229610},
			content: '<h1 id="inWindowTitle">9. Susan Day supported by the London Clay Art Centre – Gateway Mosaic #2</h1><hr><h6 id="inWindowName">Coming Spring 2019!</h6>',
		},
		{ // 10
			coords: {lat:42.989962,lng:-81.229841},
			content: '<h1 id="inWindowTitle">10a. Simon Shegelman, 2014. - OEV Arts & Culture</h1><hr><h6 id="inWindowName">Parking sign facing south</h6><hr><h1 id="inWindowTitle">10b. Simon Shegelman, 2015. - OEV Food Basket</h1><hr><h6 id="inWindowName">Parking sign facing north</h6><hr><h1 id="inWindowTitle">10c. Susan Day supported by the  London Clay Art Centre – Gateway Mosaic #3</h1><hr><h6 id="inWindowName">Coming Spring 2019!</h6>',
		},
		{ // 11
			coords: {lat:42.989671,lng:-81.229189},
			content: '<h1 id="inWindowTitle">London Clay Art Centre/ Susan Day & Beth Turnbull Morrish -Canada/Ontario 150 Mosaic</h1><hr><h6 id="inWindowName">Celebrating Canada and Ontario over the first 150 years</h6>',
		},
		{ // 12
			coords: {lat:42.990118,lng:-81.229213},
			content: '<h1 id="inWindowTitle">Susan Day supported by the Clay Art Centre, 2018. - Wayfinding Elizabeth</h1><hr><h6 id="inWindowName">A community generated clay mosaic funded by the City of London Neighbourhood Decision Making Grant</h6>',
		},
		{ // 13
			coords: {lat:42.990556,lng:-81.228291},
			content: '<h1 id="inWindowTitle">Susan Day supported by the London Clay Art Centre - Gateway Mosaic #4</h1><hr><h6 id="inWindowName">Coming Spring 2019!</h6>',
		},
		{ // 14
			coords: {lat:42.991146,lng:-81.225198},
			content: '<h1 id="inWindowTitle">Jeremy Jeresky, 2010 - I love OEV!</h1><hr><h6 id="inWindowName">Selfie Station #OEVLDN</h6>',
		},
		//
		{ // 15
			coords: {lat:42.991657,lng:-81.219959},
			content: '<h1 id="inWindowTitle">Life of Leisure Collaborative Piece, 2018. – Wall for All</h1><hr><h6 id="inWindowName">Open space for youth to hone their craft as graffiti artists. Host to established and recognized local talent James Kirkpatrick</h6>',
		},
		{ // 16
			coords: {lat:42.990784,lng:-81.220337},
			content: '<h1 id="inWindowTitle">William (Bill) Lishman, (1939-2017) 1967 – Sheep, Pig and Steer</h1>',
		},
		{ // 17
			coords: {lat:42.990784,lng:-81.220337},
			content: '<h1 id="inWindowTitle">William (Bill) Lishman, (1939-2017) 1968 – Turkey Bill Lishman AKA “Father Goose”</h1><hr><h6 id="inWindowName">is a naturalist known for teaching Canada Geese to fly south. His work includes 2 award winning films and numerous works of public art, including an 86 foot high sculpture for Expo ’86 in Vancouver. Western Fair chose to display the turkey, sheep, pig and steer in a public setting within the Old East Village community to reflect the agricultural roots & heritage of the Association.</h6>',
		},
	];

	// Loop through markers
	for(var i = 0;i < markers.length;i++) {
		addMarker(markers[i]);
	}

  	// Add Marker Function
	function addMarker(props){
		count++;

		// var icon = {
		// 	url: "images/df.png",
		//     scaledSize: new google.maps.Size(40, 40),
		//     origin: new google.maps.Point(0,0),
		//     anchor: new google.maps.Point(0, 0),
		// };

		var marker = new google.maps.Marker({
			position:props.coords,
			map:map,
			label: {text: count.toString(),color: "white"}
			// icon:icon
		});

		if(props.iconImage){
			marker.setIcon(props.iconImage);
		}

		if(props.animation){
			animation: props.animation;
		}

		if(props.content){
			var infoWindow = new google.maps.InfoWindow({
			content:props.content
			});

			marker.addListener('click', function(){
				infoWindow.open(map, marker);
				// setTimeout(function(){
				// 	infoWindow.close();
				// }, 6000);
			});
		}
	}
}