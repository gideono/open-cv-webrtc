const path = require('path')
    , CleanWebpackPlugin = require('clean-webpack-plugin')
    , SRC = path.join(__dirname, './src')
    , ENTRY = path.join(SRC, './backend/index.ts') // TODO frontend should be bundled
    , DIST = path.join(SRC, './backend/dist') // TODO frontend should be bundled
    , OUTPUT = Object.assign({path: DIST, filename: 'bundle.[hash].js'});

function resolve() {
    return { extensions: [".ts", ".tsx", ".js"]  }
}

function rules() {
    return [ { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ } ];
}

function plugins() {
    return [ new CleanWebpackPlugin([DIST]) ];
}

module.exports = {
    devtool: 'inline-source-map'
    , entry: ENTRY
    , output: OUTPUT
    , resolve: resolve()
    , module: { rules: rules() }
    , plugins: plugins()
};