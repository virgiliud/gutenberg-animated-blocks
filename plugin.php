<?php
/**
 * Plugin Name: Animated Blocks on Scroll
 * Plugin URI: https://wordpress.org/plugins/animated-blocks/
 * Description: Add scroll based animations to Gutenberg blocks.
 * Author: Virgiliu Diaconu
 * Author URI: http://virgiliudiaconu.com/
 * Requires at least: 5.9
 * Requires PHP: 7.0
 * Version: 1.1.2
 * License: GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: animated-blocks
 * @package create-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the scripts and styles for the block.
 */
function ab_register_assets() {
	// Animation styles
    wp_register_style(
        'ab-animate',
        plugins_url( '/assets/css/animate.min.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/css/animate.min.css' )
    );

	// ScrollClass script
    wp_register_script(
        'ab-scroll-class',
        plugins_url( '/assets/js/scrollClass.min.js', __FILE__ ),
        array( 'jquery' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/js/scrollClass.min.js' ),
        true
    );

	// Animated block front-end script
    wp_register_script(
        'ab-animated-block',
        plugins_url( '/assets/js/frontend.js', __FILE__ ),
        array( 'jquery' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/js/frontend.js' ),
        true
    );
}
add_action( 'init', 'ab_register_assets' );

/**
 * Enqueue the block styles for both front-end and editor.
 */
function ab_enqueue_block_assets() {
    wp_enqueue_style( 'ab-animate' );
}
add_action( 'enqueue_block_assets', 'ab_enqueue_block_assets' );

/**
 * Enqueue the block specific front-end scripts.
 *
 * This function is used as a render callback for the block to enqueue
 * the frontend JavaScript when the block is rendered on a page.
 *
 * @param array $attributes Block attributes.
 * @param string $content Block content.
 * @return string Rendered block content.
 */
function ab_render_animated_block( $attributes, $content ) {
	// Enqueue scrollClass script
    wp_enqueue_script( 'ab-scroll-class' );

    // Enqueue animated block script
    wp_enqueue_script( 'ab-animated-block' );

    return $content;
}

/**
 * Register the block and its assets.
 */
function create_animated_block() {
    register_block_type( __DIR__ . '/build', array(
        'render_callback' => 'ab_render_animated_block'
    ));
}
add_action( 'init', 'create_animated_block' );
