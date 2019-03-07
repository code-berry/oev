var marker;

function initMap(){

	var options = {
		zoom: 15,
		center: {lat:42.987307,lng:-81.222210}
	}

	// New map
	var map = new google.maps.Map(document.getElementById('map2'), options);

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

	marker = new google.maps.Marker({
			position: {lat:42.987307,lng:-81.222210},
			map: map,
			// icon:icon
		});
}