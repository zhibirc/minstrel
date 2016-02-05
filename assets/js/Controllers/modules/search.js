define(function () {
	'use strict';

	function getRequest(data, selectedWSE) {
		var resultBoxWidth = window.innerWidth / 2,
			resultBoxHeight = window.innerHeight,
			resultBox;
		
		resultBox = window.open(buildSearchRequest(data, selectedWSE), 'resultBox',
		['width=', resultBoxWidth, ',height=', resultBoxHeight, ',top=0,left=', resultBoxWidth, 'status=0'].join(''));
        
		resultBox.focus();
	}
	
	function buildSearchRequest(data, selectedWSE) {
		var templates = {
				google: ['https://encrypted.google.com/search?q=', '&source=lnms&tbm=isch'],
				nigma: ['http://nigma.ru/?s=', '&t=img']
			};
		
		return templates[selectedWSE][0] + encodeURIComponent(parseTxt(data)) + templates[selectedWSE][1];
	}
	
	function parseTxt(data) {
		var re = {
			header: /^ *([-a-zа-яё\d ]+) *\n{1,2}/i, // Match heading of the text.
		};
		
		if (re.header.test(data)) return data.match(re.header)[1];
	}
	
	/**
	 *	@exports
	 */
	return {
		getRequest: getRequest
	}; 
});