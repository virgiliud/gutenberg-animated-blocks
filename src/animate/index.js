// Import styles
import './styles/style.scss';
import './styles/editor.scss';

// Internal dependencies
import classnames from 'classnames';
import { animations } from './animations';
import icon from '../../block/icon.js';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls, InnerBlocks, store as blockEditorStore } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, ToggleControl, RangeControl, BaseControl } from '@wordpress/components';
import { Fragment, useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

// External dependencies
import Select from 'react-select';
import reactSelectStyles from 'gutenberg-react-select-styles';

/**
 * Register: Animated Block
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name
 * @param  {Object}   settings Block settings
 */
registerBlockType( 'ab/animate', {
	icon: icon,

	/**
	 * Define the edit interface
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit( { attributes, setAttributes, clientId } ) {
		const { animation, customClass, duration, delay, offsetTop, threshold, hideEl } = attributes;
		const [ animateDemo, setAnimateDemo ] = useState('');
		const [ selectedOption, setSelectedOption ] = useState('');

		useEffect( () => {
			// Set the selected option object
			if ( animation ) {
				setSelectedOption( animations.filter(x => x.value === animation) );
			}
		}, [] );

		// Return InnerBlocks block count
		const { hasChildBlocks } = useSelect(
			( select ) => {
				const { getBlockOrder } = select(
					blockEditorStore
				);

				return {
					hasChildBlocks: getBlockOrder( clientId ).length > 0
				};
			},
			[ clientId ]
		);

		// Handle animation selection
		const handleSelectChange = ( selectedAnimation ) => {
			if ( ! selectedAnimation ) {
				setAttributes( { animation: undefined } );
				setSelectedOption( undefined );
				return;
			}
			setAttributes( { animation: selectedAnimation.value } );
			setSelectedOption( selectedAnimation );
			setAnimateDemo( selectedAnimation.value );
		};

		const blockProps = useBlockProps();

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<BaseControl id="ab-animation-options" label="Animation">
							<Select
								name="animation"
								value={ selectedOption }
								options={ animations }
								onChange={ handleSelectChange }
								isClearable={ true }
								styles={ reactSelectStyles }
							/>
						</BaseControl>

            <TextControl
              label={ __( 'Custom animation' ) }
              value={ customClass }
              onChange={ ( value ) => setAttributes( { customClass: value } ) }
							help={ __( 'Add a custom CSS class name.' ) }
            />

						<TextControl
	            label={ __( 'Duration (ms)' ) }
							type="number"
	            value={ duration }
	            onChange={ ( value ) => setAttributes( { duration: value } ) }
							help={ __( 'The number of milliseconds that the animation takes to complete.' ) }
		        />

						<TextControl
							label={ __( 'Delay (ms)' ) }
							type="number"
							value={ delay }
							onChange={ ( value ) => setAttributes( { delay: value } ) }
							help={ __( 'The number of milliseconds to wait before animating.' ) }
						/>

		        <RangeControl
	            label={ __( 'Threshold (%)' ) }
	            value={ threshold }
							initialPosition={ 50 }
	            onChange={ ( value ) => setAttributes( { threshold: value } ) }
	            min={ 1 }
	            max={ 100 }
							help={ __( 'The percentage of the block at which the animation begins.' ) }
		        />

						<ToggleControl
	            label={ __( 'Start with opacity 0' ) }
	            checked={ hideEl }
	            onChange={ ( value ) => setAttributes( { hideEl: value } ) }
		        />
					</PanelBody>
				</InspectorControls>

				<InspectorControls __experimentalGroup="advanced">
					<TextControl
						label={ __( 'Offset (px)' ) }
						type="number"
						value={ offsetTop }
						onChange={ ( value ) => setAttributes( { offsetTop: value } ) }
						help={ __( 'The number of pixels the animated block should be offset from the top of the page. Use this option when a page has a top fixed navigation bar.' ) }
					/>
				</InspectorControls>

				<div {...blockProps}>
					<div
						className={ classnames(
							'sb-animate-demo',
							'animated',
							animateDemo
						) }
						data-ab-animation={ animation }
						style={ { "animation-duration": duration ? (duration / 1000) + "s" : undefined } }
					>
						<InnerBlocks
							renderAppender={ hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender }
						/>
					</div>
				</div>
			</Fragment>
		);
	},

	/**
	 * Define the final markup
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save( { attributes } ) {
		const { animation, customClass, duration, delay, offsetTop, threshold, hideEl } = attributes;

		const animationClasses = (animation || customClass) ? [animation, customClass].filter(Boolean).join(" ") : undefined;

		const blockProps = useBlockProps.save( {
  		className: hideEl && "ab-is-hidden",
			"data-scroll-class": animationClasses,
			"data-scroll-delay": ( delay > 0 ) ? delay : undefined,
			"data-scroll-threshold": threshold,
			"data-scroll-offset-top": offsetTop,
			style: { "animation-duration": duration ? (duration / 1000) + "s" : undefined }
  	} );

		return (
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
		);
	},

	deprecated: [
		// v1.1.0
		{
			attributes: {
				animation: {
					type: 'string'
				},
				customClass: {
					type: 'string'
				},
				duration: {
					type: 'number'
				},
				delay: {
					type: 'number',
					default: 0
				},
				offsetTop: {
					type: 'number'
				},
				threshold: {
					type: 'number'
				},
				hideEl: {
					type: 'boolean',
					default: false
				}
			},

			save( { attributes } ) {
				const { animation, customClass, duration, delay, offsetTop, threshold, hideEl } = attributes;

				const animationClasses = (animation || customClass) ? [animation, customClass].filter(Boolean).join(" ") : undefined;

				const blockProps = useBlockProps.save( {
		  		className: hideEl && "ab-is-hidden",
					"data-scroll-class": animationClasses,
					"data-scroll-delay": ( delay > 0 ) ? delay : undefined,
					"data-scroll-threshold": threshold,
					style: { "animation-duration": (duration && duration !== 1) ? duration + "s" : undefined }
		  	} );

				return (
					<div {...blockProps}>
						<InnerBlocks.Content />
					</div>
				);
			}
		},

		// v1.0.7
		{
			attributes: {
				animation: {
					type: 'string'
				},
				customClass: {
					type: 'string'
				},
				delay: {
					type: 'number',
					default: 0
				},
				threshold: {
					type: 'number',
					default: 50
				},
				hideEl: {
					type: 'boolean',
					default: false
				}
			},

			save( { attributes } ) {
				const { animation = '', customClass = '', delay, threshold, hideEl } = attributes;

				return (
					<div
					className={ classnames( { 'scroll-hide': hideEl } ) }
					data-scroll-class={ `${animation} ${customClass}` }
					data-scroll-delay={ ( delay > 0 ) ? delay : 0 }
					data-scroll-threshold={ threshold }
					>
						<InnerBlocks.Content />
					</div>
				);
			}
		}
	]
} );
