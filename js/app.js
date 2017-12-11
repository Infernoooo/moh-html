$(function() {
		$(document).foundation();

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

		var elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'a', 'label', '.font-size', 'input', 'button', '.date', 'span', 'figcaption', '.search-filter'];
		var plusCounter = 0;
		var minusCounter = 0;

		function decreaseFont() {
				if (minusCounter < 1) {
		        for (i = 0; i < elements.length; i++) {
								var element = elements[i];
		            $('.body-content ' + element).each(function() {
		                var fontSize = $(this).css('font-size');
		                var res = parseInt(fontSize.substring(0, 2));
		                if (res >= 10 && !$(this).hasClass('no-fresize')) {
		                    $(this).css('font-size', (res - 2) + 'px');
		                }
		            });
		        }
		        --plusCounter;
		        ++minusCounter;
				}
		}

		function increaseFont() {
				if (plusCounter < 1) {
		        for (i = 0; i < elements.length; i++) {
		            var element = elements[i];
		            $('.body-content ' + element).each(function() {
		                var fontSize = $(this).css('font-size');
		                var res = parseInt(fontSize.substring(0, 2));

										if (!$(this).hasClass('no-fresize')) {
												$(this).css('font-size', (res + 2) + 'px');
										}
		            });
		        }
		        ++plusCounter;
		        --minusCounter;
				}
		}

		$('.decrease-font').on('click', function(e) {
				e.preventDefault();
				decreaseFont();
		});

		$('.increase-font').on('click', function(e) {
				e.preventDefault();
				increaseFont();
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
    
  $('.banner').slick({
			  infinite: true,
			  speed: 300,
				autoplay: true,
				arrows: true,
				prevArrow: '<img class="slick-left" src="img/arrow-left.png" />',
				nextArrow: '<img class="slick-right" src="img/arrow-right.png" />',
			  slidesToShow: 1,
			  adaptiveHeight: true,
			  dots: true
    });
    
    $('#public-tab').tabs();
 
   $('.select-container select').niceSelect();
    
        $(document).on('click', '.heart', function(e) {
              var $heart = $(this).find('i');
              if ($(this).hasClass('active')) {
                  $(this).removeClass('active');
                  $heart.removeClass('fa-heart');
                  $heart.addClass('fa-heart-o');
              } else {
                  $(this).addClass('active');
                  $heart.removeClass('fa-heart-o');
                  $heart.addClass('fa-heart');
              }
          });
    
    //GET RESULT FROM JSON
    var look_search = {
        url: "json/instant-search.json",
        getValue: "search1",
        list: {	
            match: {
              enabled: true
            },
            showAnimation: {
			type: "fade",
			time: 400,
			callback: function() {}
		   },

		   hideAnimation: {
			type: "slide",
			time: 400,
			callback: function() {}
		   }
        },
        theme: "square"
    };
    $("#look-search").easyAutocomplete(look_search);
    
    var hip_search = {
        url: "json/hip-serarch.json",
        getValue: "search2",
        list: {	
            match: {
              enabled: true
            },
            showAnimation: {
			type: "fade",
			time: 400,
			callback: function() {}
		   },

		   hideAnimation: {
			type: "slide",
			time: 400,
			callback: function() {}
		   }
        },
        theme: "square"
    };
    $("#hip").easyAutocomplete(hip_search);
    
    $('.eac-square').css("width", "100%");
    $('.looking-search form .condition input').click(function(event){
        event.preventDefault();
        $('.looking-search .click-me').slideToggle();
    });
    $('.looking-search form .condition input[type="text"]').keyup(function() {
        if($(this).val() != '') {
             $('.looking-search .click-me').hide();
        }
     });
    
    $('.warning .warning-conts button').click(function(event){
       $('.warning').fadeOut(); 
    });
    
    $('#healthcare-system').tabs();
   
    //COST
    $('.site-menu li .menu-cost').mouseover(function(){
        $('.costs').fadeIn();
        $('.find-healthcare').fadeOut();
        $('.resources').fadeOut();
        $('.legislation').fadeOut();
        $('.more').fadeOut();
    });
    
    //FIND HEALTHCARE
    $('.site-menu li .menu-care').mouseover(function(){
        $('.find-healthcare').fadeIn();
        $('.costs').fadeOut();
        $('.resources').fadeOut();
        $('.legislation').fadeOut();
        $('.more').fadeOut();
    })
    
    //RESOURCES AND STATITICS
    $('.site-menu li .menu-resources').mouseover(function(){
        $('.resources').fadeIn();
        $('.costs').fadeOut();
        $('.find-healthcare').fadeOut();
        $('.legislation').fadeOut();
        $('.more').fadeOut();
    })
    
    // LEGISLATION AND GUIDELINES
    $('.site-menu li .menu-legislation').mouseover(function(){
        $('.legislation').fadeIn();
        $('.resources').fadeOut();
        $('.costs').fadeOut();
        $('.find-healthcare').fadeOut();
        $('.more').fadeOut();
    })
    
     // MORE
    $('.site-menu li .menu-more').mouseover(function(){
        $('.more').fadeIn();
        $('.legislation').fadeIn();
        $('.resources').fadeOut();
        $('.costs').fadeOut();
        $('.find-healthcare').fadeOut();
    })
    
    $('.site-menu li .menu-disease').mouseover(function(){
        $('.costs').fadeOut();
        $('.find-healthcare').fadeOut();
        $('.resources').fadeOut();
        $('.legislation').fadeOut();
        $('.more').fadeOut();
    })
    
    //UNBIND ALL FADE IN
    $('.site-menu-wrapper').mouseleave(function(){
        $('.costs').fadeOut();
        $('.find-healthcare').fadeOut();
        $('.resources').fadeOut();
        $('.legislation').fadeOut();
        $('.more').fadeOut();
    });
    
    $('.site-menu > li .login-container').mouseover(function(){
        $('.costs').fadeOut();
        $('.find-healthcare').fadeOut();
        $('.resources').fadeOut();
        $('.legislation').fadeOut();
        $('.more').fadeOut();
    })
    
    
    $('.legis .legis-container .set ul .facility').click(function(){
        $('.filter-facilty').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $('.calendar-pick').fadeOut();
       $('.filter-citizens').fadeOut();
    })
    
    $('.legis .legis-container .set ul .category-date').click(function(){
        $('.calendar-pick').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
         $('.filter-facilty').fadeOut();
         $('.filter-citizens').fadeOut();
    })
    
    $('.legis .legis-container .set ul .citizenships').click(function(){
        $('.filter-citizens').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $('.filter-facilty').fadeOut();
        $('.calendar-pick').fadeOut();
    })

    
    $('#date3').datepicker({
        changeYear: true
    });
    
    $('#date').click(function(){
        $('.type-filter .type-container fieldset').slideUp();
         $('.search-panel').slideUp();
    })
    
    $('#date2').click(function(){
        $('.type-filter .type-container fieldset').slideUp();
         $('.search-panel').slideUp();
    })
    
$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#date" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          changeYear: true,
          yearRange: "1930:2030",
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#date2" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        yearRange: "1930:2030",
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
      return date;
    }
  });
    
  $( function() {
        var dateFormat = "mm/dd/yy",
          from = $( "#from1" )
            .datepicker({
              defaultDate: "+1w",
              changeMonth: true,
              changeYear: true,
              yearRange: "1930:2030",
              numberOfMonths: 1
            })
            .on( "change", function() {
              to.datepicker( "option", "minDate", getDate( this ) );
            }),
          to = $( "#to1" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
              changeYear: true,
              yearRange: "1930:2030",
            numberOfMonths: 1
          })
          .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
          });

        function getDate( element ) {
          var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }
          return date;
        }
    });
$('#date').datepicker({
    changeYear: true,
    yearRange: "1930:2030"
});
    
    $('.legis .legis-container .set ul .keyword').click(function(){
         $('.search-key').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
         $('.calendar-pick').fadeOut();
        $('.search-cat').fadeOut();
    })
    $('.legis .legis-container .set ul .category-list').click(function(){
         $('.search-cat').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $('.calendar-pick').fadeOut();
         $('.search-key').fadeOut();
    })
    $('.legis .legis-container .set ul .calendar-picks').click(function(){
         $('.calendar-pick').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
         $('.search-key').fadeOut();
         $('.search-cat').fadeOut();
    })
});
