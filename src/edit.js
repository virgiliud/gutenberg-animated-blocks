// Dependencies
import classnames from 'classnames';
import { animations } from './data/animations';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, store as blockEditorStore } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export default function Edit({ attributes, setAttributes, clientId }) {
	// Block attributes
	const { animation, customClass, duration, delay, offsetTop, threshold, hideEl } = attributes;
	
	useEffect(() => {
		// Handle the end of an animation
		const handleAnimationEnd = event => {
			if (event.target.classList.contains('sb-animate-demo')) {
				const animation = event.target.getAttribute('data-ab-animation');
				event.target.classList.remove(animation);
			}
		};

		// Attach event listener for animationend to document
		document.addEventListener('animationend', handleAnimationEnd);

		// Cleanup to remove the event listener
		return () => {
			document.removeEventListener('animationend', handleAnimationEnd);
		};
	}, [animation]);
	
	// Handle animation select change
	const handleAnimationChange = (selectedValue) => {
		setAttributes({ animation: selectedValue });
	};
	
	// Check for child blocks
	const { hasChildBlocks } = useSelect(select => {
		const { getBlockOrder } = select(blockEditorStore);
		return {
			hasChildBlocks: getBlockOrder(clientId).length > 0
		};
	}, [clientId]);

	// Block properties
	const blockProps = useBlockProps();

	// Render the controls and the block
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={__('Animation')}
						value={animation}
						options={animations}
						onChange={handleAnimationChange}
					/>

					<TextControl
						label={__('Custom animation')}
						value={customClass}
						onChange={(value) => setAttributes({ customClass: value })}
						help={__('Add a custom CSS class name.')}
					/>

					<TextControl
						label={__('Duration (ms)')}
						type="number"
						value={duration}
						onChange={(value) => setAttributes({ duration: value })}
						help={__('The number of milliseconds that the animation takes to complete.')}
					/>

					<TextControl
						label={__('Delay (ms)')}
						type="number"
						value={delay}
						onChange={(value) => setAttributes({ delay: value })}
						help={__('The number of milliseconds to wait before animating.')}
					/>

					<RangeControl
						label={__('Threshold (%)')}
						value={threshold}
						initialPosition={50}
						onChange={(value) => setAttributes({ threshold: value })}
						min={1}
						max={100}
						help={__('The percentage of the block at which the animation begins.')}
					/>

					<ToggleControl
						label={__('Start with opacity 0')}
						checked={hideEl}
						onChange={(value) => setAttributes({ hideEl: value })}
					/>
				</PanelBody>
			</InspectorControls>
			
			<InspectorControls group="advanced">
				<TextControl
					label={__('Offset (px)')}
					type="number"
					value={offsetTop}
					onChange={(value) => setAttributes({ offsetTop: value })}
					help={__('Pixel offset from the top of the page for the animated block, useful for pages with a fixed top navigation bar.')}
				/>
			</InspectorControls>

			<div {...blockProps}>
				<div
					className={classnames(
						'sb-animate-demo',
						'animated',
						animation
					)}
					data-ab-animation={animation}
					style={{ "animation-duration": duration ? (duration / 1000) + "s" : undefined }}
				>
					<InnerBlocks
						renderAppender={hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender}
					/>
				</div>
			</div>
		</>
	);
}
