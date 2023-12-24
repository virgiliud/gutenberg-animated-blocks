# Animated Block for Gutenberg

## Description
Add scroll-based animations to WordPress Gutenberg blocks.

## Features
- Choose from 76 cross-browser CSS3 animations or add your own.
- Preview animations in the editor.
- Adjust the animation duration, delay, scroll threshold, and offset.

## Settings
- **Duration**: The speed of the animation in milliseconds.
- **Delay**: How many milliseconds to wait before animating the element.
- **Threshold**: Add animation when x% of the element enters the screen.
- **Start with Opacity 0**: Set the element to opacity 0 when the page loads. The option works for elements transitioning to 100% opacity through CSS.
- **Offset Top** (available in the block's advanced settings): Number of pixels to offset the animated block from the top of the page. Useful when a page has a fixed top navigation bar.
- Class name "ab-animation-end" is added to the animated block after the CSS animation has ended. This class name can be used to add custom styles.

## Requirements
PHP 5.6+ is recommended, WordPress 5.0+, and Gutenberg must be active.

## Documentation
Select Animated Block from the Layout Elements group and add any content blocks within it. Select an animation from the dropdown list or add your own custom CSS class. The selected animation or custom CSS class will be added to the block when the user scrolls to it.

Animated Block acts as a container block, allowing you to nest an unlimited number of blocks within it.

https://wordpress.org/plugins/animated-blocks/
