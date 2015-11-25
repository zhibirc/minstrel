define(['appController'], function (Controller) {
	'use strict';
	
	var doc = document,
		app = doc.getElementById('app_cnt'),
		navBar = doc.getElementById('main_toolbar'),
		popupCloseBtn = doc.getElementById('pp_info_close');
	
	Controller.getNodes({
		src: doc.getElementById('src_input'),
		dst: doc.getElementById('dst_output'),
		srcTrash: doc.getElementById('src_trash'),
		dstTrash: doc.getElementById('dst_trash'),
		overlay: doc.getElementById('pp_overlay'),
		popup: doc.getElementById('pp_info'),
		searchBox: doc.getElementById('search_box') 
	});
	
	app.addEventListener('click', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
	
	app.addEventListener('input', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
	
	navBar.addEventListener('click', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
	
	popupCloseBtn.addEventListener('click', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
});