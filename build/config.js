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
    watch: {
        livereload: {
            options: {
                livereload: 35729
            },
            files: [
                './scr/**/*.*'
            ],
            tasks: ['default']
        }
    },
    connect: {
        options: {
            port: 9000,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            livereload: 35729
        },
        all: {
            options: {
                open: true,
                base: [
                    '.'
                ]
            }
        }
    },
    sass: {
        options: {
            sourceMap: false
        },
        dist: {
            files: [{
                './dist/styles/wxqbh5_index.css': './src/sass/wxqbh5_index.scss'
            }]
        }
    },
    webpack: {
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
}
