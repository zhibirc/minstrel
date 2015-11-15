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
require(['appView', 'appController', 'appModel'], function (_view, _controller, databaseAPI) {
	'use strict';
	
	var db = new databaseAPI;
});