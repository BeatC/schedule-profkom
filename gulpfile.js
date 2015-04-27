var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	sourcemap = require('gulp-sourcemaps');

gulp.task('server', function () {
	connect.server({
		root: 'app',
		port: 1337,
		livereload: true
	});
});

gulp.task('styles', function () {
	gulp.src('./app/src/styles/main.scss')
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./app/dist/css'))
		.pipe(connect.reload());
});

gulp.task('views', function () {
	gulp.src('./app/src/views/*.html')
		.pipe(gulp.dest('./app/dist'))
		.pipe(connect.reload());
});

gulp.task('scripts', function () {
	gulp.src('./app/src/scripts/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./app/dist/js'));
})

gulp.task('watch', function () {
	gulp.watch('./app/src/views/*.html', ['views']);
	gulp.watch('./app/src/styles/*.scss', ['styles']);
	gulp.watch('./app/src/scripts/**/*.js', ['scripts']);
});

gulp.task('test', function () {

});

gulp.task('build',[]);

gulp.task('default', ['server', 'views', 'styles', 'scripts', 'watch']);