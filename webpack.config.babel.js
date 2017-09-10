import path from 'path';

const webpackConfig = {
  entry: path.resolve(__dirname, 'es', 'index.js'),
  output: {
    path: path.join(__dirname),
    filename: 'es.js',
    library: 'PlusMessageBundle',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'es')],
        use: ['babel-loader']
      }
    ]
  }
};

export default webpackConfig;
