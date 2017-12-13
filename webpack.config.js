const path = require('path')
    , SRC = path.join(__dirname, './src')
    , ENTRY = path.join(SRC, './backend/index.ts')
    , DIST = Object.assign({path: path.join(SRC, './backend/dist'), filename: 'bundle.js'});

function resolve() {
    return { extensions: [".ts", ".tsx", ".js", ".jsx"]  }
}

module.exports = {
    entry: ENTRY,
    output: DIST,
    resolve: resolve()
};