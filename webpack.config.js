const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                'postcss-loader'
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        }),
      ]
      
}