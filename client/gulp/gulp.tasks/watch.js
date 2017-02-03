/// <reference path="../../typings/index.d.ts" />

var gulp = require('gulp');
var config = require('../gulp.configs/config.gulp.js');
var compileTs = 'build:compileTs';
var compileSass = 'build:compilesass';
var names = require('../gulp.configs/names.gulp.js')

gulp.task(names.runWatch, () => {
    gulp.watch(config.typescript.source, [names.compileTs]);
    gulp.watch(config.sass.src, [names.compileSass]);
});