const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BASE_JS = './src/client/js/';

module.exports = {
    entry: {
        main: BASE_JS + 'main.js',
        videoPlayer: BASE_JS + 'videoPlayer.js',
        recorder: BASE_JS + 'recorder.js',
        commentSEction: BASE_JS + 'commentSEction.js',
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'css/styles.css' })],
    mode: 'development',
    watch: true,
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'assets'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
};
