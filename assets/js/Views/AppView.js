define(['appController'], function (Controller) {
	'use strict';
	
	var doc = document,
		navBar = doc.getElementById('main_toolbar'),
		app = doc.getElementById('app_cnt');
		
	navBar.addEventListener('click', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
	
	app.addEventListener('click', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
	
	app.addEventListener('input', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
});