
$('#name:first').hide();
$('#description:first').hide();
$('#hire:first').hide();
//$('#skills').hide();

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
	var scrollTo;

	$('a:p').click(function(e) {
		e.preventDefault();

		if(this === document.getElementById('name')){
			scrollTo = document.getElementById('about_me');
			scrollTo.scrollIntoView();
		}
		else if (this === document.getElementById('hire')){
			scrollTo = document.getElementById('my_skills');
			scrollTo.scrollIntoView();
		}
	});
}


function disableTextArea() {

	var textArea = document.getElementsByTagName('textarea')[0];
	textArea.disabled = true;

}
window.onload = disableTextArea;

$('#first').bind('keyup', enableTextArea);
$('#last').bind('keyup', enableTextArea);
$('#email').bind('keyup', enableTextArea);
$('#phone').bind('keyup', enableTextArea);


function enableTextArea() {

	if($('#first').val() != "" && $('#last').val() != "" && $('#email').val() != ""){
		$('#text_area').removeAttr('disabled');
	} else {
		$('#text_area').attr('disabled', true);
	}

}

$('#menu-down').click(function() {
  $('html,body').animate({scrollTop: $('#about_me').offset().top}, 1200);
});

$('#menu-down-2').click(function() {
	$('html,body').animate({scrollTop: $('#my_skills').offset().top}, 1200);
});

$('#glyphicon-skills-menu').click(function(){
  $('#skills').show(1000);
});



$(document).ready(start, enableTextArea);
