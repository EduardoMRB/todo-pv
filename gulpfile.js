var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var paths = {
  styles: ['public/assets/css/*.css', 'bower_components/*/*.min.css'],
  scripts: ['public/assets/js/*.js', 'bower_components/jquery/jquery.min.js']
};

gulp.task('scripts', function () {
  gulp.src(paths.scripts)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/assets'))
    .pipe(rename('compiled.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets'));
});

gulp.task('styles', function () {
  gulp.src(paths.styles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/assets'))
    .pipe(rename('styles.css'))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets'));
});


gulp.task('watch', function () {
  gulp.watch('public/assets/js/*.js', 'bower_components/*/*.min.js', ['scripts']);
}); 

gulp.task('default', ['scripts', 'watch', 'styles']);
