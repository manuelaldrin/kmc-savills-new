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

			$('.video-link').magnificPopup({
		      type:'inline',
		      midClick: true
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
			  slidesToShow: 4, 
			  slidesToScroll: 1, 
			  arrows: true, 
			  autoplay: true, 
			  autoplaySpeed: 7500,
			  speed: 1000,
			  dots: false,
			  responsive: [
			    {
			      breakpoint: 1199,
			      settings: {
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 2
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
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
			  slidesToShow: 7, 
			  slidesToScroll: 1, 
			  arrows: false, 
			  autoplay: true, 
			  autoplaySpeed: 3500,
			  speed: 2000,
			  dots: false,
			  centerMode: true,
			  responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 1
			      }
			    }
			   ]
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

		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();
		    if (scroll > 10) {
		        $(".header-wrap").addClass("fh");
		    }
		}); //missing );

		$('.mobile-menu').click(function(e){
	    e.preventDefault();
	        $('.mobile-nav-wrap').slideToggle("slow");
	    });

	    $('.header-contact-btn a').click(function(e){
	    	e.preventDefault();
	        $("html, body").animate({ 
	          scrollTop: $('.contact-wrap').offset().top - 74
	        }, "slow"); 
	    })

	    $(window).scroll(function() {
	          if ($(this).scrollTop() > 150) {        
	              $('#return-to-top').fadeIn(200);   
	          } else {
	              $('#return-to-top').fadeOut(200);  
	          }
	      });
	      $('#return-to-top,  .contact-form a').click(function() {     
	          $('body,html').animate({
	              scrollTop : 0       
	          }, 500);
	      });

	});

	$(window).load(function () { 
		
		  // $.instagramFeed({
		  //   'username': 'kmcsavills',
		  //   'container': "#instagram-feed-demo",
		  //   'items': 8,
		  //   'margin': 0.5,
		  //   'display_gallery': true,
		  //   'items_per_row': 4,
		  //   'display_profile': false,
		  //   'display_biography': false

		  // });
		
	});

	$(window).resize(function () { 

	});
	
})(jQuery);


