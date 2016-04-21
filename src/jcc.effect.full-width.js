(function ($) {
	$(function () {
		$('[data-effect~="full-width"]').each(function () {
			var jThis = $(this);
			var width = jThis.parent().innerWidth();

			if (jThis.is('[data-width-dec]')) {
				jThis.attr('data-width-dec').split(/ +/).forEach(function(item) {
					width -= /^[0-9]+$/.test(item) ? parseInt(jThis.attr('data-width-dec'))
						: $('#' + item).outerWidth();
				});
			}

			jThis.width(width);
		});
	})
})(jQuery);
