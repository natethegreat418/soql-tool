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
    mix.less('grid/grid.less');
    mix.version([
        'css/app.css',
        'css/grid.css',
        'css/ui-grid.svg']);

    //Scripts
    mix.scriptsIn('resources/assets/js','public/js/app.js');

    //Libraries
    mix.copy('bower_components/angular/angular.js', 'public/js');
    mix.copy('bower_components/lodash/lodash.js', 'public/js');
    mix.copy('bower_components/angular-touch/angular-touch.js', 'public/js');
    mix.copy('bower_components/angular-animate/angular-animate.js', 'public/js');
    mix.copy('bower_components/pdfmake/build/pdfmake.js', 'public/js');
    mix.copy('bower_components/pdfmake/build/vfs_fonts.js', 'public/js');
    mix.copy('bower_components/CSV-JS/csv.js', 'public/js');

    //Grid stuff
    mix.copy('bower_components/angular-ui-grid/ui-grid.js', 'public/js');
    mix.copy('bower_components/angular-ui-grid/ui-grid.min.css', 'public/css');
    mix.copy('bower_components/angular-ui-grid/ui-grid.svg', 'public/css');
    mix.copy('bower_components/angular-ui-grid/ui-grid.ttf', 'public/css');
    mix.copy('bower_components/angular-ui-grid/ui-grid.woff', 'public/css');
    mix.copy('bower_components/angular-ui-grid/ui-grid.eot', 'public/css');


});