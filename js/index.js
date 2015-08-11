
$('#name:first').hide();
$('#description:first').hide();
$('#hire:first').hide();

function start() {
	$('#name:first').fadeIn(4000, function() {
		$('#description:first').fadeIn(3000, function() {
			$('#hire:first').fadeIn(2000, pulse);
		});
	});
}


function pulse() {
	$(this).animate({fontSize: '3.5em'}, 'fast', 'swing', function() {
		$(this).animate({fontSize: '2.5em'}, 'fast', 'swing', function() {
			$(this).animate({fontSize: '3.5em'}, 'fast', 'swing', function() {
				$(this).animate({fontSize: '2.5em'}, 'fast', 'swing');
			});
		});
	});
}

function moveText() {
	//$('#name').animate({left: '1075px', top: '500px'}, 'slow', 'swing');
	$('#name').addClass('landing-text');
	//$('#description').animate({left: '1250px', top: '590px'}, 'slow', 'swing');
	$('#description').addClass('landing-text');
	//$('#hire').animate({left: '1250px', top: '610px'}, 'slow', 'swing');
	$('#hire').addClass('landing-text');
}

function animClick() {
	
}

$(document).ready(start);