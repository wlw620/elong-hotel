const webpack = require('webpack');

//chunks
const chunksPlugin = new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js');

//uglify
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});

//replace
const HtmlWebpackPlugin = require('html-webpack-plugin');
//app首页 plugin
const wxqbindexPlugin = new HtmlWebpackPlugin({
    title: '艺龙旅行网',
    wxqbindexCss: '../sass/wxqbh5_index.css',
    template: './src/hotel/index.html',
    filename: './holte/index.html',
    chunks: ['commons', 'wxqbindex'],
    hash: true
});


module.exports = {
    entry: {
        wxqbindex: './src/wxqbindex',
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        }]
    },
    babel: {
        presets: ['es2015']
    },
    plugins: [
        // uglifyPlugin,
        // wxqbindexPlugin,
        chunksPlugin
    ],
    stats: {
        colors: false,
        modules: true,
        reasons: true
    }
}
