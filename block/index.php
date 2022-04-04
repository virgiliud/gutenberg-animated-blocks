<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Returns the content of the block.
 *
 * @param array $attributes Block attributes.
 *
 * @param string $content Block save content.
 */
function ab_render_animated_block( $attributes, $content ) {
	// Frontend JS
	if ( ! is_admin() ) {
		wp_enqueue_script(
			'scroll-class',
			plugins_url( 'dist/assets/js/scrollClass.min.js',  __DIR__ ),
			[ 'jquery' ],
			filemtime( AB_PLUGIN_DIR . '/dist/assets/js/scrollClass.min.js' ),
			true
		);

		wp_enqueue_script(
			'ab-animated-block',
			plugins_url( 'block/view.js',  __DIR__ ),
			[ 'jquery', 'scroll-class' ],
			filemtime( AB_PLUGIN_DIR . '/block/view.js' ),
			true
		);
	}

	return $content;
}

/**
 * Register the block.
 */
function ab_register_animated_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Editor JS
	wp_register_script(
		'ab-animated-block-editor',
		plugins_url( 'block/editor.js',  __DIR__ ),
		[ 'jquery' ],
		filemtime( AB_PLUGIN_DIR . '/block/editor.js' ),
		true
	);

	register_block_type( __DIR__,
		array(
			'render_callback' => 'ab_render_animated_block',
			'editor_script'   => 'ab-animated-block-editor'
	  )
	);
}

add_action( 'init', 'ab_register_animated_block' );
