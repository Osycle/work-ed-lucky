/*
 * Copyright (c) 2017 ThemeMarket
 * Author: ThemeMarket
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	
	
	// here all ready functions
	
	estel_tm_hamburger();
	//estel_tm_imgtosvg();
	estel_tm_magnific_popup();
	estel_tm_jarallax();
	estel_tm_portfolio();
	estel_tm_portfolio_animation();
	estel_tm_nav_bg_scroll();
	estel_tm_anchor();
	estel_tm_contact_form();
	estel_tm_owl_carousel();
	estel_tm_text_animation();
	estel_tm_animate_text();
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();

		estel_tm_nav_bg_scroll();
	});
	
	jQuery(window).on('resize',function(){
		
	});
	
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

/*function estel_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}*/

// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function estel_tm_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.estel_tm_mobile_menu_wrap');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function estel_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function estel_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function estel_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.estel_tm_portfolio_list');
		var filter		 = jQuery('.estel_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

function estel_tm_portfolio_animation(){
	
	"use strict";
	
	var list			= jQuery('.estel_tm_portfolio_list > li');
	
	list.each(function(){
		var el			= jQuery(this);
		var el2			= el.find('.list_inner');
		var image		= el.find('.image_wrap');
		var definition	= el.find('.definition_portfolio');
		var definitionH	= el.find('.definition_portfolio').outerHeight();
		
		el2.each(function(){
			var el3			= jQuery(this);
			el3.on('mouseenter',function(){
				image.css({top:-definitionH/2});
				definition.css({marginTop:-definitionH});
			}).on('mouseleave',function(){
				image.css({top:0});
				definition.css({marginTop:0});
			});
			
		});
	});
}



// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------

function estel_tm_nav_bg_scroll(){
	
	"use strict";
	
	var header 			= jQuery('.estel_tm_header');
	var windowScroll	= jQuery(window).scrollTop();
	var W				= jQuery(window).width();
	
	if(W>1040){
		jQuery(window).scroll(function(){
            if(windowScroll >= '100'){
                header.addClass('scroll');
            }
            else{
                header.removeClass('scroll');  
            }
        });
	} 
}

// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function estel_tm_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
	
	var scrollOffset = 0;
	
	jQuery(".anchor a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset-85 },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function estel_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function estel_tm_owl_carousel(){
	
	"use strict";
	
	var carusel2			= jQuery('.estel_tm_testimonial_wrap .owl-carousel');
  	carusel2.owlCarousel({
		loop:true,
		margin:70,
		autoplay:7000,
		autoWidth: false,
		nav: false,
		items:3,
		smartSpeed:5000,
		responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:3},
			1040:{items:3},
			1600:{items:3},
			1920:{items:3}
		}
	});
	
	var carusel3			= jQuery('.estel_tm_partners_wrap .owl-carousel');
  	carusel3.owlCarousel({
		loop:true,
		margin:40,
		autoplay:6000,
		autoWidth: false,
		nav: false,
		items:4,
		smartSpeed:3000,
		responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:3},
			1040:{items:4},
			1600:{items:4},
			1920:{items:4}
		}
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ---------------    HERO TEXT ANIATION  --------------
// -----------------------------------------------------

function estel_tm_text_animation(){
	
	"use strict";
	
	var H        						= jQuery(window).height();
	var titleHolder					= jQuery('.estel_tm_universal_box_wrap .hero_title, .estel_tm_universal_box_wrap .hero_form');
	var titleHolderOpacity	= jQuery('.estel_tm_universal_box_wrap .guitar_hero');
	var titleHeight					= titleHolder.outerHeight();
	var headerHeight				= jQuery('.estel_tm_header').outerHeight();
	
	var	height				= H/2 + titleHeight/2 - headerHeight;
	
	jQuery(window).on('scroll',function(){
		var window_offset = jQuery(window).scrollTop();
		titleHolder.css({opacity:1 - (window_offset/height), marginTop:(window_offset/height)*200});
		titleHolderOpacity.css({opacity:1 - (window_offset/height)});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function estel_tm_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.estel_tm_animation_text_word');
	
		animateSpan.typed({
			strings: ["GRAPHIC DESIGNER", "PHOTOGRAPHER", "WEB DEVELOPER"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}


$(document).ready(function () {
    
    $('[data-id=click]').click(function () {
    	
    		var li = $(this).closest("li").eq(0);
        var definition = li.find(".definition");

        li.siblings().find(".definition").slideUp(800)
        definition.slideToggle(800);
        	
      	li.siblings().addBack().removeClass("is-selected");
        li.addClass("is-selected");

        
    });
    
});



