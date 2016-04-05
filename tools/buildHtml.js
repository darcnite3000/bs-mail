import fs from 'fs'
import colors from 'colors/safe'
import cheerio from 'cheerio'

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) return console.log(err)

  const $ = cheerio.load(markup)

  $('head').prepend('<link rel="stylesheet" href="styles.css">')

  fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
    if (err) return console.log(err)

    console.log(colors.green('index.html written to /dist'))
  })
})
