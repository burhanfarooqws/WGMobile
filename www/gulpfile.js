/*!
 *
 * This file contains the code for the SASS and JS automation.
 *
 * @project   VeriBank
 * @date      08-10-2015
 * @author    VeriPark
 * @licensor  VeriPark Gulf
 * @site      www.veripark.com
 *
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');
    //del = require('del');

//task for SASS styles
gulp.task('styles', function() {
    gulp.src('themes/sass/vb-theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('themes/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('themes/css'))
        .pipe(notify({ message: 'SASS task completed' }));
});

//task for JS scripts
gulp.task('scripts', function() {
    //return gulp.src('themes/js/functions/**/*.js')
    gulp.src('themes/js/functions/custom-theme.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('vb-theme.js'))
        .pipe(gulp.dest('themes/js/functions'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('themes/js'))
        .pipe(notify({ message: 'Scripts task completed' }));
});
 

//taks for clean the destination
gulp.task('clean', function(cb) {
    del(['themes/css', 'themes/js'], cb) //to clean out the destination folders and rebuild the files
});

//task for watching the origin 
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('themes/sass/**/*.scss', ['styles']);
    // Watch .js files
    gulp.watch('themes/js/function/**/*.js', ['scripts']);
});

//taks to combine the above mentioned activities
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts');
});
