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
        host: '0.0.0.0',  // 我们可以允许我们用任意方式进行访问（127.0.0.1，localhost, 本机ip）
        port: '8000',
        contentBase: path.join(__dirname, 'dist/main.js'),
        compress:true,
        // hot: true,  //启动热加载
        open:true,
        overlay: {
        warnings: true,
        errors: true
        }
        // 和output配置对应起来
        // publicPath: '/dist/',  // 访问所有静态路径都要前面加/public才能访问生成的静态文件
        // historyApiFallback: {
        //     index: '/public/index.html' // 所有404的请求全部访问该配置下的url
        // }
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
