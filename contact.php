<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Old East Village - Art Crawl</title>
	<!-- Adding our stylesheets, fonts & js -->
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<script src="js/jquery.js"></script>
	<script src="js/bootstrap.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Caveat|Roboto+Mono|Exo:800|PT+Sans:400,700" rel="stylesheet">
		<link rel="stylesheet" href="assets/fontello/css/fontello.css">
</head>
<body>

<div id="footer-top">
	<img src="images/oev.png">
</div>

<nav class="navbar navbar-expand-lg navbar-light navblue">
	<button class="mr-auto phone-head"><i class="icon icon-phone"></i></button>
	<button class="ml-auto navbar-toggler toggle-close" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<!-- <span class="navbar-toggler-icon"></span> -->
		<i id="hider-icon" class="icon icon-menu"></i>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
    	<ul class="altnav index-nav navbar-nav ml-auto float-right">
      	<li class="nav-item">
			<a href="index.html">Home</a>
		</li>
		<li class="nav-item dropdown">
			<a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" href="about.html">About Us</a>
				<a class="dropdown-item" href="history.html">Our History</a>
				<a class="dropdown-item" href="board.html">Board of Directors</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="assets/areamap.pdf">Area Map</a>
			</div>
		</li>
		<li class="nav-item dropdown">
			<a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Businesses</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" href="businesses.html">Business Contact List</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="map.html">Business Directory</a>
			</div>
		</li>
		<li class="nav-item dropdown">
			<a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Support</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" href="development.html">Development Incentives</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="urban.html">OEV Urban Design</a>
				<a class="dropdown-item" href="bba.html">Beautiful Building Awards</a>
			</div>
		</li>
		<li class="nav-item dropdown">
			<a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Events</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" href="simon.html">Simon Shegelman</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="artcrawl.html"><i>Art Crawl 2019</i></a>
			</div>
		</li>
		<li class="nav-item active">
			<a href="contact.php">Contact</a>
		</li>
    </ul>
    <img src="images/oevn.png" class="classic-logo" alt="">
  </div>
</nav>


<div class="container-fluid" id="contact-bg1">
	<div class="border border-secondary" id="contact-inner1">
		<h1>Contact Us!</h1>
		<h6>316 Rectory St, 3<sup>rd</sup> Floor<br>London, ON N5X3V6<br>519-645-7662</h6>
		<hr>
		<div class="row" id="contact-row">
			<div class="col-md-6">
				<form id="contact-form" action="contactform.php" method="POST">
					<input placeholder="Your name" type="text" name="name">
					<input placeholder="Your email" type="email" name="email">
					<textarea name="msgbody" placeholder="What's on your mind?"></textarea>
					<br>
					<input type="submit">
				</form>
			</div>
			<div class="col-md-6">
				<div class="map2height" id="map"></div>
			</div>
		</div>
	</div>
</div>


<div class="footer">
	<div class="row" id="footrow">
		<div class="col-md-4">
			<h3>Navigation</h3>
			<ul class="inlineul">
				<li><a href="index.html">Home</a></li>
				<li><a href="about.html">About Us</a></li>
				<li><a href="businesses.html">Businesses</a></li>
				<li><a href="development.html">Development & Incentives</a></li>
				<li><a href="contact.php">Contact Us</a></li>
			</ul>
		</div>
		<div class="col-md-4">
			<h3>Quick Links</h3>
			<ul class="inlineul">
				<li><a href="board.html">Board of Directors</a></li>
				<li><a href="#">Area Map</a></li>
				<li><a href="#">OEV Urban Design</a></li>
				<li><a href="#">Beautiful Building Awards</a></li>
				<li><a href="#">Simon Shegelman's Art</a></li>
			</ul>
		</div>
		<div class="col-md-4">
			<h3>Blog</h3>
			<ul class="inlineul">
				<li><a href="#">Link 1</a></li>
				<li><a href="#">Link 2</a></li>
				<li><a href="#">Link 3</a></li>
				<li><a href="#">Link 4</a></li>
				<li><a href="#">Link 5</a></li>
			</ul>
		</div>
	</div>
	<h6>Copyright 2019 &copy; Old East Village | <a href="https://www.codeberry.ca/">Designed by Codeberry</a>
	<a class="hvr-wobble-vertical" href="https://www.codeberry.ca"><img src="images/cblogo.png" class="codeberry"></a>
</div>


<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3ms5tEjnjWuTxW7RErt16X7IemGIN6DE&callback=initMap">
</script>
<script src="js/contact.js"></script>


</body>
</html>