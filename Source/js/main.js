/*function showMiles(){
    
var totalGallons=200; //total Gallons
var milesPerGallon=16; //miles per Gallon
//var gallonsUsed; //gallons Used

    alert ("You have used " + totalGallons/milesPerGallon + " gallons of fuel");
    
}*/

/*global $
$(document).ready(function () {
    $(".carousel").carousel();
    
    $('.carousel').carousel({
      interval: 2000
    })
    
      $(document).ready(function () {
    $('.carousel').carousel({
        interval: 3100,
        pause:null
    });
    
    $('.carousel').carousel('cycle');
    });
    
    $(".carousel-control-prev").click(function(){
    $("#carouselExampleIndicators").carousel("prev")
    });
    
    $(".carousel-control-next").click(function(){
    $("#carouselExampleIndicators").carousel("prev")    
    });
});


function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();
*/

$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});
}).scroll();