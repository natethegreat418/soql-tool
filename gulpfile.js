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
    //Styles
    mix.less('app/app.less');
    mix.less('font-awesome/font-awesome.less');
    mix.version([
        'css/app.css',
        'css/font-awesome.css',
        'js/app.js']);

    //Scripts
    mix.scriptsIn('resources/assets/js','public/js/app.js');

    //Libraries
    mix.copy('bower_components/angular/angular.js', 'public/js');
    mix.copy('bower_components/lodash/lodash.js', 'public/js');
    mix.copy('bower_components/angular-touch/angular-touch.js', 'public/js');
    mix.copy('bower_components/angular-animate/angular-animate.js', 'public/js');
    mix.copy('bower_components/angular-sanitize/angular-sanitize.js', 'public/js');
    mix.copy('bower_components/ng-csv/build/ng-csv.js', 'public/js');

    //Assets
    mix.copy('bower_components/font-awesome/fonts', 'public/fonts/font-awesome');
    mix.copy('resources/assets/fonts', 'public/fonts');
    mix.copy('resources/assets/patterns', 'public/patterns');
});