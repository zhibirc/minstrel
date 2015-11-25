/** CONFIG */
requirejs.config({
	baseUrl: 'assets/js',
	waitSeconds: 0,
	paths: {
		appView: 'Views/AppView',
		appController: 'Controllers/AppController',
		appModel: 'Models/Database',
		typography: 'Controllers/modules/typography',
		uglifyjs: 'Controllers/modules/uglifyjs',
		search: 'Controllers/modules/search',
		speller: 'Controllers/modules/spell'
	},
	shim: {
		uglifyjs: { exports: 'UglifyJS' },
		speller: { exports: 'Speller' }
	}
});

/** INITIAL */
require(['appView', 'appController', 'appModel'], function (View, Controller, databaseAPI) {
	'use strict';
	
	var db = new databaseAPI;
});