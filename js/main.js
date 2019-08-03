var menuLink = $('.nav-menu ul li a');
var headerHeight = $('header').outerHeight();

function scrNav() {
	var sTop = $(window).scrollTop();
	$('.page-section').each(function() {
		var id = $(this).attr('id'),
			offset = $(this).offset().top - 1,
			height = $(this).height();
		console.log(id)
		if (sTop >= (offset - headerHeight) && sTop < offset + height) {
			console.log("active zzzzzzzzzzzzzzzzz " + id)
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
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
	});

	var instaSwiper = new Swiper('.instagram-swiper', {
		slidesPerView: 4,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	/* menu nav */
	menuLink.on('click', function(e) {
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