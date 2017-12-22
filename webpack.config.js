const path = require('path')
    , CleanWebpackPlugin = require('clean-webpack-plugin')
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
    return [ new CleanWebpackPlugin([STATIC]) ];
}

module.exports = {
    devtool: 'inline-source-map'
    , entry: ENTRY
    , output: OUTPUT
    , resolve: resolve()
    , module: { rules: rules() }
    , plugins: plugins()
};