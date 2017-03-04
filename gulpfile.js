var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('www')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

