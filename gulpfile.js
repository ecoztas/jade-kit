// Package(s).
var gulp    = require('gulp');
var jade    = require('gulp-jade');

// Setting(s).
var dev = {
	'jade': [
		{
			'src': 'jade-kit/*.jade',
			'dist': './',
			'task-name': 'jade'
		}
	]
};

// TASK 0: Default
gulp.task('default', function() {
    console.log('Works fine!');
});

// TASK 1: Jade
gulp.task(dev.jade[0]['task-name'], function() {
	return(
		gulp.src(dev.jade[0]['src'])
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(dev.jade[0]['dist']))
	);
});