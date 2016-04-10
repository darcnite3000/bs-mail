import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'
import bourbon from 'node-bourbon'

const sassPaths = bourbon
  .includePaths
  .map((sassPath) => `includePaths[]=${sassPath}`)
  .join('&')

const developmentEnvironment = 'development'
const productionEnvironment = 'production'
const testEnvironment = 'test'

const getPlugins = (env) => {
  const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env === developmentEnvironment
  }

  const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]

  switch (env) {
    case productionEnvironment:
      plugins.push(new ExtractTextPlugin('styles.css'))
      plugins.push(new webpack.optimize.DedupePlugin())
      plugins.push(new webpack.optimize.UglifyJsPlugin())
      break
    case developmentEnvironment:
      plugins.push(new webpack.HotModuleReplacementPlugin())
      plugins.push(new webpack.NoErrorsPlugin())
      break
  }

  return plugins
}

const getEntry = (env) => {
  const entry = []

  if (env === developmentEnvironment) entry.push('webpack-hot-middleware/client?reload=true')

  entry.push('./src/index.js')

  return entry
}

const getLoaders = (env) => {
  const loaders = [
    {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel', 'eslint']},
    {test: /\.(jpe?g|png|gif|svg)$/, loaders: ['file']}
  ]

  if (env === productionEnvironment) {
    loaders.push({
      test: /(\.css|\.scss)$/,
      loader: ExtractTextPlugin.extract(`css?sourceMap!postcss!sass?sourceMap&${sassPaths}`)
    })
  } else {
    loaders.push({
      test: /(\.css|\.scss)$/,
      loaders: ['style', 'css?sourceMap', 'postcss', `sass?sourceMap${sassPaths}`]
    })
  }

  return loaders
}

const getConfig = (env) => ({
  debug: true,
  devTool: env === productionEnvironment ? 'source-map' : 'cheap-module-eval-source-map',
  noInfo: true,
  entry: getEntry(env),
  target: env === testEnvironment ? 'node' : 'web',
  output: {
    path: `${__dirname}/dist`,
    publicPath: './',
    filename: 'bundle.js'
  },
  plugins: getPlugins(env),
  module: {
    loaders: getLoaders(env)
  },
  postcss: () => [autoprefixer]
})

export default getConfig
