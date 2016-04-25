var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

gulp.task('browserify', function () {
  gulp.src('src/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});


gulp.task('compass', function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      css: 'dist/styles',
      sass: 'src/styles'
    }))
    .on('error', function(error) {
      // Would like to catch the error here
      console.log(error);
      this.emit('end');
    })
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('copy', function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['compass', 'browserify', 'copy']);

gulp.task('watch', function (){
	gulp.watch('src/**/*.*', ['default']);
});
