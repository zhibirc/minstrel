define(function () {
	'use strict';
	
	function getRequest(data) {
		var headUrl = 'http://nigma.ru/?s=',
			tailUrl = '&t=img',
			resultBox,
			url;
		
		function transformData(data) {
			return encodeURIComponent(data);
		}
		
		url = headUrl + transformData(data) + tailUrl;
		
		resultBox = window.open(url, "nigmaSerachWindow", "width=750,height=650,top=30,location=1,status=1,scrollbars=1");
        
		resultBox.focus();
	}
	
	/**
	 *	@exports
	 */
	return {
		getRequest: getRequest
	}; 
});