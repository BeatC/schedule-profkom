define([
	'jquery', 
	'underscore', 
	'backbone'
], function ($, _, Backbone) {
	var MenuItemModel = Backbone.Model.extend({
		defaults: {
			glyph: '',
			title: 'List item'
		}
	});
	
	return MenuItemView;
});