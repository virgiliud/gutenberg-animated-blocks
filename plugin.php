<?php
/**
 * Plugin Name: Animated Blocks on Scroll
 * Plugin URI: https://wordpress.org/plugins/animated-blocks/
 * Description: Add scroll based animations to Gutenberg blocks.
 * Author: Virgiliu Diaconu
 * Author URI: http://virgiliudiaconu.com/
 * Version: 1.1.1
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: animated-blocks
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Directory path of this plugin
 *
 * @var string
 */
define( 'AB_PLUGIN_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'init.php';

/**
 * Register Block.
 */
require_once plugin_dir_path( __FILE__ ) . 'block/index.php';
