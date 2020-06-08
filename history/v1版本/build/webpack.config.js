'use strict'
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
module.exports = {
    entry:{
            index: path.resolve(__dirname,'../src/index.js'),
            page2: path.resolve(__dirname,'../src/page2.js'),
        },
    output:{
            path: path.resolve(__dirname,"../dist"),
            filename: '[name].js',
        },
    module: {
        rules: [
            { test: /\.vue$/,
              loader: 'vue-loader',
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.LoaderOptionsPlugin({
            vue: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        })]

}

