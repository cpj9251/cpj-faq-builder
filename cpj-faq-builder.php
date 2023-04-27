<?php
/**
 * Plugin Name:       CPJ FAQ Builder
 * Description:       A block plugin for FAQs, a section to enter question and answer. On the front end, the question is clickable and then displays or removes the answer. To add the block to your page, click Add block then search for 'cpj' and then select cpj-faq-builder.
 * Requires at least: 6.2
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Paul Jarvis
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cpj-faq-builder
 *
 * @package           cpj-faq-builder
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function cpj_faq_builder_cpj_faq_builder_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'cpj_faq_builder_cpj_faq_builder_block_init' );

function cpj_faq_builder_enqueue($hook){
	
	wp_enqueue_script('cpj_faq_builder_js', plugins_url('/cpj-faq-builder.js',__FILE__),array( 'jquery' ),'1.0.0',true);

	wp_enqueue_style('cpj_faq_builder_css',  plugins_url('/cpj-faq-builder.css',__FILE__));


	
}//end fx

add_action('wp_enqueue_scripts', 'cpj_faq_builder_enqueue');

