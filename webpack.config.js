const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
    publicPath: '/' //porque ruta arranca |esta linea deve pernanecer comentada en desarrollo local, pero en github debe subirse descomentada
		//esto porque si esta activa tomo a dist para abrir y esto en local no es como lo devido en produccion SI
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //loader que llega de este paquete
          },
          'css-loader',
        ],
      },
			{
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //loader que llega de este paquete
          },
          'css-loader',
          'sass-loader',
        ],
      },
			{
				test:/\.(png|svg|jpg|gif)$/,
				type:'asset'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css' //esto pone la regla, al compilar creara un carpeta llamada assets y dentro el css con el nombre por defecto alparecer
    }),
		new CopyPlugin({
      patterns: [
      {from: 'src/assets/icons', to: 'assets/icon'},
      {from: 'src/assets/logos', to: 'assets/logos'}
    //     { from: 'public/manifest.json', to: '' },
    //     { from: 'public/service-worker.js', to: '' },
    //     { from: 'public/icon.png', to: 'assets' },
      ],
    }),
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true, //comprimir
		historyApiFallback: true,
		open: true,
	}
}
