(function ($) {
	$(function () {
		$('[data-effect~="full-height"]').each(function () {
			var jThis = $(this);
			var height = jThis.parent().innerHeight();

			if (jThis.is('[data-height-dec]')) {
				jThis.attr('data-height-dec').split(/ +/).forEach(function(item){
					height -= /^[0-9]+$/.test(item) ? parseInt(jThis.attr('data-height-dec'))
						: $('#' + item).outerHeight();
				});
			}

			jThis.height(height);
		});
	})
})(jQuery);

