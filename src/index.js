import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import play from './icons/play.js';

// Import styles that apply both to the editor and the frontend
import './styles/style.scss';

// Register the block
registerBlockType(metadata.name, {
	icon: play,
	edit: Edit,
	save
});
