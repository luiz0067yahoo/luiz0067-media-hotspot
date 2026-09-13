<?php
/**
 * Plugin Name:       Luiz0067 Media Hotspot
 * Plugin URI:        https://github.com/luiz0067/luiz0067-media-hotspot
 * Description:       Interactive percentage Hotspots, Agamotto Layer Sliders, and 360 Panorama with Bootstrap 5 modals and Font Awesome pulsating markers.
 * Version:           1.0.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            luiz0067
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       luiz0067-media-hotspot
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Gutenberg Block
 */
function luiz0067_media_hotspot_register_block() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'luiz0067_media_hotspot_register_block' );

/**
 * Enqueue Font Awesome and Bootstrap 5 for Frontend & Editor
 */
function luiz0067_media_hotspot_enqueue_dependencies() {
	// Font Awesome 6 Icons
	wp_register_style(
		'luiz0067-font-awesome',
		'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
		array(),
		'6.5.1'
	);
	wp_enqueue_style( 'luiz0067-font-awesome' );

	// Bootstrap 5 CSS (scoped or full)
	wp_register_style(
		'luiz0067-bootstrap-5',
		'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
		array(),
		'5.3.3'
	);
	wp_enqueue_style( 'luiz0067-bootstrap-5' );

	// Bootstrap 5 Bundle JS (for native modal & popovers)
	wp_register_script(
		'luiz0067-bootstrap-5-bundle',
		'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
		array(),
		'5.3.3',
		true
	);
	wp_enqueue_script( 'luiz0067-bootstrap-5-bundle' );
}
add_action( 'wp_enqueue_scripts', 'luiz0067_media_hotspot_enqueue_dependencies' );
add_action( 'enqueue_block_editor_assets', 'luiz0067_media_hotspot_enqueue_dependencies' );

/**
 * Load plugin textdomain for translations
 */
function luiz0067_media_hotspot_load_textdomain() {
	load_plugin_textdomain(
		'luiz0067-media-hotspot',
		false,
		dirname( plugin_basename( __FILE__ ) ) . '/languages'
	);
}
add_action( 'plugins_loaded', 'luiz0067_media_hotspot_load_textdomain' );
