// $(function(){$(".typing-message").typed({strings:[pageVars.typingMessage],typeSpeed:10,contentType:"html",showCursor:!1})}),

$(document).ready(function(){
    
	var clickEvent = false;
	$('#home-carousel').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
})

$(window).load(function() {
    var boxheight = $('#home-carousel .carousel-inner').innerHeight();
    var itemlength = $('#home-carousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
	$('#home-carousel .list-group-item').outerHeight(triggerheight);
});

toggleSidebar = (function() {
	$('.blog-main').toggleClass('col-lg-8');
	$('.blog-sidebar').toggle();
})
