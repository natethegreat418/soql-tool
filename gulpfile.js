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
    mix.less('app.less');
    mix.scriptsIn('resources/assets/js','public/js/app.js');

    //libraries
    mix.copy('bower_components/angular/angular.js', 'public/js');
    mix.copy('bower_components/lodash/lodash.js', 'public/js');
    mix.copy('bower_components/angular-touch/angular-touch.js', 'public/js');

    //ui-grid
    mix.copy('bower_components/angular-ui-grid/ui-grid.js', 'public/js');
    mix.copy('bower_components/angular-ui-grid/ui-grid.min.css', 'public/css');
    mix.copy('bower_components/angular-ui-grid/ui-grid.svg', 'public/css');
    mix.copy('bower_components/angular-ui-grid/ui-grid.ttf', 'public/css');
    mix.copy('bower_components/angular-ui-grid/ui-grid.woff', 'public/css');
    mix.copy('bower_components/angular-ui-grid/ui-grid.eot', 'public/css');


});