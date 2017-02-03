/// <reference path="../../typings/index.d.ts" />

'use strict'
var gulp = require('gulp');
var order = require('gulp-order');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var config = require('../gulp.configs/config.gulp.js');
var tsconfig = ts.createProject('./tsconfig.json');
var names = require('../gulp.configs/names.gulp.js');

gulp.task(names.compileTs, () => {
    return gulp.src(config.typescript.src)
        .pipe(order([
            '**/*.App.ts',
            '**/*.Module.ts',
            '**.ts'
        ]))
        .pipe(sourcemaps.init())
        .pipe(ts(tsconfig)).js
        .pipe(concat('main.lib.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.buildLocations.ts));
});

gulp.task(names.compileSass, () => {
    return gulp.src(config.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.buildLocations.css));
});