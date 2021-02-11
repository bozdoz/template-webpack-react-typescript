const path = require('path');

module.exports = (env, argv) => {
  const isProduction =
    process.env.NODE_ENV === 'production' || argv.mode === 'production';

  return {
    entry: './src/index.tsx',
    output: {
      filename: isProduction ? 'main.js' : './dist/main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: isProduction ? undefined : 'inline-source-map',
    devServer: {
      contentBase: './',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.s?[ac]ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};
