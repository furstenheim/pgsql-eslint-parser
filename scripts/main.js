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
      const enumGoCode = content.toString().match(/^const \(\n((\s[^\n]*\n)*)^\)\n/m)
      if (!enumGoCode) {
        return null
      }
      const enumGoLines = enumGoCode[1].split('\n')
      const enumFields = _.filter(enumGoLines.map(l => l.split(/\s+/))
        .map(function (e) {
          if (!e[1]) {
            return null
          }
          if (!e[1].match(/^[a-zA-Z]/)) {
            return null
          }
          return {value: e[1].replace('_', '')}
        }), 'value')
      const enumName = fileName.replace('.go', '')
        .split('_').map(w => w[0].toUpperCase() + w.substr(1)).join('')
      // console.log(enumFields, enumName)
      const enumLines = enumFields.map(f => `  ${f.value} = '${f.value}',`)
      const enumCode = `export enum ${enumName} {
${enumLines.join('\n')}
}`
      await fs.writeFile(path.join('./parsedClasses', enumName + '.ts'), enumCode)
      return null
    }
    // console.log(struct[0])
    const structName = struct[1].replace('_', '')
    const fieldLines = struct[2].split('\n')
    const fields = _.filter(fieldLines.map(l => l.split(/\s+/)).map(s => {
      if (!s || !s[1]) {
        return null
      }
      if (!s[1].match(/^[a-zA-Z]/)) {
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

