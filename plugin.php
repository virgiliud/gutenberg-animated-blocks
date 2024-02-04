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

class AnimatedBlocks {

    const VERSION = '1.1.2'; // Plugin version

    /**
     * Registers the plugin.
     */
    public static function register() {
        $plugin = new self();

        add_action( 'init', array( $plugin, 'register_assets' ) );
        add_action( 'enqueue_block_assets', array( $plugin, 'enqueue_block_assets' ) );
        add_action( 'init', array( $plugin, 'create_animated_block' ) );
    }

    /**
     * Register the scripts and styles for the block.
     */
    public function register_assets() {
        // Animation styles
        wp_register_style(
            'ab-animate',
            plugins_url( '/assets/css/animate.min.css', __FILE__ ),
            array(),
            self::VERSION
        );

        // ScrollClass script
        wp_register_script(
            'ab-scroll-class',
            plugins_url( '/assets/js/scrollClass.min.js', __FILE__ ),
            array( 'jquery' ),
            self::VERSION,
            true
        );

        // Animated block front-end script
        wp_register_script(
            'ab-animated-block',
            plugins_url( '/assets/js/frontend.js', __FILE__ ),
            array( 'jquery' ),
            self::VERSION,
            true
        );
    }

    /**
     * Enqueue the block styles for both front-end and editor.
     */
    public function enqueue_block_assets() {
        wp_enqueue_style( 'ab-animate' );
    }

    /**
     * Enqueue the block specific front-end scripts.
     * This method is used as a render callback for the block to enqueue
     * the frontend JavaScript when the block is rendered on a page.
     *
     * @param array $attributes Block attributes.
     * @param string $content Block content.
     * @return string Rendered block content.
     */
    public function render_animated_block( $attributes, $content ) {
        wp_enqueue_script( 'ab-scroll-class' );
        wp_enqueue_script( 'ab-animated-block' );

        return $content;
    }

    /**
     * Register the block and its assets.
     */
    public function create_animated_block() {
        register_block_type( __DIR__ . '/build', array(
            'render_callback' => array( $this, 'render_animated_block' )
        ));
    }
}

// Register the plugin.
AnimatedBlocks::register();
