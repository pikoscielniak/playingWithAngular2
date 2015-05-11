var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

var htmlPath = './**/*.html';
var jsPath = './**/*.js';

gulp.task('watch', function () {
    watch(htmlPath).pipe(connect.reload());
    watch(jsPath).pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server(({
        root: '.',
        livereload: true,
        port: 3333
    }));
});

gulp.task('default', ['connect', 'watch']);