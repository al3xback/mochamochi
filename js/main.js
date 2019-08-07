var isOpen = false;
var menuLink = $('.nav-menu ul li a');

function toggleMenu() {
	if (isOpen) {
		$('body').removeClass('show-menu');
		setTimeout(function() {
			$(".side-menu-content").scrollTop(0);
		}, 300);
	} else {
		$('body').addClass('show-menu');
	}
	isOpen = !isOpen;

	return false;
}

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
	AOS.init({
		duration: 650,
	});

	/* swiper */
	var swiper = new Swiper('.hero-swiper', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var instaSwiper = new Swiper('.insta-feed-swiper', {
		speed: 600,
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

	$('.menu-mobile, .overlay-trans, .mobile-nav-menu ul li a').click(toggleMenu);

	$(window).on('scroll', function() {
		scrNav();

		if ($(this).scrollTop() > 200) {
			$("header").addClass("transform");
		}
		else {
			$("header").removeClass("transform");
		}
	});
});