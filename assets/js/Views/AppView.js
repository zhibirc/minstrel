define(['appController'], function (Controller) {
	'use strict';
	
	var doc = document,
		app = fetch('app_cnt'),
		navBar = fetch('main_toolbar'),
		popupCloseBtn = fetch('pp_info_close');
	
	function fetch(id) {
        return doc.getElementById(id);
    }
	
	Controller.getNodes({
		src: fetch('src_input'),
		dst: fetch('dst_output'),
		srcTrash: fetch('src_trash'),
		dstTrash: fetch('dst_trash'),
		overlay: fetch('pp_overlay'),
		popup: fetch('pp_info'),
		searchBox: fetch('search_box') 
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