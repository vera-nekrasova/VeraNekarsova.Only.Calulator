const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const webStream = require('webpack-stream');
const webpack = require('webpack');

const isDev = (process.argv.includes('--dev'));
const isProd = !isDev;
const isSync = (process.argv.includes('--sync'));

let webpackConfig = {
	output: {
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	},
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'eval-source-map' : 'none'
}

function clear(){
	return del('build/*');
}

function styles(){
	return gulp.src('./src/css/style.scss')
			   .pipe(gulpif(isDev, sourcemaps.init()))
			   .pipe(sass())
			   .pipe(autoprefixer({
		            overrideBrowserlist: ['> 0.1%'],
		            cascade: false
		        }))
			   .pipe(gulpif(isProd, cleanCSS({
			   		level: 2
			   })))
			   .pipe(gulpif(isDev, sourcemaps.write()))
			   .pipe(gulp.dest('./build/css'))
}

function html() {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('./build'))
}

function js() {
	return gulp.src('./src/js/script.js')
		.pipe(webStream(webpackConfig))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream())
}

function watch(){
	if(isSync){
		browserSync.init({
	        server: "./build/",
		});
	}

	gulp.watch('./src/**/*.scss', styles).on("change", browserSync.reload);
	gulp.watch('./src/**/*.html', html).on("change", browserSync.reload);
	gulp.watch('./src/**/*.js', js)

}

let build = gulp.series(clear, 
	gulp.parallel(styles, html, js)
);

gulp.task('build', build);
gulp.task('watch', gulp.series(build, watch));