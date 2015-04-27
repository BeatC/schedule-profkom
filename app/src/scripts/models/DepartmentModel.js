define(function () {
	var DepartmentModel = Backbone.Model.extend({
		defaults: {
			department: '',
			sections: [],
			teachers: []
		}
	});

	return DepartmentModel;
});