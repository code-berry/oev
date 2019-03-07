<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$option = 'Mail from OEV.com';
	$msgbody = $_POST['msgbody'];

	$mailto = 'info@oldeastvillage.com';
	$headers = 'From: '.$email;


	mail($mailto, $option, $msgbody, $headers);
	header('Location: index.html?emailsuccess');
}
