const nl2br = (string) => {
  const newLine = new RegExp(/\n/, 'g')
  return string.replace(newLine, '<br />')
}
const stripFrame = (string) => {
  const iframeTag = new RegExp(/<iframe.*iframe>/, 'gi')
  return string.replace(iframeTag, '')
}
const stripScript = (string) => {
  const scriptTag = new RegExp(/<script.*script>/, 'gi')
  const scriptRef = new RegExp(/(\'|\")javascript:.*(\'|\")/, 'gi')
  return string.replace(scriptTag, '').replace(scriptRef, '')
}
const stripUnwanted = (string) => stripScript(stripFrame(string))

const fillTemplate = (template, config) => {
  let updatedTemplate = template
  const replacers = Object.keys(config)

  replacers.forEach((r) => {
    const reg = new RegExp(`#${r}#`, 'g')
    updatedTemplate = updatedTemplate.replace(reg, nl2br(stripUnwanted(config[r])))
  })
  return updatedTemplate
}

export default fillTemplate
