(function ($) {
	"use strict";
	var wind = $(window);
	var parallaxSlider;
	const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
	var parallaxSliderOptions = {
		speed: 3000,
		autoplay: {
			// delay: 4000,
			disableOnInteraction: false,
		},
		parallax: true,
		loop: true,
		grabCursor: false,
		on: {
			init: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					$(swiper.slides[i]).find('.bg-img').attr({
						'data-swiper-parallax': 1 * swiper.width
					});
				}
			},
			resize: function () {
				this.update();
			}
		},
		pagination: {
			el: '.slider-prlx .parallax-slider .swiper-pagination',
			dynamicBullets: true,
			clickable: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
	};
	parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);
	// Var Background image
	var pageSection = $(".bg-img, section");
	pageSection.each(function (indx) {
		if ($(this).attr("data-background")) {
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});
	var nav = $('nav');
	var navHeight = nav.outerHeight();
	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});

	// Navbar Menu Reduce 
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 70;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg').addClass('navbar-reduce');
			$('.navbar-expand-lg').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-lg').addClass('navbar-trans');
			$('.navbar-expand-lg').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});
	// Back to top button 
	$(function () {
		// Scroll Event
		$(window).on('scroll', function () {
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.back-to-top').addClass('active');
			if (scrolled < 300) $('.back-to-top').removeClass('active');
		});
		// Click Event
		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 500);
		});
	});
	//  Star Scrolling nav
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	
	//  Doctors owl
	$('#dotors-slide').owlCarousel({
		margin: 0,
		autoplay: true,
		autoplayTimeout: 6000,
		nav: true,
		smartSpeed: 6000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
        responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	
	
	// Testimonials owl
	$('#testimonial-slide').owlCarousel({
		loop: true,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
        1000 : {
            items: 2
        }
    }
	});

	$(function(){
		$(".owl-carousel").owlCarousel();        
	});

		// Menu of The Day Tab
		$('.menu-day-tab-list  li > a ').on('click', function (e) {
			e.preventDefault();
			var target = $(this).attr('href');
			$(this).closest('li').siblings('li').removeClass('active');
			$(this).closest('li').addClass('active');
			$(target).addClass('active');
			$(target).siblings('.menu-single-tab-content').removeClass('active');
		});

	// MagnificPopup 
	$('.gallery-container').magnificPopup({
		delegate: '.popimg',
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	// Porfolio isotope and filter
	$(window).on('load', function () {
		var galleryIsotope = $('.gallery-container').isotope({
			itemSelector: '.gallery-grid-item'
		});
		$('#gallery-flters li').on('click', function () {
			$("#gallery-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');
			galleryIsotope.isotope({
				filter: $(this).data('filter')
			});
		});
	});
	// WOW JS
	$(window).on('load', function () {
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: 'wow', // Animated element css class (default is wow)
				animateClass: 'animated', // Animation css class (default is animated)
				offset: 30, // Distance to the element when triggering the animation (default is 0)
				mobile: false, // Trigger animations on mobile devices (default is true)
				live: true, // Act on asynchronously loaded content (default is true)
			});
			wow.init();
		}
	});


	// Infographics
	var bubbleList = $('.bubble-container');
	const bubbleCount = bubbleList.length;
	const degStep = 180 / (bubbleCount - 1);
	
	$('.bubble-container').each((index) => {
	const deg = index * degStep;
	const invertDeg = deg * -1;    

		$(bubbleList[index]).css('transform', `rotate(${deg}deg)`);
		$(bubbleList[index]).css('opacity', `1`);
		$(bubbleList[index]).find('.bubble').css('transform', `rotate(${invertDeg}deg)`);
	}) 


	// Preloader Area
	jQuery(window).on('load', function () {
	  jQuery('.preloader').delay(500).fadeOut('slow');
	});
	
})(jQuery);