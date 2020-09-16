const mix = require('laravel-mix')
const path = require('path')
require('laravel-mix-tailwind');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .tailwind()

if (process.env.NODE_ENV === 'production') {
    mix.version()
}

mix.webpackConfig({
    resolve: {
        alias: {
            '@js': path.resolve(__dirname, './resources/js'),
            '@components': path.resolve(__dirname, './resources/js/components'),
            '@pages': path.resolve(__dirname, './resources/js/pages'),
            '@core': path.resolve(__dirname, './resources/js/core'),
            '@utils': path.resolve(__dirname, './resources/js/utils'),
        }
    }
})
