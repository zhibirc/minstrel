define(['typography', 'uglifyjs'], function (typography, UglifyJS) {
	'use strict';
	
	var doc = document,
		src = doc.getElementById('src_input'),
		dst = doc.getElementById('dst_output'),
		srcTrash = doc.getElementById('src_trash'),
		dstTrash = doc.getElementById('dst_trash'),
		app = doc.getElementById('app_cnt'),
		ast, compressor;
	
	var speller = new Speller({ url: 'speller', lang: 'ru', options: Speller.IGNORE_URLS });
	
	function toggleTrashIcon(txtTarget) {
		txtTarget === 'src' ? (src.value ? srcTrash.classList.remove('__hidden') : srcTrash.classList.add('__hidden'))
							: (dst.value ? dstTrash.classList.remove('__hidden') : dstTrash.classList.add('__hidden'));
		
	}
	
	function getEvent(evt) {
		var target = evt.target;
		
		switch (target.id) {
		case 'btn_typography':
			dst.value = typography.fixText(src.value);
			toggleTrashIcon('dst');
			break;
		case 'btn_uglifyjs':
			ast = UglifyJS.parse(src.value);
			
			ast.figure_out_scope();
			compressor = UglifyJS.Compressor();
			ast = ast.transform(compressor);
			
			ast.figure_out_scope();
			ast.compute_char_frequency();
			ast.mangle_names();
			
			dst.value = ast.print_to_string();
			toggleTrashIcon('dst');
			break;
		case 'btn_speller':
			speller.check([src]);
			break;
		case 'btn_speller_settings':
			speller.optionsDialog();
			break;
		case 'src_input':
			toggleTrashIcon('src');
			break;
		case 'dst_output':
			toggleTrashIcon('dst');
			break;
		case 'src_trash':
			src.value = '';
			toggleTrashIcon('src');
			src.focus();
			break;
		case 'dst_trash':
			dst.value = '';
			toggleTrashIcon('dst');
			dst.focus();
			break;
		}
	}
	
	/**
	 *	@exports
	 */
	 return {
		 getEvent: getEvent
	 };
});