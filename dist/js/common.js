window.addEventListener('load', function() {

	$('input[name="phone"]').mask('+7 (000) 000-00-00')

	$('body')

	.on('click', '#cookie button', function() {
		localStorage.setItem('COOKIES_ACCEPTED_DATE', new Date())
        localStorage.setItem('COOKIES_ACCEPTED', 'Y')
        $('#cookie').animate({
            opacity: 0,
			bottom: '-30px',
        }, 300, function() {
			$('#cookie').css({
				'display': 'none',
			})
		})
	})

	.on('submit', 'form', function() {
		let f = $(this)
		let action = f.attr('action')
		let data = f.serialize()
		let b = f.find('[type=submit]').html()

		$.ajax({
			url: action,
			type: 'POST',
			dataType: 'json',
			data: {
				data: data,
				button: b
			},
			beforeSend: function() {
				$('#bg').fadeIn(300)
			},
			complete: function(data) {
				$('#bg').fadeOut(100)
			},
			error: function(data) {
				alert('Ошибка сервера. Попробуйте еще раз')
				$('#bg').fadeOut(100)
			},
			success: function(result) {
				if (result.success && result.html) {
					f.html(result.html)
				} else if (result.message) {
					alert(result.message)
				} else {
					alert('Неизвестная ошибка при отправке формы. Попробуйте еще раз')
				}
			},
		})
	})

	init_cookie()
})

function init_cookie () {
	if(localStorage.getItem('COOKIES_ACCEPTED') == 'Y')
        return

    $('#cookie')
		.css({
			'display': 'block',
		})
		.animate({
			opacity: 1,
			bottom: '30px',
		}, 300)
}
