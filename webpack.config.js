const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, 'src/app.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'docs'),
    port: 5001, //default 8080
    open: true,
    hot: true,
  },
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
  //loaders
  module: {
    rules: [
      //css
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      //images
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg|obj|mtl)$/, type: 'asset/resource' },
      //js for babel
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
    ],
  },
  //plugins
  plugins: [
    new MiniCssExtractPlugin({filename: "styles.css"}),
    new HtmlWebpackPlugin({
      title: 'TSLab',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template.html'),
      favicon: path.resolve(__dirname, 'src/logo.svg'),
    })
  ],
};