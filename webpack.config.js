const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/app.js')
    .enablePostCssLoader()
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableVersioning(Encore.isProduction())
    .enableSingleRuntimeChunk()
    .configureLoaderRule('css', loaderRule => {
        loaderRule.test = /\.css$/i;
        loaderRule.use = ['style-loader', 'css-loader'];
    })
    .enableSassLoader(options => {
        options.sassOptions = {
            // Show deprecation warnings from dependencies
            quietDeps: false,
            // Enable source maps for easier debugging
            sourceMap: true,
        };
    });

module.exports = Encore.getWebpackConfig();

