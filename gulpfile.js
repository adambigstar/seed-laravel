var gulp = require('gulp');
var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy('node_modules/jquery/**', 'public/node_modules/jquery/**');
    mix.copy('node_modules/bootstrap/**', 'public/node_modules/bootstrap/**');
    mix.copy('node_modules/angular/**', 'public/node_modules/angular/**');
    mix.copy('node_modules/angular-ui-router/**', 'public/node_modules/angular-ui-router/**');

    mix.sass('app.scss');

    mix.styles([
          'app.css',
      ], 'public/css/app.css'
    );

    mix.scripts([
          'base-modules.js',
          'app.js',
          'controllers/app-controller.js',
          'controllers/film.js',
      ], 'public/js/app.js'
    );


    mix.copy('resources/assets/images/**', 'public/images');
    mix.copy('resources/assets/fonts/**', 'public/fonts');

    mix.version('css/app.css');
    mix.version('js/app.js');

});

gulp.task('serve', function() {

    // start the php server
    // make sure we use the public directory since this is Laravel
    php.server({
        base: './public'
    });
});
