$(document).ready(function() {
	$('#mobile-mnu-btn').on('click', function () {

		if ($('.mobile-mnu__item').hasClass('show')) {
			$('.mobile-mnu__item').removeClass('show');
			$('.mobile-mnu__list').removeClass('show-list')

		}
		else {
			$('.mobile-mnu__item').addClass('show');
			$('.mobile-mnu__list').addClass('show-list')
		}
				
	})
});