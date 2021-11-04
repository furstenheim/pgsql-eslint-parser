const fs = require('fs').promises
const path = require('path')
const _ = require('lodash')
main()
  .then(function () {
    process.exit(0)
  }, function (e) {
    console.error(e)
    process.exit(1)
  })
async function main () {
  const configContent = await fs.readFile('./config.txt')
  const config = configContent.toString().split('\n')
  const noahdbPath = config[0]
  const files = await fs.readdir(noahdbPath)
  const goFiles = files.filter(f => f.endsWith('.go')).slice(0, 200)

  for (const file of goFiles) {
    await parseFile(file)
  }
  async function parseFile (fileName) {
    console.log(fileName)
    const content = await fs.readFile(path.join(noahdbPath, fileName))
    const struct = content.toString().match(/^type (.*) struct \{\n(([^}])*)^\}\n/m)
    if (!struct) {
      return null
    }
    // console.log(struct[0])
    const structName = struct[1].replace('_', '')
    const fieldLines = struct[2].split('\n')
    const fields = _.filter(fieldLines.map(l => l.split(/\s+/)).map(s => {
      if (s[1] && s[1].startsWith('/*')) {
        return null
      }
      return {name: s[1], type: s[2]}}), 'type')
    console.log(fields)
    console.log(structName)
    const mappings = {
      int: 'number',
      List: 'Node[]',
      bool: 'Boolean'
    }
    const typescriptDefinitions = fields.map(function (f) {
      let type
      if (mappings[f.type]) {
        type = mappings[f.type]
      } else {
        type = f.type.replaceAll('*', '').replaceAll('_', '')
      }
      return `  ${f.name.toLowerCase()}: ${type}`
    })
    const classDefinition = `import type {Node} from './Node'

export interface ${structName} {
${typescriptDefinitions.join('\n')}
}`
    console.log(classDefinition)
    await fs.writeFile(path.join('./parsedClasses', structName + '.ts'), classDefinition)
  }
}

