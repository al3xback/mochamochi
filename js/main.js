var menuLink = $('.nav-menu ul li a');

function scrNav() {
	var sTop = $(window).scrollTop();
	var headerHeight = $('header').outerHeight();

	$('.page-section').each(function() {
		var id = $(this).attr('id'),
			offset = $(this).offset().top - 1,
			height = $(this).height();
		if (sTop >= (offset - headerHeight) && sTop < offset + height) {
			menuLink.removeClass('active');
			$('.nav-menu').find('[href="#' + id + '"]').addClass('active');
		}
	});
}

$(function() {
	/* swiper */
	var swiper = new Swiper('.hero-swiper', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var instaSwiper = new Swiper('.insta-swiper', {
		slidesPerView: 4,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	/* menu nav */
	menuLink.on('click', function(e) {
		var headerHeight = $('header').outerHeight();
		var target = $($(this).attr('href'));

		$('html, body').animate({
			scrollTop: target.offset().top - headerHeight
		}, 600);
		$(this).addClass('active');
		e.preventDefault();
	});

	scrNav();

	$(window).on('scroll', function() {
		scrNav();
	});
});