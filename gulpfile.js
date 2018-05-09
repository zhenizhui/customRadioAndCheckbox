var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('clean-css', function () {
  return gulp.src('./dist', {read: false}).pipe(clean());
});

gulp.task('buildLess', ['clean-css'], function () {
  return gulp.src([
    './src/less/radio/radio.less',
    './src/less/checkbox/checkbox.less'
  ])
  .pipe(less({
    paths: [path.join(__dirname, 'less', 'includes')]
  }))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist/'))
  .pipe(cleanCSS())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./dist'));
});