var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// Scripts Tasks
// Uglifies
gulp.task('scripts', function(){
    gulp.src('Source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('App/scripts'))    
});

//Styles Tasks
gulp.task('styles', function(){
    console.log('runs styles');
});

// Default Runs Everything
gulp.task('default', ['scripts', 'styles']);

