
<!DOCTYPE HTML>

<html>
<head>
<title>Success</title>
<link rel="stylesheet" type="text/css" href="mailer.css">
</head>

<body>

<div id="main">
	<p>Your correspondance has been sent. I will be in touch very soon!</p>
	<p>Thank you!</p>
	<br>
	<br>
	<p>Redirecting in <span id="count">10</span></p>
</div>

<script type=text/javascript>
        var count = document.getElementById("count");
        
        function countdown() {
            if (parseInt(count.innerHTML) <= 1) {
                location.href = "index.php#my_skills";
            }
            count.innerHTML = parseInt(count.innerHTML)-1;
        }
        
        //setInterval(function(){ countdown()}, 1000);
</script>
</body>
</html>