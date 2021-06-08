const { resolve } = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    library: {
      name: 'ft',
      type: 'umd',
    },
    filename: 'foton-element.js',
    path: resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  },
  externals: {
    vue: 'Vue',
    'element-ui': 'Element'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}