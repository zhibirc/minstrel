define(function () {
	'use strict';
	
	function getRequest(data, searchBox) {
		var iframe = searchBox,
			headUrl = 'http://www.google.com.ua/search?q=',
			tailUrl = '&source=lnms&tbm=isch';
		
		function transformData(data) {
			return encodeURIComponent(data);
		}
		
		iframe.src = headUrl + transformData(data) + tailUrl;
		iframe.className = '';
	}
	
	/**
	 *	@exports
	 */
	return {
		getRequest: getRequest
	}; 
});