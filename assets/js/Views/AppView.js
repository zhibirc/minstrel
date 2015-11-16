define(['appController'], function (_controller) {
	'use strict';
	
	var doc = document,
		navBar = doc.getElementById('main_toolbar');
		
	navBar.addEventListener('click', function (evt) {
		evt.stopPropagation();
		
		_controller.getEvent(evt);
	}, false);
});