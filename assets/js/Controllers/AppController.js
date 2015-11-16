define(['typography', 'uglifyjs'], function (typography, UglifyJS) {
	'use strict';
	
	var doc = document,
		src = doc.getElementById('src_input'),
		dst = doc.getElementById('dst_output'),
		ast, compressor;
		
	function getEvent(evt) {
		var target = evt.target;
		
		switch (target.id) {
		case 'btn_typography':
			dst.value = typography.fixText(src.value);
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