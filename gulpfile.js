var gulp = require('gulp'),
	autoprefixer = require( 'gulp-autoprefixer' ),
	sass = require('gulp-sass');
	gulp.task('sass',function(){
		gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'));
	});
	gulp.watch('scss/*.scss',['sass']);
	gulp.task('default',['sass']);