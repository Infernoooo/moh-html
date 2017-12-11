$(function() {

		$(document).foundation();

		$('.register-here').click(function(e) {
				e.preventDefault();
				var element_to_scroll_to = $('.register-for-this-event')[0];
				element_to_scroll_to.scrollIntoView();
		});

		$('.home1').slick({
			  infinite: true,
			  speed: 300,
				autoplay: true,
				arrows: true,
				prevArrow: '<img class="slick-left" src="img/slider-arrow-left.png" />',
				nextArrow: '<img class="slick-right" src="img/slider-arrow-right.png" />',
			  slidesToShow: 1,
			  adaptiveHeight: true,
			  dots: true
		});

		$('.overseas2').slick({
			  infinite: true,
			  speed: 300,
				autoplay: true,
			  slidesToShow: 1,
			  adaptiveHeight: true,
			  dots: true
		});
		$('.searchshow').hide();

		$('.mobile-search').click(function() {
				$('.searchshow').slideDown(300);
		});

		$(document).on('click', '.mobile-test', function(e) {
				alert("Test");
		});

		$('.searchshow .close').click(function() {
				$('.searchshow').slideUp(300);
		});

		$('.home2').tabs();
		$('.embassies2').tabs();
		$('.services').tabs();

		$( "#accordion" ).accordion({
				collapsible: true,
				heightStyle: "content"
		});

		$( "#accordion2" ).accordion({
				collapsible: true,
				heightStyle: "content"
		});

		$( "#accordion3" ).accordion({
				collapsible: true,
				heightStyle: "content"
		});

		$(document).on('click', '.submenu a', function(e) {
				e.preventDefault();
				if ($(this).hasClass('active')) {
						$(this).removeClass('active');
						$(this).parent().children('.subcontent').slideUp(300);
						$(this).children('span').html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
				} else {
						$(this).addClass('active');
						$(this).parent().children('.subcontent').slideDown(300);
						$(this).children('span').html('<i class="fa fa-chevron-down" aria-hidden="true"></i>');
				}
		});

		$('.gallery-row').slick({
			  infinite: true,
			  speed: 300,
				autoplay: true,
				arrows: true,
				prevArrow: '<img class="slick-left" src="img/black-left-arrow.png" />',
				nextArrow: '<img class="slick-right" src="img/black-right-arrow.png" />',
			  slidesToShow: 3,
			  adaptiveHeight: true,
			  responsive: [
			  	{
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2
			      }
			    },
			    {
			      breakpoint: 668,
			      settings: {
			        slidesToShow: 1,
			      }
			    },
			  ]
		});

		$('.fancybox-media').click(function(e) {
				e.preventDefault();
		});

		/* FANCYBOX VIDEO */
		$(".fancybox-media").fancybox({
				openEffect  : 'none',
				closeEffect : 'none',
				helpers : {
					media : {},
					overlay: {
						locked: false
					}
				},
				padding : 0,
				margin: 0
		});

		$(".gallery-view").fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {},
				overlay: {
					locked: false
				}
			},
			padding : 0,
			margin: 0
		});

		$(document).on('click', '.list-view', function(e) {
				e.preventDefault();
				if ($(this).hasClass('active')) {
						console.log("Test");
				} else {
						$(this).addClass('active');
						$('.map-view').removeClass('active');
						$('.map-view-content').hide();
						$('.map').hide();
						$('.list-view-content').show();
				}
		});

		$('.embassy-dropdown-content').hide();
		$('.map').hide();

		$(document).on('click', '.map-view', function(e) {
				e.preventDefault();
				if ($(this).hasClass('active')) {
						console.log("Test 2");
				} else {
						$(this).addClass('active');
						$('.list-view').removeClass('active');
						$('.list-view-content').hide();
						$('.map-view-content').show();
						$('.map').show();
				}
		});

		// List Map 2

		$(document).on('click', '.list-view2', function(e) {
				e.preventDefault();
				if ($(this).hasClass('active')) {
						console.log("Test");
				} else {
						$(this).addClass('active');
						$('.map-view2').removeClass('active');
						$('.map-view-content2').hide();
						$('.map2').hide();
						$('.list-view-content2').show();
				}
		});

		$('.map2').hide();

		$(document).on('click', '.map-view2', function(e) {
				e.preventDefault();
				if ($(this).hasClass('active')) {
						console.log("Test 2");
				} else {
						$(this).addClass('active');
						$('.list-view2').removeClass('active');
						$('.list-view-content2').hide();
						$('.map-view-content2').show();
						$('.map2').show();
				}
		});

		$(document).on('click', '.embassy-dropdown', function(e) {
				e.preventDefault();
				if ( $('.embassy-dropdown').hasClass('active') ) {

						$('.embassy-dropdown').removeClass('active');
						$('.embassy-dropdown-content').hide();
						$('.embassy-dropdown .float-right').html('<i class="fa fa-plus" aria-hidden="true"></i>');

				} else {
						$('.embassy-dropdown').addClass('active');
						$('.embassy-dropdown-content').show();
						$('.embassy-dropdown .float-right').html('<i class="fa fa-minus" aria-hidden="true"></i>');
				}
		});

		$('#expanding-search').focus(function() {
				$(this).addClass('expanded');
				$('.font-size').fadeOut(300);
		}).blur(function() {
			$(this).removeClass('expanded');
			$('.font-size').fadeIn(300);
		});

		// Search keyword
		$(document).on('click', '.search-keyword', function(e) {
				e.preventDefault();

				$('.filter-category').removeClass('active');
				$('.filter-date').removeClass('active');

				$('.con-details').each(function() {
						$(this).hide();
				});

				if ($(this).hasClass('active')) {
						$(this).removeClass('active');
						$(this).parent().children('.con-details').hide();
				} else {
						$(this).addClass('active');
						$(this).parent().children('.con-details').show();
				}
		});

		// Filter Category
		$(document).on('click', '.filter-category', function(e) {
				e.preventDefault();

				$('.search-keyword').removeClass('active');
				$('.filter-date').removeClass('active');

				$('.con-details').each(function() {
						$(this).hide();
				});

				if ($(this).hasClass('active')) {
						$(this).removeClass('active');
						$(this).parent().children('.con-details').hide();
				} else {
						$(this).addClass('active');
						$(this).parent().children('.con-details').show();
				}
		});

		// Filter Date
		$(document).on('click', '.filter-date', function(e) {
				e.preventDefault();

				$('.search-keyword').removeClass('active');
				$('.filter-category').removeClass('active');

				$('.con-details').each(function() {
						$(this).hide();
				});

				if ($(this).hasClass('active')) {
						$(this).removeClass('active');
						$(this).parent().children('.con-details').hide();
				} else {
						$(this).addClass('active');
						$(this).parent().children('.con-details').show();
				}
		});

		$('#startdate').datepicker();
		$('#enddate').datepicker();

		//remove the menu with color red or with class pagelinks
		$("a.pagelink").parent().remove();


});
