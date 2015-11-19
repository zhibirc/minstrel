define(['appController'], function (Controller) {
	'use strict';
	
	var doc = document,
		app = doc.getElementById('app_cnt'),
		navBar = doc.getElementById('main_toolbar');
	
	Controller.getNodes({
		src: doc.getElementById('src_input'),
		dst: doc.getElementById('dst_output'),
		srcTrash: doc.getElementById('src_trash'),
		dstTrash: doc.getElementById('dst_trash'),
		overlay: doc.querySelector('.pp-overlay'),
		popup: doc.querySelector('.pp-info')
	});
	
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
		console.time('l0');
		Controller.getEvent(evt);
		console.timeEnd('l0');
	}, false);
});