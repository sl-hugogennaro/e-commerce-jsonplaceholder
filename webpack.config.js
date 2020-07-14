const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyPlugin = require('copy-webpack-plugin');

const basePlugins = [
  new HtmlWebpackPlugin({
    template: './templates/default.html',
  })
]
const prodPlugins = [
  new CopyPlugin({ patterns: [{ from: path.join(__dirname, 'assets'), to: 'assets' }] })
]

const devPlugins = []
const analyzePlugins = [new BundleAnalyzerPlugin()]
const optimizationConf = {
  splitChunks: {
    chunks: 'all',
  },
}

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled-components',
}

module.exports = (env = {}, argv) => {
  const isAnalyze = env.analyze === true
  const withExternals = env.externals === true || isAnalyze
  const isProduction = argv.p === true && argv.mode === 'production'
  let plugins = basePlugins

  if (isAnalyze) {
    plugins = plugins.concat(analyzePlugins)
  } else {// implicit "!isAnalyze"
    plugins = isProduction ? plugins.concat(prodPlugins) : plugins.concat(devPlugins)
  }

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: path.join(__dirname, './src/index.tsx'),
    },
    output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    },

    plugins,
    externals: {
      ...(withExternals && externals),
    },
    optimization: {
      ...((isProduction || isAnalyze) && optimizationConf),
    },
    performance: {
      hints: isProduction ? 'warning' : false,
    },
    stats: {
      colors: true,
    },
    devtool: isProduction ? false : 'eval-cheap-module-source-map',
    devServer: {
      port: 8000,
    },
  }
}
