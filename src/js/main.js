$(document).ready(function() {

	//main screen

	$(window).on('load resize', function(){
		if($(window).height() > 806) {
			$('.main_screen').height($(window).height());
			$('.main_screen').css({
				'background-repeat': 'no-repeat',
				'background-size': 'cover',
			});
		}
	})




	//	mobile button menu
	$('.mobile-menu').click(function() {
		$(this).toggleClass('active');
	});

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'libs/particles.json', function() {
	  
	});	
	particlesJS.load('particles-js-partnership', 'libs/particlesjs-config-last.json', function() {
	  
	});	

	particlesJS.load('particles-js-submition', 'libs/particles.json', function() {
	  
	});	

	
	$(window).on('load resize', function(){
		var titleImgWidth = $('.title img').width();
		$('.main_screen .offert').css('max-width', titleImgWidth);	
	})

	new WOW().init();

	$( "#c_n_1" ).hover(
	  function() {
	    $('.flag_6').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_6').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_2" ).hover(
	  function() {
	    $('.flag_8').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_8').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);		

	$( "#c_n_3" ).hover(
	  function() {
	    $('.flag_7').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_7').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_4" ).hover(
	  function() {
	    $('.flag_1').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_1').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_5" ).hover(
	  function() {
	    $('.flag_10').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_10').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);		

	$( "#c_n_6" ).hover(
	  function() {
	    $('.flag_4').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_4').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_7" ).hover(
	  function() {
	    $('.flag_9').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_9').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_8" ).hover(
	  function() {
	    $('.flag_12').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_12').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	


	$( "#c_n_9" ).hover(
	  function() {
	    $('.flag_3').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_3').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_10" ).hover(
	  function() {
	    $('.flag_5').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_5').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_11" ).hover(
	  function() {
	    $('.flag_2').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)',
	    	'z-index': '99'
	    });
	  }, function() {
	    $('.flag_2').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)',
	    	'z-index': '0'
	    });
	  }
	);	


	$( "#c_n_12" ).hover(
	  function() {
	    $('.flag_11').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)',
	    	'z-index': '99'
	    });
	  }, function() {
	    $('.flag_11').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)',
	    	'z-index': '0'
	    });
	  }
	);		

smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 1500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeOutQuart', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});

$('.open-popup').magnificPopup({
	type:'inline',
	removalDelay: 500,
	midClick: true,
	mainClass: 'mfp-with-zoom',
	zoom: {
		enabled: true,
		duration: 300,
		easing: 'ease-in-out',
	}
});

// validation

	$("#request-popup").validate({
		rules:{
			name:{
				required: true,
				minlength: 2
			},
			password:{
				required: true,
				minlength: 5
			},
			'second-name': {
				required: true,
				minlength: 2
			},
			login: {
				required: true,
				minlength: 2
			},
			wmr: {
				required: true,
				minlength: 2	
			},
			email:{
				required: true
			},
			'password-again': {
				equalTo: "#password"
			}
		},
		messages:{
			name:{
				required: "Это поле обязательно для заполнения",
				minlength: jQuery.validator.format("Введите, как минимум, два символа")
			},
			'second-name': {
				required: "Это поле обязательно для заполнения",
				minlength: jQuery.validator.format("Введите, как минимум, два символа")
			},
			login:{
				required: "Это поле обязательно для заполнения",
				minlength: jQuery.validator.format("Введите, как минимум, два символа")
			},
			email: {
				required: "Это поле обязательно для заполнения",
				minlength: jQuery.validator.format("Введите, как минимум, два символа"),
				email: 'Email должен содержать символ "@" а также имя доменной зоны'
			},
			wmr: {
				required: "Это поле обязательно для заполнения",
				minlength: jQuery.validator.format("Введите, как минимум, два символа")
			},						
			password:{
				required: "Это поле обязательно для заполнения",
				minlength: jQuery.validator.format("Пароль должен содержать не менее 5-ти символов")
			},
			'password-again': {
				equalTo: "Пароли не совпадают"
			}			
  		}		    		
		    
	});

	$("#enter-popup").validate({
		rules:{
			login:{
				required: true,
				minlength: 2
			},
			password:{
				required: true,
				minlength: 5
			}
		},
		messages:{
			login:{
				required: "Это поле обязательно для заполнения",
				minlength: jQuery.validator.format("Введите, как минимум, два символа")
			},
			password:{
				required: "Это поле обязательно для заполнения",
				minlength: jQuery.validator.format("Хм.. с таким коротким паролем тебя быстро взломают")
			}
  		}		    		
		    
	});

});