define([
'jquery',
'underscore',
'backbone',
'../models/MenuItemModel'
], function ($, _, Backbone, MenuItemModel) {
	
	var MenuCollection = Backbone.Collection.extend({
		model: MenuItemModel
	});

	return MenuCollection;
});