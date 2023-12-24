// Dependencies
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	// Block attributes
	const { animation, customClass, duration, delay, offsetTop, threshold, hideEl } = attributes;

	// Combine animation and customClass into one string if they exist
	const animationClasses = (animation || customClass) ? [animation, customClass].filter(Boolean).join(" ") : undefined;

	// Apply block props for front-end rendering.
	const blockProps = useBlockProps.save({
		className: hideEl && "ab-is-hidden",
		"data-scroll-class": animationClasses,
		"data-scroll-delay": delay || undefined,
		"data-scroll-threshold": threshold || undefined,
		"data-scroll-offset-top": offsetTop || undefined,
		style: duration ? { "animation-duration": `${duration / 1000}s` } : {}
	});

	// Render the block with InnerBlocks content
	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
