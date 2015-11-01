var gulp = require('gulp')
  , sass = require('gulp-sass')
  , minifyCss = require('gulp-minify-css')
  , sourcemaps = require('gulp-sourcemaps')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src([
    'public/assets/js/**/*.js',
    '!public/assets/js/scripts.js',
    '!public/assets/js/vendor.js',
  ])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('vendor', function() {
  return gulp.src([
    'public/assets/vendor/jquery/dist/jquery.js',
    'public/assets/vendor/bootstrap-sass/assets/javascripts/bootstrap.js',
  ])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('sass', function () {
  gulp.src('./public/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('watch', function() {

  gulp.watch( [
    'public/assets/js/**/*.js',
    '!public/assets/js/scripts.js',
    '!public/assets/js/vendor.js',
  ], [ 'scripts' ] );

  gulp.watch( [
    './public/assets/scss/**/*.scss'
  ], [ 'sass' ] );

});

gulp.task( 'default', [ 'sass', 'scripts', 'vendor', 'watch' ] );
gulp.task( 'build', [ 'sass', 'scripts', 'vendor'] );
