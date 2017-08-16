const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

function _path(p) {
    return path.join(__dirname, p);
}


module.exports = function () {
    return {
        devtool: 'source-map',
        externals: {
            gapi: 'gapi',
            google: 'google'
        },
        entry: {
            "a": './entries/a.entry.js'
        },
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "[name].entry.js",
            chunkFilename: '[name].chunk.js',
            publicPath: "/dist/",
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            retainLines: true
                        }
                    }
                },
                {
                    test: /\.woff(2)?(\?([a-z0-9]+|v=[0-9]\.[0-9]\.[0-9]))?$/,
                    loader: "url-loader?limit=10000&mimetype=application/font-woff"
                },
                {
                    test: /\.(jpe?g|ttf|eot|svg|png|gif|cur)(\?([a-z0-9]+|v=[0-9]\.[0-9]\.[0-9]))?$/,
                    loader: "file-loader"
                },
                {test: /\.html$/, loader: "raw-loader"},
                {test: /\.json$/, use: 'json-loader'},
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: {
                            loader: "css-loader",
                            options: {
                                sourceMap: process.env.NODE_ENV !== 'production'
                            }
                        }
                    })
                }
            ]
        },
        resolve: {
            alias: {
                // This is necessary to establish a global, shared jQuery namespace
                jquery: _path('node_modules/jquery/dist/jquery'),
            }
        },
        plugins: [
            // does this work?  In theory, almost any of our code can be called from almost anywhere.
            // Maybe it only makes sense to do for things like formENtryClient and whatnot.  Needs some thoughting.
            new webpack.optimize.CommonsChunkPlugin({
                name: "webpack.common",
                filename: "./webpack.common.js"
            }),
            // populate the global jquery namespace
            new webpack.ProvidePlugin({
                "$": "jquery",
                "jQuery": "jquery",
                "window.jQuery": "jquery",
                "window.$": "jquery"
            }),
            new ProgressBarPlugin(),
            new ExtractTextPlugin({
                filename: "[name].styles.css",
                ignoreOrder: true,
                allChunks: true
            }),
            new UglifyJSPlugin({
                sourceMap: true
            })
        ]
    }
};