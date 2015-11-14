/** CONFIG */
requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		appView: 'Views/AppView',
		appController: 'Controllers/AppController',
		appModel: 'Models/Database',
		typography: 'Controllers/modules/typography'
	}
});

/** INITIAL */
require(['appModel', 'appController'], function (databaseAPI, _controller) {
	'use strict';
	
	var db = new databaseAPI;
});