const fs = require('fs').promises
const path = require('path')
const _ = require('lodash')

const nodeKeys = [
  { nodeKey: 'SelectStmt', nodeValueType: 'SelectStmt' },
  { nodeKey: 'A_Const', nodeValueType: 'AConst' },
  { nodeKey: 'Integer', nodeValueType: 'Integer' },
  { nodeKey: 'ColumnRef', nodeValueType: 'ColumnRef' },
  { nodeKey: 'ResTarget', nodeValueType: 'ResTarget' },
  { nodeKey: 'String', nodeValueType: 'String' },
  { nodeKey: 'RangeVar', nodeValueType: 'RangeVar' }
]

main()
  .then(function () {
    process.exit(0)
  }, function (e) {
    console.error(e)
    process.exit(1)
  })

async function main () {
  const types = await processTypes()
  await writeAst(types)
}

async function writeTransformFunctions (types) {
  await fs.write(path.join('parsedClasses', 'transform-functions.ts'), `
function (node: Node  
  
  `)

  for (const type of types) {
    if (type.type === 'enum') {
      continue
    } else if (type.type === 'struct') {

    }
  }
}



async function writeAst (types) {
  await fs.writeFile(path.join('./parsedClasses', 'ast.ts'), `
type GoByte = string
type GoFloat64 = number
type GoInt16 = number
type GoInt32 = number
type GoInt64 = number
type GoUint16 = number
type GoUint32 = number
type GoUint64 = number
type GoInt = number
type GoOid = number
type GoOp = number
type GoRegproc = number
type GoUintptr = number
type GoHash = number

type AclMode = GoUint32

type DistinctExpr = OpExpr

type NullIfExpr = OpExpr

type Selectivity = GoFloat64

type Cost = GoFloat64

type ParamListInfo = ParamListInfoData

type AttrNumber = GoInt16

type Pointer = GoByte

type Index = GoUint64

type Offset = GoInt64

type regproc = GoOid

type RegProcedure = GoRegproc

type TransactionId = GoUint32

type LocalTransactionId = GoUint32

type SubTransactionId = GoUint32

type MultiXactId = TransactionId

type MultiXactOffset = GoUint32

type CommandId = GoUint32

type Name = String

type Datum = GoUintptr

type DatumPtr = Datum

type Oid = GoUint64

type BlockNumber = GoUint32

type BlockId = BlockIdData

export interface Node {
${nodeKeys.map(nk => `  ${nk.nodeKey}?: ${nk.nodeValueType}`).join('\n')}
}

`)

  for (const type of types) {
    if (type.type === 'enum') {
      const enumLines = type.values.map((f, i) => `'${f.value}'`)
      const enumCode = `
      
export type ${type.enumName} = ${enumLines.join('|')}
`
      await fs.appendFile(path.join('./parsedClasses', 'ast.ts'), enumCode)
    } else if (type.type === 'struct') {
      const classDefinition = `

export interface ${type.structName} {
${type.fields.map(field => `  ${field.name}?: ${field.type}`).join('\n')}
}`
      console.log(classDefinition)
      await fs.appendFile(path.join('./parsedClasses', 'ast.ts'), classDefinition)
    }
  }
}

async function processTypes () {
  const result = []
  const configContent = await fs.readFile('./config.txt')
  const config = configContent.toString().split('\n')
  const noahdbPath = config[0]
  const files = await fs.readdir(noahdbPath)
  const goFiles = files.filter(f => f.endsWith('.go'))

  for (const file of goFiles) {
    await parseFile(file)
  }
  return result
  async function parseFile (fileName) {
    console.log(fileName)
    const content = await fs.readFile(path.join(noahdbPath, fileName))
    const struct = content.toString().match(/^type (.*) struct \{\n(((\t[^\n]+\n)|\n)*)^\}\n/m)
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
          return { value: e[1] }
        }), 'value')
      const enumName = fileName.replace('.go', '')
        .split('_').map(function (w) {
          if (w === 'ts') {
            return 'TS'
          }
          if (w === 'wco') {
            return 'WCO'
          }
          if (w === 'sql') {
            return 'SQL'
          }
          if (w === 'rte') {
            return 'RTE'
          }
          return w[0].toUpperCase() + w.substr(1)
        }).join('')
      // console.log(enumFields, enumName)
      result.push({
        type: 'enum',
        enumName: enumName,
        values: enumFields
      })
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
      return { name: s[1], type: s[2] }
    }), 'type')
    console.log(fields)
    console.log(structName)
    const mappings = {
      int: 'GoInt',
      int16: 'GoInt16',
      int32: 'GoInt32',
      int64: 'GoInt64',
      uint16: 'GoUint16',
      uint32: 'GoUint32',
      uint64: 'GoUint64',
      List: 'Node[]',
      bool: 'Boolean',
      byte: 'GoByte',
      float32: 'GoFloat32',
      float64: 'GoFloat64',
      '[]Node': 'Node[]',
      '[][]Node': 'Node[][]',
      '[]uint32': 'GoUint32[]',
      'interface{}': 'any',
      'hash.Hash': 'GoHash'
    }
    const typescriptDefinitions = fields.map(function (f) {
      let type
      if (mappings[f.type]) {
        type = mappings[f.type]
      } else {
        type = f.type.replaceAll('*', '').replaceAll('_', '')
      }
      return { name: f.name[0].toLowerCase() + f.name.substr(1), type }
    })
    result.push({
      type: 'struct',
      structName,
      fields: typescriptDefinitions
    })
  }
}
