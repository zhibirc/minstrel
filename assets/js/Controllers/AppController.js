define(['typography', 'uglifyjs', 'search', 'speller'], function (typography, UglifyJS, search, Speller/*, controls */) {
	'use strict';
	
	var NODES;
	var ast, compressor;
	
	var speller = new Speller({ url: '.', lang: 'ru', options: Speller.IGNORE_URLS });
	
	function getNodes(map) {
		NODES = map;
		Object.freeze(NODES);
	}
	
	function toggleTrashIcon(txtTarget) {
		var srcTrash = NODES.srcTrash,
			dstTrash = NODES.dstTrash;
			
		txtTarget === 'src' ? (NODES.src.value ? srcTrash.classList.remove('__hidden') : srcTrash.classList.add('__hidden'))
							: (NODES.dst.value ? dstTrash.classList.remove('__hidden') : dstTrash.classList.add('__hidden'));
		
	}
	
	function getEvent(evt) {
		var target = evt.currentTarget.id === 'main_toolbar' ? evt.target.parentNode : evt.target,
			src = NODES.src,
			dst = NODES.dst,
			data;
		
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
		case 'btn_info':
			NODES.popup.className = NODES.overlay.className = '';
			break;
		case 'btn_search':
			data = src.value;
			
			if (!data.trim()) {
				return;
			}
			
			search.getRequest(data, NODES.searchBox);
			break;
		case 'pp_info_close':
			NODES.overlay.className = NODES.popup.className = '__hidden';
			break;
		}
	}
	
	/**
	 *	@exports
	 */
	 return {
		 getNodes: getNodes,
		 getEvent: getEvent
	 };
});