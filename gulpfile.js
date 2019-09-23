/**
 * -----------------------------------------------------------------------------
 * gulpfile.js
 * Author: Emre Can ÖZTAŞ <me@emrecanoztas.com>
 * -----------------------------------------------------------------------------
 */
// DEFINE: Package(s).
var gulp = require('gulp');
var jade = require('gulp-jade');

// TASK: Default
gulp.task('default', function () {
    console.log('Works fine!');
});

// TASK: JADE
gulp.task('jade', function () {
    return (
        gulp.src('./view/*.jade')
            .pipe(jade({
                pretty: true
            }))
            .pipe(gulp.dest('./'))
    );
});