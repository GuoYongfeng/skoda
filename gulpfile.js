var gulp = require('gulp');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var reactify = require('reactify');

var paths = {
  css: ['less/*.less'],
  js: ['static/js/*.js'],
};

gulp.task('less', function () {
    gulp.src(paths.css)
        .pipe(less())
        .pipe(gulp.dest('static/css'));
});

gulp.task('watch', function () {
    gulp.watch(paths.css, ['less']);
    // gulp.watch(paths.js, ['js']);
});

gulp.task('images', function(){
    gulp.src('static/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('static/images'));
});


gulp.task('serve', function() {
    browserSync({
    	files: ['views/*.html', 'static/css/*.css', 'static/js/*.js'],
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['watch', 'serve', 'images']);

