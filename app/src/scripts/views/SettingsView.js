define([
	'jquery', 
	'underscore', 
	'backbone',
	'../models/DepartmentModel'
	], function ($, _, Backbone, DepartmentModel) {

		var SettingsView = Backbone.View.extend({
			model: new DepartmentModel(),
			el: $('.sidebar__settings'),
			initialize: function () {
				this.template = _.template($('#sidebarSettings').html()); // Bind to the Underscore template
				this.listenTo(this.model, 'change', this.render);
			},
			events: {
				'click .collapse__btn': 'toggleSettings',
				'change #department': 'changedDepartment',
				'change #section': 'changedSection',
				'change #teacher': 'changedTeacher'
			},
			toggleSettings: function () {
				var collapseControl = $('.settings__collapse .collapse__btn');
					formGroups = $('.settings__form .form__group');
				if (collapseControl.hasClass('is-collapsed')) {
					formGroups.slideUp(300, function () {
						collapseControl.text('Показать настройки');
					});
				} else {
					formGroups.slideDown(300, function () {
						collapseControl.text('Скрыть настройки');
					});
				}
				collapseControl.toggleClass('is-collapsed');
			},
			toggleCategory: function (parent, trigger) {
				var parent = $(parent),
					trigger = $(trigger);
				if(trigger.val() !== 'choose') {
					parent.removeClass('is-hidden');
				}
				else {
					parent.addClass('is-hidden');
				}
			},
			changedDepartment: function () {
				this.toggleCategory('.section', '#department');
			},
			changedSection: function () {
				this.toggleCategory('.teacher', '#section');
			},
			changedTeacher: function () {
				console.log('Finished editing');
			},
			render: function () {
				$('.sidebar__settings').html(this.template({}));
			}
		});

	return SettingsView;
});