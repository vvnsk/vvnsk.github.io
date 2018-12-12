$(document).ready(function() {
	$("a").filter(function(i,v){ return $(v).attr("href").indexOf("hosting")>=0}).hide()
    $(".parallax-container").height($(window).height() * 0.5);
    $(".mainSection").height($(window).height());
	if($('window').width()>992){
		$("li.logo").height($(window).height() * 0.5 - 42);
	}


    $('.parallax').parallax();
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: function() {
            return $('window').width() < 992
        } // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $("#typed").typed({
        strings: ["a Web Developer.", "a Data Analyst.", "SK !"],
        typeSpeed: 30,
        backDelay: 15,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
    });
    $(".scrollRef").click(function() {
        $('html,body').animate({
            scrollTop: $("#" + $(this).attr("data-scrollTarget")).offset().top
        }, 500);
		if($('window').width()<992){
			$('.button-collapse').sideNav('hide');
		}
		
    });
    $('.materialboxed').materialbox();
});