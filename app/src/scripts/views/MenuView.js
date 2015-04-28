define([
	'jquery',
	'underscore',
	'backbone',
	'../collections/MenuCollection'
], function ($, _, Backbone, MenuCollection) {
	var MenuView = Backbone.View.extend({
		model: new MenuCollection(),
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},
		$el: '.nav__list',
		render: function () {
			var that = this;
			_.each(this.model, function (model, index) {
				var menuItem = new MenuItem(model);
				that.$el.append(MenuItem.render());
			});
			return this;
		}
	});

	return MenuView;
});