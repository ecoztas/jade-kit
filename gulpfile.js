var gulp    = require('gulp');
var jade    = require('gulp-jade');

gulp.task('jade', function() {
    gulp.src('*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
});