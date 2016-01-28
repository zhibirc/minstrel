define(function () {
	'use strict';

	// Implement logic to get and store selectedWSE (selected Web Search Engine).
	function getRequest(data, selectedWSE) {
		var resultBoxWidth = window.innerWidth / 2,
			resultBoxHeight = window.innerHeight,
			resultBox;
		
		resultBox = window.open(buildSearchRequest(data, selectedWSE), 'resultBox', 'width=' + resultBoxWidth + ',height=' + resultBoxHeight +
					',top=0,left=' + resultBoxWidth + 'location=0,status=0,scrollbars=1');
        
		resultBox.focus();
	}
	
	function buildSearchRequest(data, selectedWSE) {
		var templates = {
			google: [],
			nigma: ['http://nigma.ru/?s=', '&t=img']
		};
		
		return templates[selectedWSE][0] + encodeURIComponent(parseTxt(data)) + templates[selectedWSE][1];
	}
	
	function parseTxt(data) {
		var re = {
			header: /^ *([-a-zа-яё\d ]+)( *\n){2}/i, // Match heading of the text.
		};
		
		
	}
	
	/**
	 *	@exports
	 */
	return {
		getRequest: getRequest
	}; 
});