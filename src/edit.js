/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	
	const blockProps = useBlockProps();
	
	const onChangeQuestion = ( newContent )=>{
		setAttributes( { contentQuestion: newContent } )
	}
	const onChangeAnswer = ( newContent )=>{
		setAttributes( { contentAnswer: newContent } )
	}

	return (
		<p { ...blockProps }>
		<RichText 
			tagName = 'p'
			className = 'faq-question'
			onChange = { onChangeQuestion }
			value={ attributes.contentQuestion }
			placeholder={ __(
				'Enter FAQ Question'
			) }
		/>
		<RichText
			tagName = 'p'
			className = 'faq-answer'
			onChange = { onChangeAnswer }
			value={ attributes.contentAnswer }
			placeholder={ __(
				'Enter FAQ Answer'
			) }
		/>
		</p>
	);
}
