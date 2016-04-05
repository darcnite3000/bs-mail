import webpack from 'webpack'
import webpackConfigBuilder from '../webpack.config.js'
import colors from 'colors/safe'
import {argv as args} from 'yargs'

process.env.NODE_ENV = 'production'

const webpackConfig = webpackConfigBuilder(process.env.NODE_ENV)

webpack(webpackConfig).run((err, stats) => {
  const inSilentMode = args.s

  if (!inSilentMode) {
    console.log(colors.bold.blue('Generating minified bundle for production use via Webpack...'))
  }

  if (err) {
    console.log(colors.bold.red(err))

    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((error) => console.log(colors.red(error)))
  }

  if (jsonStats.hasWarnings && !inSilentMode) {
    console.log(colors.bold.yellow('Webpack has generated the following warnings: '))
    jsonStats.warnings.map((warning) => console.log(colors.yellow(warning)))
  }

  if (!inSilentMode) {
    console.log(`Webpack stats: ${stats}`)
  }

  console.log(
    colors.bold.green('Your app has been compiled in production mode and written to /dist. It\'s ready to roll')
  )

  return 0
})
