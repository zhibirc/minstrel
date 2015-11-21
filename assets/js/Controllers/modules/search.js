define(function () {
	'use strict';
	
	function getRequest(data) {
		var xhr =  new ('onload' in new XMLHttpRequest()) XMLHttpRequest : XDomainRequest,
			baseUrl = 'https://www.google.com.ua/search?q=',
			tailUrl = '&tbm=isch';
		
		xhr.open('GET', baseUrl + encodeURIComponent(data) + tailUrl, true);
		
		xhr.send();
		
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) {
				return;
			}
			
			if (xhr.status !== 200) {
				console.log(xhr.status, ': ', xhr.statusText);
			} else {
				console.log(xhr.responseText);
			}
		};
	}
	
	/**
	 *	@exports
	 */
	return {
		getRequest: getRequest
	}; 
});