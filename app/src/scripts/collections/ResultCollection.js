define([
	'jquery',
	'underscore',
	'backbone',
	'../models/ResultItemModel'
], function ($, _, Backbone, ResultItemModel) {
	
	var ResultCollection = Backbone.Collection.extend({
		model: ResultItemModel
	});

	return ResultCollection

});