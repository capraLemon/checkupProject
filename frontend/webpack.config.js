const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   mode: mode,
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   module: {
      rules: [
         {
            test: /\.jsx/,
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
                  presets: ['@babel/preset-react'],
               }
            }
         },
         {
            test: /\.css/,
            use: ['style-loader', 'css-loader'],
         }
      ]
   }
};