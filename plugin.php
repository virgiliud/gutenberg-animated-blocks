<?php
/**
 * Plugin Name: Animated Blocks on Scroll
 * Plugin URI: https://wordpress.org/plugins/animated-blocks/
 * Description: Add scroll based animations to Gutenberg blocks.
 * Author: Virgiliu Diaconu
 * Author URI: http://virgiliudiaconu.com/
 * Requires at least: 5.9
 * Requires PHP: 7.0
 * Version: 1.1.3
 * License: GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: animated-blocks
 * @package create-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'AnimatedBlocks' ) ) {
	class AnimatedBlocks {

		/**
		 * Cached plugin version from header metadata.
		 *
		 * @var string|null
		 */
		private static $version = null;

		/**
		 * Registers the plugin.
		 */
		public static function register() {
			add_action( 'init', array( __CLASS__, 'register_assets' ) );
			add_action( 'init', array( __CLASS__, 'create_animated_block' ) );
			add_action( 'enqueue_block_assets', array( __CLASS__, 'enqueue_editor_block_assets' ) );
		}

		/**
		 * Gets plugin version from the plugin header.
		 *
		 * @return string
		 */
		private static function get_version() {
			if ( null === self::$version ) {
				$plugin_data   = get_file_data( __FILE__, array( 'Version' => 'Version' ) );
				self::$version = ! empty( $plugin_data['Version'] ) ? $plugin_data['Version'] : '1.0.0';
			}

			return self::$version;
		}

		/**
		 * Register the scripts and styles for the block.
		 */
		public static function register_assets() {
			$version = self::get_version();

			// Animation styles.
			wp_register_style(
				'ab-animate',
				plugins_url( '/assets/css/animate.min.css', __FILE__ ),
				array(),
				$version
			);

			// ScrollClass script.
			wp_register_script(
				'ab-scroll-class',
				plugins_url( '/assets/js/scrollClass.min.js', __FILE__ ),
				array( 'jquery' ),
				$version,
				true
			);

			// Animated block front-end script.
			wp_register_script(
				'ab-animated-block',
				plugins_url( '/assets/js/frontend.js', __FILE__ ),
				array( 'jquery' ),
				$version,
				true
			);
		}

		/**
		 * Enqueue animation styles inside the editor content canvas.
		 */
		public static function enqueue_editor_block_assets() {
			if ( is_admin() ) {
				wp_enqueue_style( 'ab-animate' );
			}
		}

		/**
		 * Enqueue the block specific front-end scripts.
		 * This method is used as a render callback for the block to enqueue
		 * the frontend JavaScript when the block is rendered on a page.
		 *
		 * @param array  $attributes Block attributes.
		 * @param string $content    Block content.
		 * @return string Rendered block content.
		 */
		public static function render_animated_block( $attributes, $content ) {
			wp_enqueue_style( 'ab-animate' );
			wp_enqueue_script( 'ab-scroll-class' );
			wp_enqueue_script( 'ab-animated-block' );

			return $content;
		}

		/**
		 * Register the block and its assets.
		 */
		public static function create_animated_block() {
			register_block_type(
				__DIR__ . '/build',
				array(
					'render_callback' => array( __CLASS__, 'render_animated_block' ),
				)
			);
		}
	}
}

// Register the plugin.
AnimatedBlocks::register();
