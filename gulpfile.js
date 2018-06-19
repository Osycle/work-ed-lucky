


var gulp 					= require('gulp'),
		del							= require('del'),
		browserSync 		= require('browser-sync'),
		sass 						= require('gulp-sass'),
		concat					= require('gulp-concat'),
		uglify					= require('gulp-uglifyjs'),
		cssnano					= require('gulp-cssnano'),
		rename					= require('gulp-rename'),
		imagemin				= require('gulp-imagemin'),
		cache						= require('gulp-cache'),
		autoprefixer		= require('gulp-autoprefixer');
		
var app = "app";



// SASS
gulp.task('sass', () =>
	{
	return gulp.src( app+'/scss/**/*.+(scss|sass)' )
			.pipe( sass().on('error', sass.logError) )
			.pipe( autoprefixer( {browsers: 'last 15 versions', cascade: false} ) )
			.pipe( gulp.dest(app+'/css/') )
			.pipe( browserSync.reload({stream:true}) );
	}
);


// STYLES
gulp.task('cssnano', ['sass'], () =>
	{
		return gulp.src(app+'/css/style.css')
		.pipe( cssnano({ reduceIdents :  false }) )
		.pipe(rename({suffix: '.min'}) )
		.pipe( gulp.dest(app+'/css/') ); //css default
	}
);

// RELOADER BROWSER
gulp.task('browser-sync', () =>
	{
		browserSync({
			server: {baseDir: app+''},
			//proxy: "http://",
			notify: false
		});
	}
);

// CLEAN DIR
gulp.task('clean', () =>
	{ return del.sync( 'dist/' ); }
);
// CLEAR
gulp.task('clear', () => 
	{
		return cache.clearAll();
	} 
)

// WATCHING
gulp.task('watch', ['browser-sync', 'cssnano'], () =>
	{
		setTimeout(function() {
			gulp.watch(app+'/scss/**/*.+(scss|sass)', ['sass']);
		}, 500);
		gulp.watch(app+'/*.html', browserSync.reload);
		gulp.watch(app+'/**/*.php', browserSync.reload);
		gulp.watch(app+'/templates/**/*.tpl', browserSync.reload);
		gulp.watch(app+'/js/**/*.js', browserSync.reload);

	}
);



// PROD-BUILD
// this.array -> 'img' default
gulp.task('build', ['clean', 'cssnano', 'sass'], () =>

	{
		var css 	= gulp.src(app+'/css/main.min.css').pipe( gulp.dest( 'dist/css/' ) );
		var html 	= gulp.src(app+'/*.+(html|php)').pipe( gulp.dest('dist/') );
	}

);