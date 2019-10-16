(function($){
	new WOW().init();
	$(".rs_chosen").chosen({disable_search_threshold: 10});
	$(".main_menu_section").sticky({topSpacing:0});
	
	
	$('.slider_main').slick({
		dots: false,
		autoplay:true,
		infinite: true,
		speed: 300,
		rtl: $('html').attr('lang') == 'ar' ? true : false,
		slidesToShow: 1,
		fade: true,
		cssEase: 'linear',
		//adaptiveHeight: true,
		prevArrow:'<i class="rs_slider_prev mdi mdi-chevron-left"></i>',
		nextArrow:'<i class="rs_slider_next mdi mdi-chevron-right"></i>'
	});
	
}(jQuery))