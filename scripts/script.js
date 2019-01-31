( function($) {

	var app =  {

		init: function(){
			this.browserDetector();
			this.magnificPopUpFunction();
			this.slickFunction();
		},

		browserDetector: function(){
			var browserName = bowser.name; 
			var browserNameLowerCase = browserName.toLowerCase();
			var browserNameTrim = browserNameLowerCase.replace(/\s+/g, '');
			$('html').addClass(browserNameTrim);
		},

		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		},

		slickFunction: function(){
  
			// $('.slideshow-holder').slick({
			//   infinite: true, 
			//   slidesToShow: 1, 
			//   slidesToScroll: 1, 
			//   arrows: false, 
			//   autoplay: true, 
			//   fade: true,
			//   autoplaySpeed: 5500, 
			//   dots: false,
			//   cssEase: 'linear',
			//   speed: 1500,
			//   asNavFor: '.tagline-holder'
			// });

			// $('.tagline-holder').slick({
			//   infinite: true, 
			//   slidesToShow: 1, 
			//   slidesToScroll: 1, 
			//   arrows: true, 
			//   autoplay: true, 
			//   fade: true,
			//   autoplaySpeed: 5500, 
			//   dots: false,
			//   cssEase: 'linear',
			//   speed: 500,
			//   asNavFor: '.slideshow-holder',
			//   appendArrows: $('.tagline-btns')
			// });

			$('.featprop-holder').slick({
			  infinite: true,
			  slidesToShow: 5, 
			  slidesToScroll: 1, 
			  arrows: true, 
			  autoplay: true, 
			  autoplaySpeed: 7500,
			  speed: 1000,
			  dots: false
			});


			// $('.testimonials-holder').slick({
			//   infinite: true,
			//   slidesToShow: 1, 
			//   slidesToScroll: 1, 
			//   arrows: false, 
			//   autoplay: true, 
			//   autoplaySpeed: 7500,
			//   speed: 1000,
			//   dots: true
			// });

			$('.clients-holder').slick({
			  infinite: true,
			  slidesToShow: 5, 
			  slidesToScroll: 1, 
			  arrows: false, 
			  autoplay: true, 
			  autoplaySpeed: 3500,
			  speed: 2000,
			  dots: false,
			  centerMode: true
			});

			// $('.membership-client-holder').slick({
			//   infinite: true,
			//   slidesToShow: 5, 
			//   slidesToScroll: 1, 
			//   arrows: false, 
			//   autoplay: true, 
			//   autoplaySpeed: 3500,
			//   speed: 1000,
			//   dots: false
			// });


			// $('.team-holder').slick({
			//   infinite: true,
			//   slidesToShow: 4, 
			//   slidesToScroll: 1, 
			//   arrows: false,
			//   autoplay: true, 
			//   autoplaySpeed: 3500,
			//   speed: 1000,
			//   dots: false
			// });

		}

	} 

	$(document).ready( function() {
		app.init();

		$('.search-btn a').click(function(){
			$('body').addClass('primary-nav-open');
			$('.search-wrap').slideDown();
		})

	});

	$(window).load(function () { 
		
	});

	$(window).resize(function () { 

	});
	
})(jQuery);


