define(['appController'], function (Controller) {
	'use strict';
	
	var doc = document,
		fetch = doc.getElementById.bind(doc),
		app = fetch('app_cnt'),
		navBar = fetch('main_toolbar'),
		popupCloseBtn = fetch('pp_info_close');
	
	Controller.getNodes({
		src: fetch('src_input'),
		dst: fetch('dst_output'),
		srcTrash: fetch('src_trash'),
		dstTrash: fetch('dst_trash'),
		srcCopy: fetch('src_copy'),
		dstCopy: fetch('dst_copy'),
		overlay: fetch('pp_overlay'),
		popup: fetch('pp_info'),
		searchBox: fetch('search_box') 
	});
	
	doc.addEventListener('click', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
			
	window.addEventListener('keydown', function (evt) {
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
});