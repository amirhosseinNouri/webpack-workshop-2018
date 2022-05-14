const WebpackBundleAnalyzer =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackAnalyze = (env) => ({
  plugins: [new WebpackBundleAnalyzer()],
});

module.exports = webpackAnalyze;
