define([
	'jquery', 
	'underscore', 
	'backbone',
	'../models/MenuItemModel'
], function ($, _, Backbone, MenuItemModel) {
	var MenuItemView = Backbone.View.extend({
		model: new MenuItemModel(),
		initialize: function () {
			this.template = _.template('#menuItem');
			this.listenTo(this.model, 'change', this.render);
		},
		events: {
			'click li': 'clickItem'
		},
		clickItem: function (event) {
			console.log('Clicked');
		},
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	return MenuItemView;
});