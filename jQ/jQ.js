$(document).ready(function(){	
	$("#open").click(function(){
		var burger = $(".wrapper-burger-menu");
		burger.slideDown(500);
	});

	$("#close").click(function(){
		var burger = $(".wrapper-burger-menu");
		burger.slideUp(500);
	});

	/*menu*/

		/*кнопка на верх*/
	$(function(){
		$('.top-button').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('.body').offset().top }, 1000);
		  e.preventDefault();
		});
	});

	/*preloder*/
	$(".dws-progress-bar").circularProgress({
        color: "#50c3af",
        line_width: 1,
        height: "350px",
        width: "350px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 25
    }).circularProgress('animate', 100, 2000);
});

$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(1800).fadeOut('slow');
});