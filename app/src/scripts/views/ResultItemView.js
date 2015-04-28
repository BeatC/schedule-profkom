define([
	'jquery',
	'underscore',
	'backbone',
	'../models/ResultItemModel'
], function ($, _, Backbone, ResultItemModel) {

	var ResultItemView = Backbone.View.extend({
		model: new ResultItemModel(),
		initialize: function () {

		},
		events: {

		},
		render: function () {

		}
	});

	return ResultItemView;
});