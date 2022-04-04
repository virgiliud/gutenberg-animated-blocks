/*
 * Animated Block
 *
 * Version: 1.1.0
 */
(function($) {
	// Animated block element
	var $animatedBlock = $('[data-scroll-class]');

	// Initialize
	$animatedBlock.scrollClass();

  // On animation end
	$animatedBlock.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
		$(this).addClass('ab-animation-end');
	});
})(jQuery);
