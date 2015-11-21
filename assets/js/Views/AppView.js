define(['appController'], function (Controller) {
	'use strict';
	
	var doc = document,
		app = doc.getElementById('app_cnt'),
		navBar = doc.getElementById('main_toolbar'),
		searchBox = doc.getElementById('search_input'),
		searchBtn = doc.getElementById('btn_search');
	
	Controller.getNodes({
		src: doc.getElementById('src_input'),
		dst: doc.getElementById('dst_output'),
		srcTrash: doc.getElementById('src_trash'),
		dstTrash: doc.getElementById('dst_trash'),
		searchBox: searchBox,
		overlay: doc.getElementById('pp_overlay'),
		popup: doc.getElementById('pp_info')
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
	
	searchBox.addEventListener('keydown', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
	
	searchBtn.addEventListener('click', function (evt) {
		evt.stopPropagation();
		
		Controller.getEvent(evt);
	}, false);
});