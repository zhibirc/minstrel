define(['appController'], function (Controller) {
	'use strict';
	
	var doc = document,
		navBar = doc.getElementById('main_toolbar');
		
	navBar.addEventListener('click', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
});