/*
 * ScrollClass JS Utility v2.0
 *
 * Author: Virgiliu Diaconu
 * http://www.virgiliudiaconu.com
 * Licensed under the MIT license.
 */
class ScrollClass {
	static defaultOptions = {
		delay: 10,
		threshold: 50,
		reset: false,
		offsetTop: 0,
		throttle: 50,
	};

	constructor( element, options = {} ) {
		this.el = element;
		this.win = window;
		this.viewed = false;
		this.timer = null;
		this.throttleDelay = null;
		this.options = Object.assign( {}, ScrollClass.defaultOptions, options );

		this.delay =
			this.el.dataset.scrollDelay !== undefined
				? Number( this.el.dataset.scrollDelay )
				: this.options.delay;

		this.threshold =
			this.el.dataset.scrollThreshold !== undefined
				? Number( this.el.dataset.scrollThreshold )
				: this.options.threshold;

		this.offsetTop =
			this.el.dataset.scrollOffsetTop !== undefined
				? Number( this.el.dataset.scrollOffsetTop )
				: this.options.offsetTop;

		this.reset = this.el.hasAttribute( 'data-scroll-reset' )
			? this.el.dataset.scrollReset === '' ||
			  this.el.dataset.scrollReset.toLowerCase() === 'true'
			: this.options.reset;

		this.init();
	}

	init() {
		this.onScroll();
		this.win.addEventListener( 'scroll', () => {
			this.throttle( this.scrollHandler.bind( this ), this.options.throttle );
		} );
	}

	scrollHandler() {
		if ( this.viewed && ! this.reset ) {
			return;
		}
		this.onScroll();
	}

	onScroll() {
		if ( this.inViewport() ) {
			if ( this.viewed && this.reset ) {
				return;
			}

			if ( typeof this.options.callback === 'function' ) {
				this.options.callback.call( this.el );
			}

			window.clearTimeout( this.timer );
			this.timer = window.setTimeout( () => {
				this.toggleScrollClass();
			}, this.delay );

			this.viewed = true;
		} else if ( this.reset ) {
			if ( this.viewed && typeof this.options.resetCallback === 'function' ) {
				this.options.resetCallback.call( this.el );
			}

			this.toggleScrollClass();
			this.viewed = false;
		}
	}

	toggleScrollClass() {
		const dataAttr = this.el.getAttribute( 'data-scroll-class' );
		if ( ! dataAttr ) {
			return;
		}
		const classes = dataAttr.split( ' ' );

		classes.forEach( ( className ) => {
			if ( this.viewed ) {
				this.el.classList.add( className );
			} else {
				this.el.classList.remove( className );
			}
		} );
	}

	inViewport() {
		const rect = this.el.getBoundingClientRect();
		const viewportHeight = this.win.innerHeight;
		let threshold = this.threshold;

		if ( viewportHeight < rect.height ) {
			threshold = 50;
		}

		let offset = ( threshold / 100 ) * rect.height;
		offset = this.viewed === false ? offset : 1;

		return (
			rect.top + offset <= viewportHeight &&
			rect.bottom - offset >= this.offsetTop
		);
	}

	throttle( callback, delay ) {
		if ( this.throttleDelay ) {
			return;
		}

		this.throttleDelay = true;
		setTimeout( () => {
			callback();
			this.throttleDelay = false;
		}, delay );
	}
}

window.ScrollClass = ScrollClass;
export default ScrollClass;
