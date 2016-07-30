$(document).ready(function() {
	$('#mobile-mnu-btn').on('click', function () {

		if ($('.main-nav__item').hasClass('show')) {
			$('.main-nav__item').removeClass('show');
			$('.main-nav__list').removeClass('show-list')

		}
		else {
			$('.main-nav__item').addClass('show');
			$('.main-nav__list').addClass('show-list')
		}
				
	})
});