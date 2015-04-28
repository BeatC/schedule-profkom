define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	var ResultItemModel = Backbone.Model.extend({
		defaults: {
			title: '',
			schedule: []
		}
	});

	return ResultItemModel;
});