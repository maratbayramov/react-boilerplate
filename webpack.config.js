const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';

const webpackConfigAdmin = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, './public'),
      filename: 'app.js',
    },
    devtool: (mode === 'development') ? 'inline-source-map' : false,
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './public/'),
                use: 'url-loader?limit=10000&name=public/[name]-[hash].[ext]',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, './public/index.html'),
          inject: 'body',
          filename: './index.html',
          cache: false,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: path.resolve(__dirname, './public'),
      port: 9000,
      historyApiFallback: true,
      inline: true,
      hot: true,
    },
};

module.exports = webpackConfigAdmin;
