
$('.skillbar').each(function(){
	$(this).find('.skillbar-bar').animate({
		width:$(this).attr('data-percent')
	}, 2000);
});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:1,
		margin: 50,
		loop: true,
		nav: false,
	});
  });

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
  });

//   Scroll

$("[data-scroll]").on("click", function(event) {
	event.preventDefault();
	var blockId = $(this).data('scroll'),
	blockOffset = $(blockId).offset().top;

	$("html, body").animate({
		scrollTop: blockOffset
	}, 500);
});
