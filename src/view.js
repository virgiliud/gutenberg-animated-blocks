import ScrollClass from './lib/scrollClass';

function initAnimatedBlocks() {
	document.querySelectorAll( '[data-scroll-class]' ).forEach( ( element ) => {
		new ScrollClass( element );

		element.addEventListener( 'animationend', () => {
			element.classList.add( 'ab-animation-end' );
		} );
	} );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', initAnimatedBlocks );
} else {
	initAnimatedBlocks();
}
