define(function () {
	'use strict';
	
	function getRequest(data) {
		var xhr =  new ('onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest),
			baseUrl = 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=';
		
		xhr.open('GET', baseUrl + encodeURIComponent(data), true);
		
		xhr.send();
		
		xhr.onload = function () {
			console.log(xhr.responseText);
		};
	}
	
	/**
	 *	@exports
	 */
	return {
		getRequest: getRequest
	}; 
});