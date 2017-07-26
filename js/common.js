$(function() {

	// Custom JS

jQuery('.sf-menu').superfish({
			pathClass:	'current',
			cssArrows: false,
			hoverClass: '0'
		});

$(".sf-menu").after("<div id='my-menu'>");
$(".sf-menu").clone().appendTo("#my-menu");
$("#my-menu").find("*").attr("style", " ");
$("#my-menu").find("ul").removeClass("sf-menu");
$("#my-menu").mmenu({
    extensions: ['fx-menu-slide', 'pagedim', 'positioning'],
    navbar: {
        title: '<img src="img/logo.svg">'  },
    offCanvas: {
               position  : "right",
               zposition : "front"
            }
  });

var $icon = $('.hamburger');
var api = $("#my-menu").data( "mmenu" );
$icon.on( "click", function() {
 api.open();
});

api.bind('open:start', function(){$icon.addClass('is-active');
});
api.bind('close:finish', function(){$icon.removeClass('is-active');
});


$(".carousel-serv").on('initalized.owl.carousel', function(){
    setTimeout(function() { carouselService() }, 200);
});

$(".carousel-serv").owlCarousel({
     loop: true,
     smartSpeed: 700,
     nav: true,
     dots: false,
     responsiveClass: true,
     responsive: {
       0: { items: 1 },
       960: { items: 2},
       1200: { items: 3 },
                 },
     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });

function carouselService() {
  $('.carousel-serv-item').each(function() {
        var ths = $(this),
        thsh = ths.find('.carousel-serv-content').outerHeight();
        ths.find('.carousel-serv-img').css('min-height', thsh);
    }); }carouselService();

$(".project-slider").owlCarousel({
     loop: true,
     items: 1,
     nav: true,
     navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
     dots: false,
     smartSpeed: 700,
    });

    
$(".partners").owlCarousel({
     loop: true,
     smartSpeed: 700,
     nav: false,
     autoHeight: true,
     dots: false,
     nav: true,
     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
     responsiveClass: true,
     responsive: {
        0:{items: 1},
        768: {items: 2},
        992: {items: 3},
        1200: {items: 4}
        }
    });

   
$(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
        $('.top').addClass('active');
    } else {
        $('.top').removeClass('active');
    }
});

$('.top').click(function () {
 $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

function onResize(){
$('.carousel-serv-content').equalHeights();
}onResize();
window.onresize = function() {onResize()};
});
