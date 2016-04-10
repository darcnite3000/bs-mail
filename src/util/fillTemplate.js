const nlbr = (string) => {
  const rx = new RegExp(/\n/, 'g')
  return string.replace(rx, '<br />')
}

const fillTemplate = (template, config) => {
  let updatedTemplate = template
  const replacers = Object.keys(config)

  replacers.forEach((r) => {
    const reg = new RegExp(`#${r}#`, 'g')
    updatedTemplate = updatedTemplate.replace(reg, nlbr(config[r]))
  })
  return updatedTemplate
}

export default fillTemplate
