var webpack = require('webpack'),
    path = require("path");

module.exports = {
    'context': __dirname,
    'entry': {
        'gulp-vue2php': path.resolve(__dirname, './src/index.js'),
    },
    'resolve': {
        'alias': {
            Vue: path.resolve(__dirname, './src/vue/')
        }
    },
    'output': {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        library: '[name]',
        libraryTarget: 'umd'
    },
    'module': {
        rules: [{
            'use': ["babel-loader", "eslint-loader"],
            'test': /\.js$/,
            'exclude': /node_modules/
        }]
    },
    'plugins': [
        new webpack.optimize.OccurrenceOrderPlugin,
        //new webpack.optimize.UglifyJsPlugin
    ]
};
