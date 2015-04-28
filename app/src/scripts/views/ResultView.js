define([
	'jquery',
	'underscore',
	'backbone',
	'../collections/ResultCollection'
	'../models/ResultItemModel'
], function ($, _, Backbone, ResultCollection, ResultItemModel) {

	var ResultView = Backbone.View.extend({
		model: new ResultCollection(),
		initialize: function () {},
		render: function () {
			var that = this;
			_.each(this.model, function (el, index) {
				var resultItem = new ResultItemModel({model: el});
				that.$el.append(resultItem.render().$el);
			});
		}
	});

	return ResultView;
});