const fs = require('fs').promises
const path = require('path')
const _ = require('lodash')

const structToNodeKey = {
  AConst: 'A_Const'
}

main()
  .then(function () {
    process.exit(0)
  }, function (e) {
    console.error(e)
    process.exit(1)
  })

async function main () {
  const types = await processTypes()
  await writeTransformFunctions(types)
  await writeAst(types)
  await writeEslintAst(types)
}

async function writeTransformFunctions (types) {
  const nodePossibleStructs = []

  await fs.writeFile(path.join('./parsedClasses', 'transformation.ts'), `import * as pgAst from './ast'
import * as eslintAst from './eslint-ast'
${getCommonTransformations()}  
  `)

  for (const type of types) {
    if (type.type === 'enum') {
      const enumCode = `function transform${type.enumName} (value: pgAst.${type.enumName}): eslintAst.${type.enumName} {
  return value
}
`
      await fs.appendFile(path.join('./parsedClasses', 'transformation.ts'), enumCode)
    } else if (type.type === 'struct') {
      nodePossibleStructs.push(type.structName)

      const structCode = `function transform${type.structName} (value: pgAst.${type.structName}): eslintAst.${type.structName} {
  const result : eslintAst.${type.structName} = {
    type: '${type.structName}'
  }
  ${type.fields.map(function (field) {
    return `if (value['${field.name}'] !== undefined) {
    result['${field.name === 'type' ? '_type' : field.name}'] = transform${getTransformType(field.type)}(value['${field.name}'])
  }`
}).join('\n  ')}
  return result
}
`
      await fs.appendFile(path.join('./parsedClasses', 'transformation.ts'), structCode)
    }
  }

  await fs.appendFile(path.join('parsedClasses', 'transformation.ts'), `
const mapping = {
  ${nodePossibleStructs.map(n => `${structToNodeKey[n] || n}: transform${n}`).join(',\n    ')}
}

function transformNode (node: pgAst.Node): eslintAst.Node {
  const keys = Object.keys(node)
  if (keys.length !== 1) {
    console.error('Unexpected keys for node type', keys)
    throw new Error('Unexpected keys for node')
  }
  return mapping[keys[0]](node)
}  
  `)

}

async function writeEslintAst (types) {
  await fs.writeFile(path.join('./parsedClasses', 'eslint-ast.ts'), getEslintHeader())
  const nodePossibleStructs = []
  for (const type of types) {
    if (type.type === 'enum') {
      const enumLines = type.values.map((f, i) => `'${f.value}'`)
      const enumCode = `
      
export type ${type.enumName} = ${enumLines.join('|')}
`
      await fs.appendFile(path.join('./parsedClasses', 'eslint-ast.ts'), enumCode)
    } else if (type.type === 'struct') {
      nodePossibleStructs.push(type.structName)
      const classDefinition = `

export interface ${type.structName} {
  type: '${type.structName}'
${type.fields.map(field => `  ${field.name === 'type' ? '_type' : field.name}?: ${field.type}`).join('\n')}
}`
      await fs.appendFile(path.join('./parsedClasses', 'eslint-ast.ts'), classDefinition)
    }
  }

  const nodeDefinition = `
  
export type Node = ${nodePossibleStructs.join('|')}  
  `
  await fs.appendFile(path.join('./parsedClasses', 'eslint-ast.ts'), nodeDefinition)
}

async function writeAst (types) {
  await fs.writeFile(path.join('./parsedClasses', 'ast.ts'), getAstHeader())
  const availableStructs = []
  for (const type of types) {
    if (type.type === 'enum') {
      const enumLines = type.values.map((f, i) => `'${f.value}'`)
      const enumCode = `
      
export type ${type.enumName} = ${enumLines.join('|')}
`
      await fs.appendFile(path.join('./parsedClasses', 'ast.ts'), enumCode)
    } else if (type.type === 'struct') {
      availableStructs.push(type.structName)
      const classDefinition = `

export interface ${type.structName} {
${type.fields.map(field => `  ${field.name}?: ${field.type}`).join('\n')}
}`
      console.log(classDefinition)
      await fs.appendFile(path.join('./parsedClasses', 'ast.ts'), classDefinition)
    }
  }
  const nodeDefinition = `
export interface Node {
  ${availableStructs.map(nk => `  ${structToNodeKey[nk] || nk}?: ${nk}`).join('\n  ')}
}
`
  await fs.appendFile(path.join('./parsedClasses', 'ast.ts'), nodeDefinition)
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

function getTransformType (type) {
  if (type === 'Node[]') {
    return 'ArrayNode'
  }
  if (type === 'Node[][]') {
    return 'MatrixNode'
  }
  if (type === 'GoUint32[]') {
    return 'ArrayUint32'
  }
  return type
}
function getEslintHeader () {
  return `${getCommonTypes()}
  `
}

function getAstHeader () {
  return `
${getCommonTypes()}
`
}

function getCommonTransformations () {
  const identityTypes = [
    'GoInt',
    'GoInt16',
    'GoInt32',
    'GoInt64',
    'GoUint16',
    'GoUint32',
    'GoUint64',
    'GoByte',
    'GoFloat32',
    'GoFloat64',
    'GoHash',
    'ArrayUint32',
    'AclMode',
    'DistinctExpr',
    'NullIfExpr',
    'Selectivity',
    'Cost',
    'ParamListInfo',
    'AttrNumber',
    'Pointer',
    'Index',
    'Offset',
    'regproc',
    'RegProcedure',
    'TransactionId',
    'LocalTransactionId',
    'SubTransactionId',
    'MultiXactId',
    'MultiXactOffset',
    'CommandId',
    'Name',
    'Datum',
    'DatumPtr',
    'Oid',
    'BlockNumber',
    'BlockId'
  ]
  return `
function transformany (input: any): any {
  return input
}

function transformstring (input: string): string {
  return input
}

function transformBoolean (input: Boolean): Boolean {
  return input
}

function transformArrayNode (nodes: pgAst.Node[]): eslintAst.Node[] {
  return nodes.map(n => transformNode(n))
}

function transformMatrixNode (nodes: pgAst.Node[][]): eslintAst.Node[][] {
  return nodes.map(r => r.map(n => transformNode(n)))
}
  
${identityTypes.map(t => `function transform${t} (value: pgAst.${t}): eslintAst.${t} {
  return value as eslintAst.${t}
}`).join('\n')}  
  `
}

function getCommonTypes () {
  return `export type GoByte = string
export type GoFloat64 = number
export type GoInt16 = number
export type GoInt32 = number
export type GoInt64 = number
export type GoUint16 = number
export type GoUint32 = number
export type GoUint64 = number
export type GoInt = number
export type GoOid = number
export type GoOp = number
export type GoRegproc = number
export type GoUintptr = number
export type GoHash = number
export type GoFloat32 = number
export type GoFloat64 = number
export type ArrayUint32 = Uint32[]

export type AclMode = GoUint32

export type DistinctExpr = OpExpr

export type NullIfExpr = OpExpr

export type Selectivity = GoFloat64

export type Cost = GoFloat64

export type ParamListInfo = ParamListInfoData

export type AttrNumber = GoInt16

export type Pointer = GoByte

export type Index = GoUint64

export type Offset = GoInt64

export type regproc = GoOid

export type RegProcedure = GoRegproc

export type TransactionId = GoUint32

export type LocalTransactionId = GoUint32

export type SubTransactionId = GoUint32

export type MultiXactId = TransactionId

export type MultiXactOffset = GoUint32

export type CommandId = GoUint32

export type Name = String

export type Datum = GoUintptr

export type DatumPtr = Datum

export type Oid = GoUint64

export type BlockNumber = GoUint32

export type BlockId = BlockIdData
`
}
