

<?

$send_to = "justin@justingoldsmith.net";
$name = $_POST["name"];
$age = $_POST["age"];
$send_from = $_POST["email"];
$subject = "Sent from html form";
$mail_body = "Message sent from $name. Age: $age.\n"
			"Sender e-mail: $email\n"
			"Message: $message".

$confirm = "<p>Your email has been sent.</p>";

if($_POST["message"]) {
	mail($send_to, $subject, $message, "From: $email");
}

?>

<!DOCTYPE HTML>
<html>
<body>
	
	<form method="post" action="learn.php">
		<fieldset>Name:<input type="text" name="name"></fieldset>
		<fieldset><input type="text" name="age"></fieldset>
		<fieldset><input type="text" name="email"></fieldset>
		<fieldset><input type="text" name="message"></fieldset>
		<input type="submit" name="submit">
	</form>	


</body>
</html>