/// <reference path="../../typings/index.d.ts" />

'use strict'
var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../gulp.configs/config.gulp.js');
var names = require('../gulp.configs/names.gulp.js');

gulp.task(names.compileSass, () => {
    return gulp.src(config.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.buildLocations.css));
});