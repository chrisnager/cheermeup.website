var gulp = require('gulp'),
    express = require('express'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    connectLivereload = require('connect-livereload'),
    tinylr = require('tiny-lr')(),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    sourcemaps = require('gulp-sourcemaps'),
    server = require('./server'),
    config = require('./.env' + (process.env.NODE_ENV ? '.' + process.env.NODE_ENV : '') + '.js');

var onError = function(err) {
    console.error(err.message);
}

function notifyLiveReload(event) {
  var fileName = path.relative(__dirname + 'src/', event.path);
  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('express', function() {
    var app = express();
    app.use(connectLivereload({port: config.lrport}));
    app.use(express.static(__dirname + '/dist'));
    app.listen(config.port);
});

gulp.task('livereload', function() {
  tinylr.listen(config.lrport);
});

gulp.task('browserify', function() {
  gulp.src(['src/js/app.js'])
  .pipe(browserify({}).on('error', gutil.log))
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
});

var getBundleName = function () {
  var version = require('./package.json').version;
  var name = require('./package.json').name;
  return version + '.' + name + '.' + 'min';
};

gulp.task('javascript', function () {
  // transform regular node stream to gulp (buffered vinyl) stream 
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src('./src/js/app.js')
    .pipe(browserified).on('error', onError)
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('sass', function() {
  gulp.src('src/scss/**/*.scss')
  .pipe(sass({style: 'compressed' }).on('error', gutil.log))
  .pipe(gulp.dest('dist/css/'))
});

gulp.task('mv-html', function() {
  gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], [
    'javascript'
  ]);
  gulp.watch(['src/**/*.scss'], [
    'sass'
  ]);
  gulp.watch(['src/**/*.html'], [
    'mv-html'
  ]);
  gulp.watch('./dist/**').on('change', notifyLiveReload);
});

gulp.task('dist', ['sass', 'mv-html', 'javascript'], function() {
  console.log( "Dist built @ " + new Date());
});

gulp.task('default', ['express', 'livereload', 'watch'], function() {
  console.log("Running @ http://localhost:" + config.port);
});
