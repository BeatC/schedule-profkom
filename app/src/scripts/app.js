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

	var MenuItemModel = Backbone.Model.extend({
		defaults: {
			glyph: '',
			title: 'List item'
		}
	});

	var MenuCollection = Backbone.Collection.extend({
		model: MenuItemModel
	});

	var mainMenuModel = new MenuCollection();
	mainMenuModel.add(new MenuItemModel({
		title: 'Спорткомплекс'
	}));

	mainMenuModel.add(new MenuItemModel({
		title: 'Дворец студентов'
	}));

	//
/*
	var MenuItem = Backbone.View.extend({
		model: new MenuItemModel(),
		initialize: function () {
			this.template = _.template('#menuItem'); // TODO: get template
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

	var MainMenu = Backbone.View.extend({
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
		}
	});

	var mainMenu = new MainMenu(/*{model: mainMenuModel}*///);
	//mainMenu.render();
	//*/

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

	var ResultItemModel = Backbone.Model.extend({
		defaults: {
			title: '',
			schedule: []
		}
	});

	var ResultsCollection = Backbone.Collection.extend({
		model: ResultItemModel
	});

	var ResultItem = Backbone.View.extend({
		model: new ResultItemModel(),
		initialize: function () {

		},
		events: {

		},
		render: function () {

		}
	});

	var Results = Backbone.View.extend({
		model: new ResultsCollection(),
		initialize: function () {},
		render: function () {
			var that = this;
			_.each(this.model, function (el, index) {
				var resultItem = new ResultItem({model: el});
				that.$el.append(resultItem.render().$el);
			});
		}
	});

	var mod = new DepartmentModel();
	var settings = new SettingsView();
	settings.render();
});