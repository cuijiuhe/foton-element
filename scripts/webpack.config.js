const { resolve } = require('path');
module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
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
          // 它会应用到普通的 `.css` 文件
          // 以及 `.vue` 文件中的 `<style>` 块
          {
              test: /\.css$/,
              use: [
                  'vue-style-loader'
              ]
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
              appendTsSuffixTo: [/\.vue$/],
            }
          }
        ]
    },
    plugins: [
        
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts']
    }
}