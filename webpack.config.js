'use strict';

const path = require('path');
const HTMLPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: '[name].[hash].js',
        // publicPath: '/dist'
    },
    devServer:{
        host: '0.0.0.0', // 我们可以允许我们用任意方式进行访问（127.0.0.1，localhost, 本机ip）
        port: '8001',
        contentBase: path.join(__dirname, 'dist/main.js'),
        compress:true,
        // hot: true,  //启动热加载
        open:true,
        overlay: {
        warnings: true,
        errors: true
        },
    },
    module: {
        rules: [
            // {
            //     test: /.jsx$/, //使用loader的目标文件。这里是.jsx
            //     loader: 'babel-loader'
            // },
            {
                test: /.(js)$/, //使用loader的目标文件。这里是.js
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
        new HTMLPlugin ({
            title:'测试',
            template:'./src/index.html'
        })
    ],
};
