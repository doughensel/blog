var gulp  = require('gulp'),
	babel = require('gulp-babel');



gulp.task('default', function(){ console.log( 'gulp is running' ); });

gulp.task('babel', function(){
	return gulp.src('src/js/test.js')
			   .pipe(babel())
			   .pipe(gulp.dest('dist/js'));
});