var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');
    
// Scripts Tasks
// Uglifies
gulp.task('scripts', function(){
    gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'Source/js/*.js'])
    .pipe(concat('main.js'))        
    .pipe(uglify())
    .pipe(gulp.dest('App/scripts'));
});

//Styles Tasks
gulp.task('styles', function(){
    console.log('runs styles');
});

//SCSS Tasks
gulp.task('sass', function(){
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'Source/scss/main.scss'])
    //.pipe(sass().on('error', sass.logError))
    .pipe(sass({
        outputStyle: 'compressed'
        }).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('App/styles'));
});

gulp.task('images', function() {
    return gulp.src('Source/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('App/images'))
})

gulp.task('sass:watch', function () {
  gulp.watch('Source/scss/*.scss', ['sass']);
});

gulp.task('watch', function() {
    gulp.watch('Source/js/*.js', ['scripts']);
    gulp.watch('Source/scss/**/*.scss', ['sass']);
    gulp.watch('Source/images/**', ['images']);
});

// Default Runs Everything
gulp.task('default', ['scripts', 'styles', 'sass', 'images']);

