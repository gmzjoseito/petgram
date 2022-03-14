const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        filename: 'app.bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin()
    ]
}