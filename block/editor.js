/*
 * Animated Block editor
 *
 * Version: 1.1.0
 */
(function($) {
	$(window).on('load', function() {
	  // Remove animation class after animation ends
		$('.sb-animate-demo').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
			var $this = $(this),
					animation = $this.attr("data-ab-animation");

	    $this.removeClass(animation);
		});
	});
})(jQuery);
