=== Animated Blocks on Scroll ===
Contributors: virgildia
Donate link: http://virgiliudiaconu.com/
Tags: animated block, blocks, animation, css animations, css3, gutenberg, aos
Requires at least: 5.0
Tested up to: 5.9
Requires PHP: 5.6+
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html


== Description ==

Add scroll based animations to WordPress Gutenberg blocks. 
 

= Features =

 - Choose from 76 cross-browser CSS3 animations or add your own
 - Preview animations in the editor
 - Adjust the animation duration, delay, scroll threshold, and offset

= Settings =

 - Duration: The speed of the animation in milliseconds.
 - Delay: How many milliseconds to wait before animating the element.
 - Threshold: Add animation when x% of the element enters the screen.
 - Start with opacity 0: Set the element to opacity 0 when the page loads. The option works for elements transitioning to 100% opacity through CSS.
 - Offset Top (available in the block's advanced settings): Number of pixels to offset the animated block from the top of the page. Useful when a page has a fixed top navigation bar.
 - Class name "ab-animation-end" is added to the animated block after the CSS animation has ended. This class name can be used to add custom styles. 

== Requirements ==

PHP 5.6+ is recommended, WordPress 5.0+, and Gutenberg must be active.

== Documentation ==

Select Animated Block from the Layout Elements group and add any content blocks within it. Select an animation from the dropdown list or add your own custom CSS class. The selected animation or custom CSS class will be added to the block when the user scrolls to it.

Animated Block is a parent block (a container), nesting as many blocks as you want. 

== Screenshots ==

1. Animation settings in the block inspector
2. Animation list with search functionality
2. Add any blocks within Animated Block

== Frequently Asked Questions ==

= Installation =

Go to your WordPress Admin -> Plugins -> Add New. Search for Gutenberg Animated Blocks. Install and Activate. You can also download this folder and add it into your plugins directory. 

"Animated Block" will be added to the Design block group. 
 
= What is Gutenberg? =
 
Gutenberg is the name of the new block based editor introduced in WordPress 5. Gutenberg makes it easy to create content within the editor using blocks.


== Changelog ==

= 1.0.0 =
First release of the plugin.

= 1.0.3 =
Animation settings in individual blocks by extending the block API is no longer supported in the plugin. The InnerBlocks component was implemented, enabling nested block content and more flexibility. Select "Animated Block" from the "Layout Elements" group and add whatever content blocks you'd like. Select Animated Block to see animation settings. 

= 1.0.4 =
Updated enqueue function to work on WordPress 5.0

= 1.0.5 =
Updated/fixed animation previews in the editor. 
Class "ab-end" is now added to elements when a CSS animation is completed.

= 1.0.6 =
Fixed jQuery warning
Updated for the latest WordPress version

= 1.1.0 = 
Tested for WordPress 5.9
Added block.json
Added animation duration option
Added offset option (available in the block's Advanced settings)
Fixed animation opacity issues
Renamed class ab-hidden to ab-is-hidden
Renamed class ab-end to ab-animation-end

= 1.1.1 = 
Updated to the latest scrollClass.js
Reverted to milliseconds for duration and delay