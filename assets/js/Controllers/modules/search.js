define(function () {
	'use strict';
	
	// TODO --> Separate logic into several pieces: getting user input, building request to server, result box for search results,
	// parse user input to detect keywords and data structure for request.
	function getRequest(data) {
		var headUrl = 'http://nigma.ru/?s=',
			tailUrl = '&t=img',
			resultBoxWidth = window.innerWidth / 2,
			resultBoxHeight = window.innerHeight,
			resultBox,
			fullUrl;
		
		function transformData(data) {
			return encodeURIComponent(data);
		}
		
		fullUrl = headUrl + transformData(data) + tailUrl;
	
		
		resultBox = window.open(fullUrl, 'resultBox', 'width=' + resultBoxWidth + ',height=' + resultBoxHeight +
					',top=0,left=' + resultBoxWidth + 'location=0,status=0,scrollbars=1');
        
		resultBox.focus();
	}
	
	/**
	 *	@exports
	 */
	return {
		getRequest: getRequest
	}; 
});