	$(document).ready(function() {
		
		$(".fadeInLeft").show(2000);

	});


	// <!-- Color when selected in the header tab -->
	$("#headerTabs li a").click(function (){
		
		$("#headerTabs").find("li.active").removeClass("active");
		$(this).parent("li").addClass("active");

	});


	// <!-- Auto position center -->
	var headerHeight = $("#welcomePage").height();
	$(".name").css("padding-top", headerHeight / 2 + "px");


	// <!-- Fade animation when scroll down -->
	$(window).scroll(function() {

		var window_scroll_top = $(this).scrollTop();
		var bottom_of_win = window_scroll_top + $(window).height();
		<!-- alert(window_scroll_top); -->
		$(".fade").each(function(i) {
		
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			
			if (bottom_of_win > bottom_of_object) {
				
				$(this).animate({
					opacity : '1'
				}, 1500);
				
				
			} 
			
		});

		
		var first_section_height = $("#about").outerHeight();
		if (window_scroll_top > first_section_height) {
			$(".navbar").css("background-image", "url(images/galaxy.jpg)");
		} else {
			$(".navbar").css("background-image", "");
		}
		
		
		
		var sections = $(".sections");
		sections.each(function(i) {
			var section_id = "#" + $(this).attr("id");
			<!-- var section_height =  $(this).position().top + $(section_id).outerHeight(); -->
			<!-- var section_height = $(section_id).offset().top ; -->
			var top = $(this).offset().top - $('nav').outerHeight();
			var bottom = top + $(this).outerHeight();
			
			if (window_scroll_top >= top && window_scroll_top <= bottom) {
					
				$("#headerTabs li a").each(function() {
					var id = $(this).attr("href");
					if (id == section_id) {
						$("#headerTabs").find("li.active").removeClass("active");
						$(this).parent("li").addClass("active");
					}
				});
				
				
			} 
			
		});

	});




	$(".language_hover").hover(function() {
		
		$(this).css("background-color", "#F2F2F2");
		$(this).css("cursor", "pointer");
		
	}, function() {
		$(this).css("background-color", "");
	});