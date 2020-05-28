const gulp        = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("sass/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch("*.html").on("change", browserSync);
});

gulp.task('default', gulp.parallel('server','styles','watch'));


