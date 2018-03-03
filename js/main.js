;(function($){
	$(document).ready(function(){

 $('.ba-header__slider').slick({
  	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	dots: true
		
  });


  

		

				
	}); 

})(jQuery);


		
$(window).on('load', function(){
	var map = new google.maps.Map(document.getElementById('map'), {
 	center: {lat: 40.741895, lng: -73.989308},
 	zoom: 13


 });
 var marker = new google.maps.Marker({
 	map: map,
 	position: {lat: 40.741895, lng: -73.989308}
 	
 });




var $isotope = $('.ba-work__portfolio').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.ba-work__portfolio-img',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.ba-work__portfolio-img-sizer'
  }
});

$('.ba-work__menu-item').on('click', function(event){
	event.preventDefault();

	 $('.ba-work__menu-item').removeClass('ba-work__menu-item--active');
	$(this).addClass('ba-work__menu-item--active');
	//$(this).addClass('ba-work__menu-item--active').siblings().removeClass('ba-work__menu-item--active');


	var filterValue = $(this).data('filter');
	$isotope.isotope({ filter: filterValue });


});

});