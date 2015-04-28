// app.js - Bootstrapping file for schedule-profkom project

// Configuring dependencies for require.js

require.config({
	paths: {
		'jquery': '../../vendor/jquery/dist/jquery.min',
		'underscore': '../../vendor/underscore/underscore-min',
		'backbone': '../../vendor/backbone/backbone'
	}
});

require(['models/DepartmentModel', 'views/SettingsView', 'underscore', 'jquery', 'backbone'], function (DepartmentModel, SettingsView, _, $, Backbone) {
	var Application = Application || {};

	var SearchModel = Backbone.Model.extend({
		defaults: {
			query: ''
		}
	});

	var Search = Backbone.View.extend({
		model: new SearchModel(),
		initialize: function () {},
		events: {
			'change input:text': 'changeQuery'
		},
		changeQuery: function () {

		},
		render: function () {},
	});

	var mod = new DepartmentModel();
	var settings = new SettingsView();
	settings.render();
});