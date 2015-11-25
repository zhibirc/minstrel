/** CONFIG */
requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		appView: 'Views/AppView',
		appController: 'Controllers/AppController',
		appModel: 'Models/Database',
		typography: 'Controllers/modules/typography',
		uglifyjs: 'Controllers/modules/uglifyjs',
		search: 'Controllers/modules/search',
		speller: 'Controllers/modules/spell',
		cse: 'Controllers/modules/cse'
	},
	shim: {
		uglifyjs: { exports: 'UglifyJS' },
		speller: { exports: 'Speller' },
		cse: { exports: '__gcse' }
	}
});

/** INITIAL */
require(['appView', 'appController', 'appModel', 'cse'], function (View, Controller, databaseAPI, __gcse) {
	'use strict';
	
	var db = new databaseAPI;
});