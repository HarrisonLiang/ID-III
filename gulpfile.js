var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

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

//SCSS Tasks
gulp.task('sass', function(){
    return gulp.src('Source/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('App/styles'))
});

// Default Runs Everything
gulp.task('default', ['scripts', 'styles', 'sass']);

