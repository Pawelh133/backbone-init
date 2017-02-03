/// <reference path="./typings/index.d.ts"/>
'use strict'
var gulp = require('gulp');
var gulpWatch = require('gulp-watch')
var requireDir = require('require-dir');
var config = require('./gulp/gulp.configs/config.gulp.js');
var names = require('./gulp/gulp.configs/names.gulp.js');
requireDir('./gulp/gulp.tasks');

gulp.task(names.webBuild, [names.compileSass]);
gulp.task(names.webrun, [names.compileSass, names.webserver]);