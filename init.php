<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @package carousel-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue block editor JavaScript and CSS.
 */
function animated_block_editor_assets() {
	// Block script.
	wp_enqueue_script(
		'ab-animated-block',
		plugins_url( '/dist/blocks.build.js', __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( AB_PLUGIN_DIR . '/dist/blocks.build.js' ),
		true
	);

	// Register block editor styles for backend.
	wp_enqueue_style(
		'ab-animated-block-editor',
		plugins_url( '/dist/blocks.editor.build.css', __FILE__ ),
		[ 'wp-edit-blocks' ],
		filemtime( AB_PLUGIN_DIR . '/dist/blocks.editor.build.css' )
	);
}

add_action( 'enqueue_block_editor_assets', 'animated_block_editor_assets' );

/**
 * Enqueue block styles for frontend and editor.
 */
function animated_block_assets() {
	wp_enqueue_style(
		'ab-animate',
		plugins_url( '/dist/assets/css/animate.min.css', __FILE__ ),
		[],
		filemtime( AB_PLUGIN_DIR . '/dist/assets/css/animate.min.css' ),
		false
	);

	if ( ! is_admin() ) {
		wp_enqueue_style(
			'ab-animated-block',
			plugins_url( '/dist/blocks.style.build.css', __FILE__ ),
			[],
			filemtime( AB_PLUGIN_DIR . '/dist/blocks.style.build.css' )
		);
	}
}

add_action( 'enqueue_block_assets', 'animated_block_assets' );
