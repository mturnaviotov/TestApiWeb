/**
 * Created by Николай on 19.11.2016.
 */

var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var cmdArgs = require('minimist')(process.argv.slice(2));

var NODE_ENV = process.env.NODE_ENV || cmdArgs.NODE_ENV || 'production';
var DEV = NODE_ENV == 'development';
var PROD = NODE_ENV == 'production';

module.exports = {

    entry: "./src/main.jsx",

    output: {
        path: "./dist",
        filename: "bundle.js"
    },

    resolve:{
        extensions:['', '.webpack.js', '.web.js', '.ts', '.js', '.min.js', '.jsx']
    },

    plugins: [

        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),

        new HTMLWebpackPlugin({
            template: './src/index.html',
            inject: false
        }),

        new webpack.optimize.UglifyJsPlugin({
            minimize: PROD,
            mangle: PROD,
            comments: DEV,
            compress:{
                warnings:false
            },
            sourcemap: DEV
        })
    ],

    module:{
        loaders:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                // loaders: DEV ? ['react-hot', 'babel'] : ['babel']
                loader:'babel'
            }, {
                test: /\.(png|jpg|jpeg|gif)$/i,
                loader: "url?limit="+ (5 * 1024) +"&name=images/[name]-[hash:base64:5].[ext]"
            }, {
                test: /.css$/,
                loader:'style!css?localIdentName=[name]-[local]-[hash:base64:5]'
            }, {
                test: /.json/,
                loader:'file?name=json/[name].[ext]'
            }
        ]
    },

    devtool: 'source-map'
};
