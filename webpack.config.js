const path                = require('path');
const webpack             = require('webpack');
const CleanWebpackPlugin  = require('clean-webpack-plugin');
const HtmlWebpackPlugin   = require('html-webpack-plugin')

const SRC                 = path.join(__dirname, './src');
const ENTRY               = path.join(SRC, './frontend/index.js');
const STATIC              = path.join(SRC, './backend/dist/static');
const OUTPUT              = Object.assign({path: STATIC, filename: 'bundle.[hash].js'});

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
                            require('postcss-url')(),

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

const prodPlugin = [
    new webpack.optimize.ModuleConcatenationPlugin()
  , new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
      },
      output: {
          comments: false
      }
  }),
];

function htmlPlugin() {
    return [
        new HtmlWebpackPlugin(Object.assign({
            template: path.join(SRC, './frontend/index.html'),
            filename: 'index.html'}), isProd && ({
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }})),
    ]
}

function plugins() {
    return htmlPlugin().concat( isProd ? prodPlugin : devPlugin );
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
