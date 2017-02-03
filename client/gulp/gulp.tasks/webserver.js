/// <reference path="../../typings/index.d.ts" />
'use strict'
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config = require('../gulp.configs/config.gulp.js');
var names = require('../gulp.configs/names.gulp.js');

gulp.task(names.webserver, function() {
  gulp.src('')
    .pipe(webserver({
      fallback: 'index.html',
      open: true
    }));
});