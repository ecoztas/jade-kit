// Package(s).
var gulp = require('gulp');
var jade = require('gulp-jade');

// TASK 0: Default
gulp.task('default', function () {
	console.log('Works fine!');
});

// TASK 1: Jade
gulp.task('jade', function () {
	return (
		gulp.src('./*.jade')
			.pipe(jade({
				pretty: true
			}))
			.pipe(gulp.dest('./'))
	);
});