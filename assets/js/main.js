/** CONFIG */
requirejs.config({
	baseUrl: 'assets/js',
	waitSeconds: 0,
	paths: {
		appView: 'Views/AppView',
		appController: 'Controllers/AppController',
		appModel: 'Models/Database',
		clipboard: 'Controllers/modules/clipboard',
		search: 'Controllers/modules/search',
		speller: 'Controllers/modules/spell',
		typography: 'Controllers/modules/typography',
		uglifyjs: 'Controllers/modules/uglifyjs'
	},
	shim: {
		uglifyjs: { exports: 'UglifyJS' },
		speller: { exports: 'Speller' },
		clipboard: { exports: 'Clipboard' }
	}
});

/** INITIAL */
require(['appView', 'appController', 'appModel'], function (View, Controller, databaseAPI) {
	'use strict';
	
	var db = new databaseAPI;
});