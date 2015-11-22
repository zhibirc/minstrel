define(function () {
	'use strict';
	
	function getRequest(data) {
		var xhr =  new ('onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest),
			baseUrl = 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=';
			
		data = encodeURIComponent(data).trim();
	}
	
	/**
	 *	@exports
	 */
	return {
		getRequest: getRequest
	}; 
});