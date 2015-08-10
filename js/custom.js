(function($){

$(document).ready(function(){
													 
// ---------------------------------------------------------
// Tabs
// ---------------------------------------------------------
$(".tabs").each(function(){

		$(this).find(".tab").hide();
		$(this).find(".tab-menu li:first a").addClass("active").show();
		$(this).find(".tab:first").show();

});

$(".tabs").each(function(){

		$(this).find(".tab-menu a").click(function() {

				$(this).parent().parent().find("a").removeClass("active");
				$(this).addClass("active");
				$(this).parent().parent().parent().parent().find(".tab").hide();
				var activeTab = $(this).attr("href");
				$(activeTab).fadeIn();
				return false;

		});

});


// ---------------------------------------------------------
// Toggle
// ---------------------------------------------------------

$(".toggle").each(function(){

		$(this).find(".box").hide();

});

$(".toggle").each(function(){

		$(this).find(".trigger").click(function() {

				$(this).toggleClass("active").next().stop(true, true).slideToggle("normal");

				return false;

		});

});



$(".recent-posts.team li:nth-child(3n)").addClass("nomargin");



// prettyphoto init
$("a[rel^='prettyPhoto']").prettyPhoto({
	animation_speed:'normal',
	slideshow:5000,
	autoplay_slideshow: false,
	overlay_gallery: true
});


/***************** IZOTOPE PORTFOLIO *******/

var container = $('.isotope'),
    filterLinks = $('#filter-by a');

	filterLinks.click(function(e){
	    var selector = $(this).attr('data-filter');
	    container.isotope({
	        filter : '.' + selector,
	        itemSelector : '.isotope-item',
	        layoutMode : 'fitRows',
	        animationEngine : 'best-available'
    });

    filterLinks.removeClass('active');
    $('#filter-by li').removeClass('current-cat');
    $(this).addClass('active');
    e.preventDefault();
});



// ---------------------------------------------------------
// Back to Top
// ---------------------------------------------------------

// fade in #back-top
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('#back-top a').click(function () {
		$('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});


/* ----------------------- ------------- USFULL ADDONS ------ ------------------ */

$('.breadcrumb li a').each(function(){
	var th = $(this);
	if (th.text()=='Uncategorized') {
		th.parent().parent().remove();
	}
});



$('#content article:first, #content article:first').addClass('first');
$('.single-post #content article').addClass('clearfix');
$('#topnav > li:last').addClass('last');

$('#topnav .sub-menu li').each(function(){
	var temp1 = $(this).find('ul');
	if (temp1.length > 0) $(this).addClass('hasChildren');
});

$('#home-content div[id*="advanced-recent-posts"]').addClass('clearfix');
$('#searchform input[type="text"]').attr('placeholder', 'Search');

$('.single-portfolio').each(function(){
	var temp1 = $(this).find('.grid_gallery');
	var temp2 = $(this).find('.two_third');
	if (temp1.length > 0) temp2.addClass('has_grid_gallery');
});

$('.search-results #content article.post-holder, .blog #content article.post-holder, .archive #content article.post-holder, .author #content article.post-holder').each(function(){
	var tempImage = $(this).find('.featured-thumbnail');
	if (tempImage.length == 0) $(this).find('.post-content').css({paddingLeft: '0'});
});

if ($('.pagination').length < 2) { $('.pagination').css({display: 'none'}); }
if ($('.pagenavi').length>0) {  $('.pagenavi').fadeIn(1000); }

/*******/

$('ul.star').each(function(){
	var tt = $(this).find('li');
	for (var i = tt.length - 1; i >= 0; i--) {
		var tx = '<span class="count">'+(i+1)+'</span>'; 	
		$(tt[i]).append(tx);
	};
});

/******/

$('.recent-posts.staff .recentInner').carouFredSel({
    prev: '#prev1',
    next: '#next1',
    scroll : {
            items           : 1,
            easing          : "easeOutCirc",
            duration        : 500,                        
            pauseOnHover    : true
        },
    auto: { play:false }            
});


$('.recent-post-item').addClass('clearfix');

$("body").on('mouseover', '.wpcf7-not-valid-tip',function(){ $(this).remove(); });

$.fn.equalHeights = function() {
    var heights = []; 
    this.each(function(){  heights.push($(this).height());  });

    var maxHeight = Math.max.apply(0, heights);
    this.height(maxHeight);
}

window.onload = function(){

	$('#carouselArea > div').css({opacity: '1'});
	$('#carouselArea').css({background: 'none'});
	//$('.list_carousel li .excerpt').equalHeights();
	$('#main .bannerBox h3').equalHeights();

	$('.breadcrumb').animate({opacity:'1'}, 400);
}

/* ----------------------- ------------- END OF USFULL ADDONS ------ ------------------ */

/* ----------------------- -------------------------------- ------------------ */
/* ----------------------- -------------- CURRENT TEMPLATE ------------ ------------------ */
/* ----------------------- -------------------------------- ------------------ */

	var thWidthInput = 0;

	$('#header #searchform input[type="text"]').focusin(function(){
		thWidthInput = $(this).width();
		$(this).animate({width:'410px'}, 300);
		if (document.body.clientWidth>=768) {}
		else {
			$(this).parent().animate({width:'238px'}, 300);
		}
	});

	$('#header #searchform input[type="text"]').focusout(function(){
		$(this).animate({width: thWidthInput+'px'}, 300);
		if (document.body.clientWidth>=768) {}
		else {
			$(this).parent().animate({width: '142px'}, 300);
		}
	});


	jQuery('#topnav > li > a, #menu-right-menu > li > a, #menu-left-menu > li > a ').each(function(){
		var tempThis = jQuery(this);
		var tempThisIMG = tempThis.find('img');
		var tempSpan = tempThis.find('.page-title');
		var tempMouseOut = tempThis.find('img').attr('onmouseout');
		var tempMouseover = tempThis.find('img').attr('onmouseover');
		
		tempThis.append('<div class="front" />');
		tempThis.append('<div class="back" />');
		tempThis.find('.front').append(tempThisIMG);
		tempThis.find('.front').append(tempSpan);

		var res = tempMouseOut.split(/'/);
		tempThis.append('<img class="imgOut">');
		tempThis.find('img.imgOut').attr('src',res[1]);

		var res2 = tempMouseover.split(/'/);
		tempThis.find('.back').append('<img class="imgOver">');
		tempThis.find('img.imgOver').attr('src',res2[1]);

		tempThisIMG.attr('onmouseout', '').attr('onmouseover', '');
	});





/**************************/

window.onresize = res;
function res(){

	$("#main .bannerBox h3").css({height: 'auto'});

	//$('.list_carousel li .excerpt').equalHeights();
	$('#main .bannerBox h3').equalHeights();

}

/*  ******************* END OF FILE***************************/
});


})(jQuery);
