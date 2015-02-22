var gulp = require('gulp'),
	sass=require('gulp-sass'),
	min=require('gulp-uglify'),
	concat = require('gulp-concat'),
	karma = require('karma').server;

//just in case you feel so inclined to run karma through gulp...*Shrug*
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('sass',function(){
	gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/styles/'));

});

gulp.task('jsconcat',function(){
	return gulp.src('src/js/*.js')
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('src/js/'));
})

gulp.task('compress', function() {
  gulp.src('src/js/scripts.js')
    .pipe(min())
    .pipe(gulp.dest('public/js'))
});


gulp.task('watch',function(){
	gulp.watch('sass/**',['sass'])
	gulp.watch('public/*.html');
});

gulp.task('scripts',['jsconcat','compress']);
gulp.task('default',['sass','watch']);