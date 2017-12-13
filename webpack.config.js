const path = require('path')
    , CleanWebpackPlugin = require('clean-webpack-plugin')
    , SRC = path.join(__dirname, './src')
    , ENTRY = path.join(SRC, './backend/index.ts')
    , DIST = Object.assign({path: path.join(SRC, './backend/dist'), filename: 'bundle.[hash].js'});

function resolve() {
    return { extensions: [".ts", ".tsx", ".js"]  }
}

function rules() {
    return [ { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ } ];
}

function plugins() {
    return [ new CleanWebpackPlugin(['dist']) ];
}

module.exports = {
    devtool: 'inline-source-map'
    , entry: ENTRY
    , output: DIST
    , resolve: resolve()
    , module: { rules: rules() }
    , plugins: plugins()
};