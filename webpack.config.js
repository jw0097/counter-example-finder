const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            [
              '@babel/preset-react',
              { runtime: 'automatic', importSource: '@emotion/react' },
            ],
            '@babel/preset-typescript',
          ],
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader'],
        include: [path.resolve(__dirname, 'src/styles')],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};