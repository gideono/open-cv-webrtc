const path = require('path')
    , webpack = require('webpack')
    , CleanWebpackPlugin = require('clean-webpack-plugin')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , SRC = path.join(__dirname, './src')
    , ENTRY = path.join(SRC, './frontend/index.js')
    , STATIC = path.join(SRC, './backend/dist/static')
    , OUTPUT = Object.assign({path: STATIC, filename: 'bundle.[hash].js'});

function resolve() {
    return { extensions: [ ".jsx", ".js" ]  }
}

function rules() {
    return [
        { test: /\.js$/, loader: 'babel-loader', include: SRC},
        { test: /\.jsx$/, loader: 'babel-loader', include: SRC},
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader", options: { importLoaders: 1 }  },
                { loader: "postcss-loader",
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('postcss-import')({ root: loader.resourcePath }),
                            require('postcss-cssnext')(),
                        ]
                    }
                }
            ]
        },
        {
            test: /\.(jpg|png|svg)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 25000,
                },
            },
        }
    ];
}

function plugins() {
    return [
        new CleanWebpackPlugin([STATIC]),
        new HtmlWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ];
}

function devServer() {
    return {
        port: 3000
        , historyApiFallback: true
        , hot: true
        , contentBase: STATIC
        , inline: true
        , progress: true
        , open: false
    }
}

module.exports = {
    devtool: 'inline-source-map'
    , entry: ENTRY
    , output: OUTPUT
    , resolve: resolve()
    , module: { rules: rules() }
    , plugins: plugins()
    , devServer: devServer()
};