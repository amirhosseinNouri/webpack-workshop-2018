const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const presetConfig = require('./build-utils/presets/load-presets');

const webpackMerge = require('webpack-merge');

const modeConfig = (env) => require(`./build-utils/webpack.${env}.js`)(env);
module.exports = (env, argv) => {
  console.log({env , argv})
  return webpackMerge.merge(
    {
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      output: {
        filename: 'bundle.js',
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(argv.mode),
    presetConfig({ mode: argv.mode, presets: argv.presets }),
  );
};
