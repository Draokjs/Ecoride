const Encore = require('@symfony/webpack-encore');
const path = require('path');

Encore
    // ... other configurations ...
    .addEntry('app', './assets/app.js')
    .addEntry('Homepage', './assets/js/Homepage.js')
    .addEntry('csrf_protection_controller', './assets/controllers/csrf_protection_controller.js')
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enablePostCssLoader()
    .enableSassLoader((options) => {
        options.sassOptions = {
            // Show deprecation warnings from dependencies
            quietDeps: false,
            // Enable source maps for easier debugging
            sourceMap: true,
        };
    })
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableVersioning(Encore.isProduction())
    .enableSingleRuntimeChunk()
    .addAliases({
    '@symfony/stimulus-bridge/controllers.json': path.resolve(__dirname, 'assets/controllers.json'),
    })

module.exports = Encore.getWebpackConfig();


