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
  const goFiles = files.filter(f => f.endsWith('.go')).slice(0, 40)

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
    const structName = struct[1]
    const fieldLines = struct[2].split('\n')
    const fields = _.filter(fieldLines.map(l => l.split(/\s+/)).map(s => {return {name: s[1], type: s[2]}}), 'type')
    console.log(fields)
    console.log(structName)
  }
}

