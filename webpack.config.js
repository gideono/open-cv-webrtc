const path = require('path')
    , webpack = require('webpack')
    , CleanWebpackPlugin = require('clean-webpack-plugin')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , SRC = path.join(__dirname, './src')
    , ENTRY = path.join(SRC, './frontend/index.js')
    , STATIC = path.join(SRC, './backend/dist/static')
    , OUTPUT = Object.assign({path: STATIC, filename: 'bundle.[hash].js'});

let isProd = process.env.NODE_ENV === 'production';

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

const devPlugin = [
    new CleanWebpackPlugin([STATIC])
  , new webpack.NamedModulesPlugin()
  , new webpack.HotModuleReplacementPlugin()
];

const prodPlugin = [];

function plugins() {
    return [
        new HtmlWebpackPlugin(isProd && ({
            template: path.join(SRC, './frontend/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        })),
    ].concat( isProd ? prodPlugin : devPlugin );
};

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
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map'
    , entry: ENTRY
    , output: OUTPUT
    , resolve: resolve()
    , module: { rules: rules() }
    , plugins: plugins()
    , devServer: devServer()
};