define(['typography'], function (typography) {
	'use strict';
	
	var doc = document,
		src = doc.getElementById('src_input'),
		dst = doc.getElementById('dst_output');
		
	function getEvent(evt) {
		var target = evt.target;
		
		switch (target.id) {
		case 'btn_typography':
			dst.value = typography.fixText(src.value);
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