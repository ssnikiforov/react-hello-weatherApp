/*
 USAGE:
 1. With this config file: just type `webpack` from the project-root dir
 2. Without this config file: `webpack ./public/app.js ./public/bundle.js`
 3. Run webpack in watching mode: `webpack -w`
 */

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [
            __dirname,
            "node_modules"
        ],
        alias: {
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            Weather: 'app/components/Weather.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherResult: 'app/components/WeatherResult.jsx'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'] //this presets are already included via package.json
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|examples)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
