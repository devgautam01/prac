var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var pump = require('pump');
var minify = require('gulp-minify');

gulp.task('start', function(){
	nodemon({
		'script' : 'index.js',
		'ex' : 'js css ejs'
	});
});

gulp.task('compress', function(){
	gulp.src('./assets/js/*.js')
	.pipe(minify()).pipe(gulp.dest('./public/js'));

});

gulp.task('default', ['start', 'compress']);