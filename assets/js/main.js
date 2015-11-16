/** CONFIG */
requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		appView: 'Views/AppView',
		appController: 'Controllers/AppController',
		appModel: 'Models/Database',
		typography: 'Controllers/modules/typography',
		uglifyjs: 'Controllers/modules/uglifyjs'
	},
	shim: {
		uglifyjs: { exports: 'UglifyJS' }
	}
});

/** INITIAL */
require(['appView', 'appController', 'appModel'], function (_view, _controller, databaseAPI) {
	'use strict';
	
	var db = new databaseAPI;
});