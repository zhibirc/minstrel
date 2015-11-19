/** CONFIG */
requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		appView: 'Views/AppView',
		appController: 'Controllers/AppController',
		appModel: 'Models/Database',
		typography: 'Controllers/modules/typography',
		uglifyjs: 'Controllers/modules/uglifyjs',
		search: 'Controllers/modules/search'
	},
	shim: {
		uglifyjs: { exports: 'UglifyJS' }
	}
});

/** INITIAL */
require(['appView', 'appController', 'appModel'], function (View, Controller, databaseAPI) {
	'use strict';
	
	var db = new databaseAPI;
});