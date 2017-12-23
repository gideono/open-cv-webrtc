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
        { test: /\.jsx$/, loader: 'babel-loader', include: SRC}
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
        , open: true
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