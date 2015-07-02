var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
jshint = require('gulp-jshint'),
coffee = require('gulp-coffee'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
clean = require('gulp-clean'),
concat = require('gulp-concat'),
notify = require('gulp-notify'),
cache = require('gulp-cache'),
plumber = require('gulp-plumber'),
browserSync = require('browser-sync'),
gutil = require('gulp-util'),
changed = require('gulp-changed'),
cp = require('child_process'),
runSequence = require('run-sequence');

gulp.task('reloadSASS', function() {
return runSequence('buildSass','compileCSS');
});

gulp.task('reloadCSS', function() {
return runSequence('buildCSS','compileCSS');
});

gulp.task('cleanCSS', function() {
return gulp.src(['_site/css/*.css'], {read: false})
.pipe(clean());
});

gulp.task('cleanJS', function() {
return gulp.src(['_site/js/*.js'], {read: false})
.pipe(clean());
});


gulp.task('buildSass', function() {
return gulp.src(['css/custom/sass/*.scss'])
// .pipe(changed('_site/css/custom/sass'))
.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
.pipe(sass())
// .pipe(gulp.dest('stylesheets'))
// .pipe(minifycss())
// .pipe(gulp.dest('stylesheets'))
.pipe(gulp.dest('_site/css/custom/sass'));
// .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('compileCSS',['cleanCSS'],function() {
    return gulp.src('_site/css/**/*.css')
       	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }).on('error',gutil.log))
		.pipe(rename({suffix: '.min'}))
		// .pipe(minifycss())
		.pipe(concat('complete.min.css'))
        .pipe(gulp.dest('_site/css'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('buildCSS',function() {
    return gulp.src('css/custom/css/*.css')
    // .pipe('_site/css/custom/css')
    .pipe(gulp.dest('_site/css/custom/css'));
});

gulp.task('grindBeans', function() {
	return gulp.src('js/custom/coffee/*.coffee')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(coffee({bare: true})
	.on('error', gutil.log))
	.pipe(gulp.dest('_site/js/custom/coffee'));
});

gulp.task('brewCoffee', function() {
	return runSequence('grindBeans','compileJS');
});


gulp.task('compileJS',['cleanJS'], function() {
	// return gulp.src('_site/js/**/*.js')
	return gulp.src(['./_site/js/vendor/*.js','./_site/js/plugins/*.js','./_site/js/custom/js/*.js','./_site/js/custom/coffee/*.js'])
	// .pipe(clean())
	// .pipe(jshint('.jshintrc'))
	// .pipe(jshint.reporter('default'))
	.pipe(concat('all.js'))
	.pipe(gulp.dest('_site/js'))
	.pipe(browserSync.reload({stream:true}));
// .pipe(rename({suffix: '.min'}))
// .pipe(uglify())
// .pipe(gulp.dest('javascripts'))
// .pipe(notify({ message: 'Scripts task complete' }));
});


 gulp.task('copyJS',function() {
    return gulp.src('js/custom/js/*.js')
    // .pipe('_site/js/custom/coffee/js')
    .pipe(gulp.dest('_site/js/custom/js/'));
});


/**
* Build the Jekyll Site
*/
gulp.task('jekyll-build', function (done) {
// browserSync.notify('Building Jekyll');
return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
.on('close', done);
});

/**
* Rebuild Jekyll & do page reload
*/
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
return runSequence(['buildSass','brewCoffee']);
// browserSync.reload();
});

/**
* Wait for jekyll-build, then launch the Server
*/
gulp.task('browser-sync', function() {
browserSync.init(null, {
server: {
baseDir: '_site'
},
host: "localhost"
});
});

gulp.task('watch', function() {
// Watch .sass files
gulp.watch('css/**/*.scss', ['buildSass']);
gulp.watch('css/**/*.css', ['buildCSS']);
gulp.watch('_site/css/**/*.css', ['compileCSS']);

// Watch .js files
gulp.watch('js/**/*.coffee', ['brewCoffee']);
gulp.watch('js/custom/js/*.js', ['copyJS']);
gulp.watch('_site/js/custom/**/*.js', ['compileJS']);
gulp.watch(['**/*.md', '_includes/*.html','_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['jekyll-build'], function() {
// gulp.start('brewCoffee','watch','browser-sync');
return runSequence(['buildSass','brewCoffee'],['browser-sync'],'compileCSS');
});
