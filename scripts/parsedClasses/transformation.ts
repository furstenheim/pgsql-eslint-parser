import * as pgAst from './pg-ast'
import * as eslintAst from './eslint-ast'

function transformany (input: any): any {
  return input
}

function transformstring (input: string): string {
  return input
}

function transformBoolean (input: Boolean): Boolean {
  return input
}

function transformArrayNode (nodes: pgAst.Node[], parent: eslintAst.Node|null, possibleStart: number): compoundResult<eslintAst.Node[]> {
  const result: eslintAst.Node[] = []
  let locationEnd = possibleStart + 1
  nodes.forEach(function (n) {
    const transformed = transformNode(n, parent, possibleStart)
    result.push(transformed)
    if (transformed.end > locationEnd) {
      locationEnd = transformed.end
    }
  })
  return {
    result,
    end: locationEnd
  }
}

function transformMatrixNode (nodes: pgAst.Node[][], parent: eslintAst.Node|null, possibleStart: number): compoundResult<eslintAst.Node[][]> {
  const result: eslintAst.Node[][] = []
  let locationEnd = possibleStart + 1
  nodes.forEach(function (r) {
    const row: eslintAst.Node[] = []
    r.forEach(function (n) {
      const transformed = transformNode(n, parent, possibleStart)
      row.push(transformed)
      if (transformed.end > locationEnd) {
        locationEnd = transformed.end
      }
    })
    result.push(row)
  })
  return {
    result,
    end: locationEnd
  }
}

interface compoundResult<T> {
    result: T
    end: number
}
  
function transformGoInt (value: pgAst.GoInt): eslintAst.GoInt {
  return value as eslintAst.GoInt
}
function transformGoInt16 (value: pgAst.GoInt16): eslintAst.GoInt16 {
  return value as eslintAst.GoInt16
}
function transformGoInt32 (value: pgAst.GoInt32): eslintAst.GoInt32 {
  return value as eslintAst.GoInt32
}
function transformGoInt64 (value: pgAst.GoInt64): eslintAst.GoInt64 {
  return value as eslintAst.GoInt64
}
function transformGoUint16 (value: pgAst.GoUint16): eslintAst.GoUint16 {
  return value as eslintAst.GoUint16
}
function transformGoUint32 (value: pgAst.GoUint32): eslintAst.GoUint32 {
  return value as eslintAst.GoUint32
}
function transformGoUint64 (value: pgAst.GoUint64): eslintAst.GoUint64 {
  return value as eslintAst.GoUint64
}
function transformGoByte (value: pgAst.GoByte): eslintAst.GoByte {
  return value as eslintAst.GoByte
}
function transformGoFloat32 (value: pgAst.GoFloat32): eslintAst.GoFloat32 {
  return value as eslintAst.GoFloat32
}
function transformGoFloat64 (value: pgAst.GoFloat64): eslintAst.GoFloat64 {
  return value as eslintAst.GoFloat64
}
function transformGoHash (value: pgAst.GoHash): eslintAst.GoHash {
  return value as eslintAst.GoHash
}
function transformArrayUint32 (value: pgAst.ArrayUint32): eslintAst.ArrayUint32 {
  return value as eslintAst.ArrayUint32
}
function transformAclMode (value: pgAst.AclMode): eslintAst.AclMode {
  return value as eslintAst.AclMode
}
function transformDistinctExpr (value: pgAst.DistinctExpr): eslintAst.DistinctExpr {
  return value as eslintAst.DistinctExpr
}
function transformNullIfExpr (value: pgAst.NullIfExpr): eslintAst.NullIfExpr {
  return value as eslintAst.NullIfExpr
}
function transformSelectivity (value: pgAst.Selectivity): eslintAst.Selectivity {
  return value as eslintAst.Selectivity
}
function transformCost (value: pgAst.Cost): eslintAst.Cost {
  return value as eslintAst.Cost
}
function transformParamListInfo (value: pgAst.ParamListInfo): eslintAst.ParamListInfo {
  return value as eslintAst.ParamListInfo
}
function transformAttrNumber (value: pgAst.AttrNumber): eslintAst.AttrNumber {
  return value as eslintAst.AttrNumber
}
function transformPointer (value: pgAst.Pointer): eslintAst.Pointer {
  return value as eslintAst.Pointer
}
function transformIndex (value: pgAst.Index): eslintAst.Index {
  return value as eslintAst.Index
}
function transformOffset (value: pgAst.Offset): eslintAst.Offset {
  return value as eslintAst.Offset
}
function transformregproc (value: pgAst.regproc): eslintAst.regproc {
  return value as eslintAst.regproc
}
function transformRegProcedure (value: pgAst.RegProcedure): eslintAst.RegProcedure {
  return value as eslintAst.RegProcedure
}
function transformTransactionId (value: pgAst.TransactionId): eslintAst.TransactionId {
  return value as eslintAst.TransactionId
}
function transformLocalTransactionId (value: pgAst.LocalTransactionId): eslintAst.LocalTransactionId {
  return value as eslintAst.LocalTransactionId
}
function transformSubTransactionId (value: pgAst.SubTransactionId): eslintAst.SubTransactionId {
  return value as eslintAst.SubTransactionId
}
function transformMultiXactId (value: pgAst.MultiXactId): eslintAst.MultiXactId {
  return value as eslintAst.MultiXactId
}
function transformMultiXactOffset (value: pgAst.MultiXactOffset): eslintAst.MultiXactOffset {
  return value as eslintAst.MultiXactOffset
}
function transformCommandId (value: pgAst.CommandId): eslintAst.CommandId {
  return value as eslintAst.CommandId
}
function transformName (value: pgAst.Name): eslintAst.Name {
  return value as eslintAst.Name
}
function transformDatum (value: pgAst.Datum): eslintAst.Datum {
  return value as eslintAst.Datum
}
function transformDatumPtr (value: pgAst.DatumPtr): eslintAst.DatumPtr {
  return value as eslintAst.DatumPtr
}
function transformOid (value: pgAst.Oid): eslintAst.Oid {
  return value as eslintAst.Oid
}
function transformBlockNumber (value: pgAst.BlockNumber): eslintAst.BlockNumber {
  return value as eslintAst.BlockNumber
}
function transformBlockId (value: pgAst.BlockId): eslintAst.BlockId {
  return value as eslintAst.BlockId
}  
    
  function transformAArrayExpr (value: pgAst.AArrayExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AArrayExpr {
  const result : eslintAst.AArrayExpr = {
    type: 'AArrayExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['elements'] !== undefined) {
    const resultTransform = transformArrayNode(value['elements'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['elements'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAConst (value: pgAst.AConst, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AConst {
  const result : eslintAst.AConst = {
    type: 'AConst',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['val'] !== undefined) {
    const resultTransform = transformNode(value['val'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['val'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAExpr (value: pgAst.AExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AExpr {
  const result : eslintAst.AExpr = {
    type: 'AExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformAExprKind(value['kind'])
  }
  
  
  if (value['name'] !== undefined) {
    const resultTransform = transformArrayNode(value['name'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['name'] = resultTransform.result
  } 
  if (value['lexpr'] !== undefined) {
    const resultTransform = transformNode(value['lexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['lexpr'] = resultTransform
  } 
  if (value['rexpr'] !== undefined) {
    const resultTransform = transformNode(value['rexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rexpr'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAExprKind (value: pgAst.AExprKind): eslintAst.AExprKind {
  return value
}
function transformAIndices (value: pgAst.AIndices, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AIndices {
  const result : eslintAst.AIndices = {
    type: 'AIndices',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['isSlice'] !== undefined) {
    result['isSlice'] = transformBoolean(value['isSlice'])
  }
  
  
  if (value['lidx'] !== undefined) {
    const resultTransform = transformNode(value['lidx'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['lidx'] = resultTransform
  } 
  if (value['uidx'] !== undefined) {
    const resultTransform = transformNode(value['uidx'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['uidx'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAIndirection (value: pgAst.AIndirection, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AIndirection {
  const result : eslintAst.AIndirection = {
    type: 'AIndirection',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['indirection'] !== undefined) {
    const resultTransform = transformArrayNode(value['indirection'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['indirection'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAStar (value: pgAst.AStar, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AStar {
  const result : eslintAst.AStar = {
    type: 'AStar',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAccessPriv (value: pgAst.AccessPriv, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AccessPriv {
  const result : eslintAst.AccessPriv = {
    type: 'AccessPriv',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['privName'] !== undefined) {
    result['privName'] = transformstring(value['privName'])
  }
  
  
  if (value['cols'] !== undefined) {
    const resultTransform = transformArrayNode(value['cols'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['cols'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAggSplit (value: pgAst.AggSplit): eslintAst.AggSplit {
  return value
}
function transformAggStrategy (value: pgAst.AggStrategy): eslintAst.AggStrategy {
  return value
}
function transformAggref (value: pgAst.Aggref, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Aggref {
  const result : eslintAst.Aggref = {
    type: 'Aggref',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['aggfnoid'] !== undefined) {
    result['aggfnoid'] = transformOid(value['aggfnoid'])
  }
  
  
  if (value['aggtype'] !== undefined) {
    result['aggtype'] = transformOid(value['aggtype'])
  }
  
  
  if (value['aggcollid'] !== undefined) {
    result['aggcollid'] = transformOid(value['aggcollid'])
  }
  
  
  if (value['inputcollid'] !== undefined) {
    result['inputcollid'] = transformOid(value['inputcollid'])
  }
  
  
  if (value['aggtranstype'] !== undefined) {
    result['aggtranstype'] = transformOid(value['aggtranstype'])
  }
  
  
  if (value['aggargtypes'] !== undefined) {
    const resultTransform = transformArrayNode(value['aggargtypes'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aggargtypes'] = resultTransform.result
  } 
  if (value['aggdirectargs'] !== undefined) {
    const resultTransform = transformArrayNode(value['aggdirectargs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aggdirectargs'] = resultTransform.result
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['aggorder'] !== undefined) {
    const resultTransform = transformArrayNode(value['aggorder'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aggorder'] = resultTransform.result
  } 
  if (value['aggdistinct'] !== undefined) {
    const resultTransform = transformArrayNode(value['aggdistinct'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aggdistinct'] = resultTransform.result
  } 
  if (value['aggfilter'] !== undefined) {
    const resultTransform = transformNode(value['aggfilter'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aggfilter'] = resultTransform
  } 
  if (value['aggstar'] !== undefined) {
    result['aggstar'] = transformBoolean(value['aggstar'])
  }
  
  
  if (value['aggvariadic'] !== undefined) {
    result['aggvariadic'] = transformBoolean(value['aggvariadic'])
  }
  
  
  if (value['aggkind'] !== undefined) {
    result['aggkind'] = transformGoByte(value['aggkind'])
  }
  
  
  if (value['agglevelsup'] !== undefined) {
    result['agglevelsup'] = transformIndex(value['agglevelsup'])
  }
  
  
  if (value['aggsplit'] !== undefined) {
    result['aggsplit'] = transformAggSplit(value['aggsplit'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlias (value: pgAst.Alias, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Alias {
  const result : eslintAst.Alias = {
    type: 'Alias',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['aliasname'] !== undefined) {
    result['aliasname'] = transformstring(value['aliasname'])
  }
  
  
  if (value['colnames'] !== undefined) {
    const resultTransform = transformArrayNode(value['colnames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colnames'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterCollationStmt (value: pgAst.AlterCollationStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterCollationStmt {
  const result : eslintAst.AlterCollationStmt = {
    type: 'AlterCollationStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['collname'] !== undefined) {
    const resultTransform = transformArrayNode(value['collname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['collname'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterDatabaseSetStmt (value: pgAst.AlterDatabaseSetStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterDatabaseSetStmt {
  const result : eslintAst.AlterDatabaseSetStmt = {
    type: 'AlterDatabaseSetStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['dbname'] !== undefined) {
    result['dbname'] = transformstring(value['dbname'])
  }
  
  
  if (value['setstmt'] !== undefined) {
    const resultTransform = transformVariableSetStmt(value['setstmt'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['setstmt'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterDatabaseStmt (value: pgAst.AlterDatabaseStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterDatabaseStmt {
  const result : eslintAst.AlterDatabaseStmt = {
    type: 'AlterDatabaseStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['dbname'] !== undefined) {
    result['dbname'] = transformstring(value['dbname'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterDefaultPrivilegesStmt (value: pgAst.AlterDefaultPrivilegesStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterDefaultPrivilegesStmt {
  const result : eslintAst.AlterDefaultPrivilegesStmt = {
    type: 'AlterDefaultPrivilegesStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['action'] !== undefined) {
    const resultTransform = transformGrantStmt(value['action'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['action'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterDomainStmt (value: pgAst.AlterDomainStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterDomainStmt {
  const result : eslintAst.AlterDomainStmt = {
    type: 'AlterDomainStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['subtype'] !== undefined) {
    result['subtype'] = transformGoByte(value['subtype'])
  }
  
  
  if (value['typeName'] !== undefined) {
    const resultTransform = transformArrayNode(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform.result
  } 
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['def'] !== undefined) {
    const resultTransform = transformNode(value['def'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['def'] = resultTransform
  } 
  if (value['behavior'] !== undefined) {
    result['behavior'] = transformDropBehavior(value['behavior'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterEnumStmt (value: pgAst.AlterEnumStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterEnumStmt {
  const result : eslintAst.AlterEnumStmt = {
    type: 'AlterEnumStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['typeName'] !== undefined) {
    const resultTransform = transformArrayNode(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform.result
  } 
  if (value['oldVal'] !== undefined) {
    result['oldVal'] = transformstring(value['oldVal'])
  }
  
  
  if (value['newVal'] !== undefined) {
    result['newVal'] = transformstring(value['newVal'])
  }
  
  
  if (value['newValNeighbor'] !== undefined) {
    result['newValNeighbor'] = transformstring(value['newValNeighbor'])
  }
  
  
  if (value['newValIsAfter'] !== undefined) {
    result['newValIsAfter'] = transformBoolean(value['newValIsAfter'])
  }
  
  
  if (value['skipIfNewValExists'] !== undefined) {
    result['skipIfNewValExists'] = transformBoolean(value['skipIfNewValExists'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterEventTrigStmt (value: pgAst.AlterEventTrigStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterEventTrigStmt {
  const result : eslintAst.AlterEventTrigStmt = {
    type: 'AlterEventTrigStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['trigname'] !== undefined) {
    result['trigname'] = transformstring(value['trigname'])
  }
  
  
  if (value['tgenabled'] !== undefined) {
    result['tgenabled'] = transformGoByte(value['tgenabled'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterExtensionContentsStmt (value: pgAst.AlterExtensionContentsStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterExtensionContentsStmt {
  const result : eslintAst.AlterExtensionContentsStmt = {
    type: 'AlterExtensionContentsStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['extname'] !== undefined) {
    result['extname'] = transformstring(value['extname'])
  }
  
  
  if (value['action'] !== undefined) {
    result['action'] = transformGoInt(value['action'])
  }
  
  
  if (value['objtype'] !== undefined) {
    result['objtype'] = transformObjectType(value['objtype'])
  }
  
  
  if (value['object'] !== undefined) {
    const resultTransform = transformNode(value['object'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['object'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterExtensionStmt (value: pgAst.AlterExtensionStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterExtensionStmt {
  const result : eslintAst.AlterExtensionStmt = {
    type: 'AlterExtensionStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['extname'] !== undefined) {
    result['extname'] = transformstring(value['extname'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterFdwStmt (value: pgAst.AlterFdwStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterFdwStmt {
  const result : eslintAst.AlterFdwStmt = {
    type: 'AlterFdwStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['fdwname'] !== undefined) {
    result['fdwname'] = transformstring(value['fdwname'])
  }
  
  
  if (value['funcOptions'] !== undefined) {
    const resultTransform = transformArrayNode(value['funcOptions'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funcOptions'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterForeignServerStmt (value: pgAst.AlterForeignServerStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterForeignServerStmt {
  const result : eslintAst.AlterForeignServerStmt = {
    type: 'AlterForeignServerStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['servername'] !== undefined) {
    result['servername'] = transformstring(value['servername'])
  }
  
  
  if (value['version'] !== undefined) {
    result['version'] = transformstring(value['version'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['hasVersion'] !== undefined) {
    result['hasVersion'] = transformBoolean(value['hasVersion'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterFunctionStmt (value: pgAst.AlterFunctionStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterFunctionStmt {
  const result : eslintAst.AlterFunctionStmt = {
    type: 'AlterFunctionStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['func'] !== undefined) {
    const resultTransform = transformObjectWithArgs(value['func'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['func'] = resultTransform
  } 
  if (value['actions'] !== undefined) {
    const resultTransform = transformArrayNode(value['actions'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['actions'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterObjectDependsStmt (value: pgAst.AlterObjectDependsStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterObjectDependsStmt {
  const result : eslintAst.AlterObjectDependsStmt = {
    type: 'AlterObjectDependsStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['objectType'] !== undefined) {
    result['objectType'] = transformObjectType(value['objectType'])
  }
  
  
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['object'] !== undefined) {
    const resultTransform = transformNode(value['object'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['object'] = resultTransform
  } 
  if (value['extname'] !== undefined) {
    const resultTransform = transformNode(value['extname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['extname'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterObjectSchemaStmt (value: pgAst.AlterObjectSchemaStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterObjectSchemaStmt {
  const result : eslintAst.AlterObjectSchemaStmt = {
    type: 'AlterObjectSchemaStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['objectType'] !== undefined) {
    result['objectType'] = transformObjectType(value['objectType'])
  }
  
  
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['object'] !== undefined) {
    const resultTransform = transformNode(value['object'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['object'] = resultTransform
  } 
  if (value['newschema'] !== undefined) {
    result['newschema'] = transformstring(value['newschema'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterOpFamilyStmt (value: pgAst.AlterOpFamilyStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterOpFamilyStmt {
  const result : eslintAst.AlterOpFamilyStmt = {
    type: 'AlterOpFamilyStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['opfamilyname'] !== undefined) {
    const resultTransform = transformArrayNode(value['opfamilyname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['opfamilyname'] = resultTransform.result
  } 
  if (value['amname'] !== undefined) {
    result['amname'] = transformstring(value['amname'])
  }
  
  
  if (value['isDrop'] !== undefined) {
    result['isDrop'] = transformBoolean(value['isDrop'])
  }
  
  
  if (value['items'] !== undefined) {
    const resultTransform = transformArrayNode(value['items'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['items'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterOperatorStmt (value: pgAst.AlterOperatorStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterOperatorStmt {
  const result : eslintAst.AlterOperatorStmt = {
    type: 'AlterOperatorStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['opername'] !== undefined) {
    const resultTransform = transformObjectWithArgs(value['opername'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['opername'] = resultTransform
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterOwnerStmt (value: pgAst.AlterOwnerStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterOwnerStmt {
  const result : eslintAst.AlterOwnerStmt = {
    type: 'AlterOwnerStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['objectType'] !== undefined) {
    result['objectType'] = transformObjectType(value['objectType'])
  }
  
  
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['object'] !== undefined) {
    const resultTransform = transformNode(value['object'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['object'] = resultTransform
  } 
  if (value['newowner'] !== undefined) {
    const resultTransform = transformRoleSpec(value['newowner'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['newowner'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterPolicyStmt (value: pgAst.AlterPolicyStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterPolicyStmt {
  const result : eslintAst.AlterPolicyStmt = {
    type: 'AlterPolicyStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['policyName'] !== undefined) {
    result['policyName'] = transformstring(value['policyName'])
  }
  
  
  if (value['table'] !== undefined) {
    const resultTransform = transformRangeVar(value['table'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['table'] = resultTransform
  } 
  if (value['roles'] !== undefined) {
    const resultTransform = transformArrayNode(value['roles'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['roles'] = resultTransform.result
  } 
  if (value['qual'] !== undefined) {
    const resultTransform = transformNode(value['qual'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['qual'] = resultTransform
  } 
  if (value['withCheck'] !== undefined) {
    const resultTransform = transformNode(value['withCheck'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['withCheck'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterPublicationStmt (value: pgAst.AlterPublicationStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterPublicationStmt {
  const result : eslintAst.AlterPublicationStmt = {
    type: 'AlterPublicationStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['pubname'] !== undefined) {
    result['pubname'] = transformstring(value['pubname'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['tables'] !== undefined) {
    const resultTransform = transformArrayNode(value['tables'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['tables'] = resultTransform.result
  } 
  if (value['forAllTables'] !== undefined) {
    result['forAllTables'] = transformBoolean(value['forAllTables'])
  }
  
  
  if (value['tableAction'] !== undefined) {
    result['tableAction'] = transformDefElemAction(value['tableAction'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterRoleSetStmt (value: pgAst.AlterRoleSetStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterRoleSetStmt {
  const result : eslintAst.AlterRoleSetStmt = {
    type: 'AlterRoleSetStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['role'] !== undefined) {
    const resultTransform = transformRoleSpec(value['role'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['role'] = resultTransform
  } 
  if (value['database'] !== undefined) {
    result['database'] = transformstring(value['database'])
  }
  
  
  if (value['setstmt'] !== undefined) {
    const resultTransform = transformVariableSetStmt(value['setstmt'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['setstmt'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterRoleStmt (value: pgAst.AlterRoleStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterRoleStmt {
  const result : eslintAst.AlterRoleStmt = {
    type: 'AlterRoleStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['role'] !== undefined) {
    const resultTransform = transformRoleSpec(value['role'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['role'] = resultTransform
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['action'] !== undefined) {
    result['action'] = transformGoInt(value['action'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterSeqStmt (value: pgAst.AlterSeqStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterSeqStmt {
  const result : eslintAst.AlterSeqStmt = {
    type: 'AlterSeqStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['sequence'] !== undefined) {
    const resultTransform = transformRangeVar(value['sequence'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['sequence'] = resultTransform
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['forIdentity'] !== undefined) {
    result['forIdentity'] = transformBoolean(value['forIdentity'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterSubscriptionStmt (value: pgAst.AlterSubscriptionStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterSubscriptionStmt {
  const result : eslintAst.AlterSubscriptionStmt = {
    type: 'AlterSubscriptionStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformAlterSubscriptionType(value['kind'])
  }
  
  
  if (value['subname'] !== undefined) {
    result['subname'] = transformstring(value['subname'])
  }
  
  
  if (value['conninfo'] !== undefined) {
    result['conninfo'] = transformstring(value['conninfo'])
  }
  
  
  if (value['publication'] !== undefined) {
    const resultTransform = transformArrayNode(value['publication'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['publication'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterSubscriptionType (value: pgAst.AlterSubscriptionType): eslintAst.AlterSubscriptionType {
  return value
}
function transformAlterSystemStmt (value: pgAst.AlterSystemStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterSystemStmt {
  const result : eslintAst.AlterSystemStmt = {
    type: 'AlterSystemStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['setstmt'] !== undefined) {
    const resultTransform = transformVariableSetStmt(value['setstmt'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['setstmt'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterTableCmd (value: pgAst.AlterTableCmd, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterTableCmd {
  const result : eslintAst.AlterTableCmd = {
    type: 'AlterTableCmd',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['subtype'] !== undefined) {
    result['subtype'] = transformAlterTableType(value['subtype'])
  }
  
  
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['newowner'] !== undefined) {
    const resultTransform = transformRoleSpec(value['newowner'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['newowner'] = resultTransform
  } 
  if (value['def'] !== undefined) {
    const resultTransform = transformNode(value['def'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['def'] = resultTransform
  } 
  if (value['behavior'] !== undefined) {
    result['behavior'] = transformDropBehavior(value['behavior'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterTableMoveAllStmt (value: pgAst.AlterTableMoveAllStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterTableMoveAllStmt {
  const result : eslintAst.AlterTableMoveAllStmt = {
    type: 'AlterTableMoveAllStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['origTablespacename'] !== undefined) {
    result['origTablespacename'] = transformstring(value['origTablespacename'])
  }
  
  
  if (value['objtype'] !== undefined) {
    result['objtype'] = transformObjectType(value['objtype'])
  }
  
  
  if (value['roles'] !== undefined) {
    const resultTransform = transformArrayNode(value['roles'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['roles'] = resultTransform.result
  } 
  if (value['newTablespacename'] !== undefined) {
    result['newTablespacename'] = transformstring(value['newTablespacename'])
  }
  
  
  if (value['nowait'] !== undefined) {
    result['nowait'] = transformBoolean(value['nowait'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterTableSpaceOptionsStmt (value: pgAst.AlterTableSpaceOptionsStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterTableSpaceOptionsStmt {
  const result : eslintAst.AlterTableSpaceOptionsStmt = {
    type: 'AlterTableSpaceOptionsStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['tablespacename'] !== undefined) {
    result['tablespacename'] = transformstring(value['tablespacename'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['isReset'] !== undefined) {
    result['isReset'] = transformBoolean(value['isReset'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterTableStmt (value: pgAst.AlterTableStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterTableStmt {
  const result : eslintAst.AlterTableStmt = {
    type: 'AlterTableStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['cmds'] !== undefined) {
    const resultTransform = transformArrayNode(value['cmds'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['cmds'] = resultTransform.result
  } 
  if (value['relkind'] !== undefined) {
    result['relkind'] = transformObjectType(value['relkind'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterTableType (value: pgAst.AlterTableType): eslintAst.AlterTableType {
  return value
}
function transformAlterTSConfigType (value: pgAst.AlterTSConfigType): eslintAst.AlterTSConfigType {
  return value
}
function transformAlterTSConfigurationStmt (value: pgAst.AlterTSConfigurationStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterTSConfigurationStmt {
  const result : eslintAst.AlterTSConfigurationStmt = {
    type: 'AlterTSConfigurationStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformAlterTSConfigType(value['kind'])
  }
  
  
  if (value['cfgname'] !== undefined) {
    const resultTransform = transformArrayNode(value['cfgname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['cfgname'] = resultTransform.result
  } 
  if (value['tokentype'] !== undefined) {
    const resultTransform = transformArrayNode(value['tokentype'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['tokentype'] = resultTransform.result
  } 
  if (value['dicts'] !== undefined) {
    const resultTransform = transformArrayNode(value['dicts'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['dicts'] = resultTransform.result
  } 
  if (value['override'] !== undefined) {
    result['override'] = transformBoolean(value['override'])
  }
  
  
  if (value['replace'] !== undefined) {
    result['replace'] = transformBoolean(value['replace'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterTSDictionaryStmt (value: pgAst.AlterTSDictionaryStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterTSDictionaryStmt {
  const result : eslintAst.AlterTSDictionaryStmt = {
    type: 'AlterTSDictionaryStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['dictname'] !== undefined) {
    const resultTransform = transformArrayNode(value['dictname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['dictname'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlterUserMappingStmt (value: pgAst.AlterUserMappingStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlterUserMappingStmt {
  const result : eslintAst.AlterUserMappingStmt = {
    type: 'AlterUserMappingStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['user'] !== undefined) {
    const resultTransform = transformRoleSpec(value['user'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['user'] = resultTransform
  } 
  if (value['servername'] !== undefined) {
    result['servername'] = transformstring(value['servername'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformAlternativeSubPlan (value: pgAst.AlternativeSubPlan, parent: eslintAst.Node|null, possibleStart: number): eslintAst.AlternativeSubPlan {
  const result : eslintAst.AlternativeSubPlan = {
    type: 'AlternativeSubPlan',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['subplans'] !== undefined) {
    const resultTransform = transformArrayNode(value['subplans'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['subplans'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformArrayCoerceExpr (value: pgAst.ArrayCoerceExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ArrayCoerceExpr {
  const result : eslintAst.ArrayCoerceExpr = {
    type: 'ArrayCoerceExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['elemfuncid'] !== undefined) {
    result['elemfuncid'] = transformOid(value['elemfuncid'])
  }
  
  
  if (value['resulttype'] !== undefined) {
    result['resulttype'] = transformOid(value['resulttype'])
  }
  
  
  if (value['resulttypmod'] !== undefined) {
    result['resulttypmod'] = transformGoInt32(value['resulttypmod'])
  }
  
  
  if (value['resultcollid'] !== undefined) {
    result['resultcollid'] = transformOid(value['resultcollid'])
  }
  
  
  if (value['isExplicit'] !== undefined) {
    result['isExplicit'] = transformBoolean(value['isExplicit'])
  }
  
  
  if (value['coerceformat'] !== undefined) {
    result['coerceformat'] = transformCoercionForm(value['coerceformat'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformArrayExpr (value: pgAst.ArrayExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ArrayExpr {
  const result : eslintAst.ArrayExpr = {
    type: 'ArrayExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arrayTypeid'] !== undefined) {
    result['arrayTypeid'] = transformOid(value['arrayTypeid'])
  }
  
  
  if (value['arrayCollid'] !== undefined) {
    result['arrayCollid'] = transformOid(value['arrayCollid'])
  }
  
  
  if (value['elementTypeid'] !== undefined) {
    result['elementTypeid'] = transformOid(value['elementTypeid'])
  }
  
  
  if (value['elements'] !== undefined) {
    const resultTransform = transformArrayNode(value['elements'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['elements'] = resultTransform.result
  } 
  if (value['multidims'] !== undefined) {
    result['multidims'] = transformBoolean(value['multidims'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformArrayRef (value: pgAst.ArrayRef, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ArrayRef {
  const result : eslintAst.ArrayRef = {
    type: 'ArrayRef',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['refarraytype'] !== undefined) {
    result['refarraytype'] = transformOid(value['refarraytype'])
  }
  
  
  if (value['refelemtype'] !== undefined) {
    result['refelemtype'] = transformOid(value['refelemtype'])
  }
  
  
  if (value['reftypmod'] !== undefined) {
    result['reftypmod'] = transformGoInt32(value['reftypmod'])
  }
  
  
  if (value['refcollid'] !== undefined) {
    result['refcollid'] = transformOid(value['refcollid'])
  }
  
  
  if (value['refupperindexpr'] !== undefined) {
    const resultTransform = transformArrayNode(value['refupperindexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['refupperindexpr'] = resultTransform.result
  } 
  if (value['reflowerindexpr'] !== undefined) {
    const resultTransform = transformArrayNode(value['reflowerindexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['reflowerindexpr'] = resultTransform.result
  } 
  if (value['refexpr'] !== undefined) {
    const resultTransform = transformNode(value['refexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['refexpr'] = resultTransform
  } 
  if (value['refassgnexpr'] !== undefined) {
    const resultTransform = transformNode(value['refassgnexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['refassgnexpr'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformBitString (value: pgAst.BitString, parent: eslintAst.Node|null, possibleStart: number): eslintAst.BitString {
  const result : eslintAst.BitString = {
    type: 'BitString',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['str'] !== undefined) {
    result['str'] = transformstring(value['str'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformBlockIdData (value: pgAst.BlockIdData, parent: eslintAst.Node|null, possibleStart: number): eslintAst.BlockIdData {
  const result : eslintAst.BlockIdData = {
    type: 'BlockIdData',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['biHi'] !== undefined) {
    result['biHi'] = transformGoUint16(value['biHi'])
  }
  
  
  if (value['biLo'] !== undefined) {
    result['biLo'] = transformGoUint16(value['biLo'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformBoolExpr (value: pgAst.BoolExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.BoolExpr {
  const result : eslintAst.BoolExpr = {
    type: 'BoolExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['boolop'] !== undefined) {
    result['boolop'] = transformBoolExprType(value['boolop'])
  }
  
  
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformBoolExprType (value: pgAst.BoolExprType): eslintAst.BoolExprType {
  return value
}
function transformBoolTestType (value: pgAst.BoolTestType): eslintAst.BoolTestType {
  return value
}
function transformBooleanTest (value: pgAst.BooleanTest, parent: eslintAst.Node|null, possibleStart: number): eslintAst.BooleanTest {
  const result : eslintAst.BooleanTest = {
    type: 'BooleanTest',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['booltesttype'] !== undefined) {
    result['booltesttype'] = transformBoolTestType(value['booltesttype'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCaseExpr (value: pgAst.CaseExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CaseExpr {
  const result : eslintAst.CaseExpr = {
    type: 'CaseExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['casetype'] !== undefined) {
    result['casetype'] = transformOid(value['casetype'])
  }
  
  
  if (value['casecollid'] !== undefined) {
    result['casecollid'] = transformOid(value['casecollid'])
  }
  
  
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['defresult'] !== undefined) {
    const resultTransform = transformNode(value['defresult'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['defresult'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCaseTestExpr (value: pgAst.CaseTestExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CaseTestExpr {
  const result : eslintAst.CaseTestExpr = {
    type: 'CaseTestExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['typeId'] !== undefined) {
    result['typeId'] = transformOid(value['typeId'])
  }
  
  
  if (value['typeMod'] !== undefined) {
    result['typeMod'] = transformGoInt32(value['typeMod'])
  }
  
  
  if (value['collation'] !== undefined) {
    result['collation'] = transformOid(value['collation'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCaseWhen (value: pgAst.CaseWhen, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CaseWhen {
  const result : eslintAst.CaseWhen = {
    type: 'CaseWhen',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['expr'] !== undefined) {
    const resultTransform = transformNode(value['expr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['expr'] = resultTransform
  } 
  if (value['result'] !== undefined) {
    const resultTransform = transformNode(value['result'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['result'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCheckPointStmt (value: pgAst.CheckPointStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CheckPointStmt {
  const result : eslintAst.CheckPointStmt = {
    type: 'CheckPointStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformClosePortalStmt (value: pgAst.ClosePortalStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ClosePortalStmt {
  const result : eslintAst.ClosePortalStmt = {
    type: 'ClosePortalStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['portalname'] !== undefined) {
    result['portalname'] = transformstring(value['portalname'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformClusterStmt (value: pgAst.ClusterStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ClusterStmt {
  const result : eslintAst.ClusterStmt = {
    type: 'ClusterStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['indexname'] !== undefined) {
    result['indexname'] = transformstring(value['indexname'])
  }
  
  
  if (value['verbose'] !== undefined) {
    result['verbose'] = transformBoolean(value['verbose'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCmdType (value: pgAst.CmdType): eslintAst.CmdType {
  return value
}
function transformCoalesceExpr (value: pgAst.CoalesceExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CoalesceExpr {
  const result : eslintAst.CoalesceExpr = {
    type: 'CoalesceExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['coalescetype'] !== undefined) {
    result['coalescetype'] = transformOid(value['coalescetype'])
  }
  
  
  if (value['coalescecollid'] !== undefined) {
    result['coalescecollid'] = transformOid(value['coalescecollid'])
  }
  
  
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCoerceToDomain (value: pgAst.CoerceToDomain, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CoerceToDomain {
  const result : eslintAst.CoerceToDomain = {
    type: 'CoerceToDomain',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['resulttype'] !== undefined) {
    result['resulttype'] = transformOid(value['resulttype'])
  }
  
  
  if (value['resulttypmod'] !== undefined) {
    result['resulttypmod'] = transformGoInt32(value['resulttypmod'])
  }
  
  
  if (value['resultcollid'] !== undefined) {
    result['resultcollid'] = transformOid(value['resultcollid'])
  }
  
  
  if (value['coercionformat'] !== undefined) {
    result['coercionformat'] = transformCoercionForm(value['coercionformat'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCoerceToDomainValue (value: pgAst.CoerceToDomainValue, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CoerceToDomainValue {
  const result : eslintAst.CoerceToDomainValue = {
    type: 'CoerceToDomainValue',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['typeId'] !== undefined) {
    result['typeId'] = transformOid(value['typeId'])
  }
  
  
  if (value['typeMod'] !== undefined) {
    result['typeMod'] = transformGoInt32(value['typeMod'])
  }
  
  
  if (value['collation'] !== undefined) {
    result['collation'] = transformOid(value['collation'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCoerceViaIO (value: pgAst.CoerceViaIO, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CoerceViaIO {
  const result : eslintAst.CoerceViaIO = {
    type: 'CoerceViaIO',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['resulttype'] !== undefined) {
    result['resulttype'] = transformOid(value['resulttype'])
  }
  
  
  if (value['resultcollid'] !== undefined) {
    result['resultcollid'] = transformOid(value['resultcollid'])
  }
  
  
  if (value['coerceformat'] !== undefined) {
    result['coerceformat'] = transformCoercionForm(value['coerceformat'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCoercionContext (value: pgAst.CoercionContext): eslintAst.CoercionContext {
  return value
}
function transformCoercionForm (value: pgAst.CoercionForm): eslintAst.CoercionForm {
  return value
}
function transformCollateClause (value: pgAst.CollateClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CollateClause {
  const result : eslintAst.CollateClause = {
    type: 'CollateClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['collname'] !== undefined) {
    const resultTransform = transformArrayNode(value['collname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['collname'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCollateExpr (value: pgAst.CollateExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CollateExpr {
  const result : eslintAst.CollateExpr = {
    type: 'CollateExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['collOid'] !== undefined) {
    result['collOid'] = transformOid(value['collOid'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformColumnDef (value: pgAst.ColumnDef, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ColumnDef {
  const result : eslintAst.ColumnDef = {
    type: 'ColumnDef',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['colname'] !== undefined) {
    result['colname'] = transformstring(value['colname'])
  }
  
  
  if (value['typeName'] !== undefined) {
    const resultTransform = transformTypeName(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform
  } 
  if (value['inhcount'] !== undefined) {
    result['inhcount'] = transformGoInt(value['inhcount'])
  }
  
  
  if (value['isLocal'] !== undefined) {
    result['isLocal'] = transformBoolean(value['isLocal'])
  }
  
  
  if (value['isNotNull'] !== undefined) {
    result['isNotNull'] = transformBoolean(value['isNotNull'])
  }
  
  
  if (value['isFromType'] !== undefined) {
    result['isFromType'] = transformBoolean(value['isFromType'])
  }
  
  
  if (value['isFromParent'] !== undefined) {
    result['isFromParent'] = transformBoolean(value['isFromParent'])
  }
  
  
  if (value['storage'] !== undefined) {
    result['storage'] = transformGoByte(value['storage'])
  }
  
  
  if (value['rawDefault'] !== undefined) {
    const resultTransform = transformNode(value['rawDefault'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rawDefault'] = resultTransform
  } 
  if (value['cookedDefault'] !== undefined) {
    const resultTransform = transformNode(value['cookedDefault'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['cookedDefault'] = resultTransform
  } 
  if (value['identity'] !== undefined) {
    result['identity'] = transformGoByte(value['identity'])
  }
  
  
  if (value['collClause'] !== undefined) {
    const resultTransform = transformCollateClause(value['collClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['collClause'] = resultTransform
  } 
  if (value['collOid'] !== undefined) {
    result['collOid'] = transformOid(value['collOid'])
  }
  
  
  if (value['constraints'] !== undefined) {
    const resultTransform = transformArrayNode(value['constraints'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['constraints'] = resultTransform.result
  } 
  if (value['fdwoptions'] !== undefined) {
    const resultTransform = transformArrayNode(value['fdwoptions'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['fdwoptions'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformColumnRef (value: pgAst.ColumnRef, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ColumnRef {
  const result : eslintAst.ColumnRef = {
    type: 'ColumnRef',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['fields'] !== undefined) {
    const resultTransform = transformArrayNode(value['fields'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['fields'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCommentStmt (value: pgAst.CommentStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CommentStmt {
  const result : eslintAst.CommentStmt = {
    type: 'CommentStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['objtype'] !== undefined) {
    result['objtype'] = transformObjectType(value['objtype'])
  }
  
  
  if (value['object'] !== undefined) {
    const resultTransform = transformNode(value['object'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['object'] = resultTransform
  } 
  if (value['comment'] !== undefined) {
    result['comment'] = transformstring(value['comment'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCommonTableExpr (value: pgAst.CommonTableExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CommonTableExpr {
  const result : eslintAst.CommonTableExpr = {
    type: 'CommonTableExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['ctename'] !== undefined) {
    result['ctename'] = transformstring(value['ctename'])
  }
  
  
  if (value['aliascolnames'] !== undefined) {
    const resultTransform = transformArrayNode(value['aliascolnames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aliascolnames'] = resultTransform.result
  } 
  if (value['ctequery'] !== undefined) {
    const resultTransform = transformNode(value['ctequery'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['ctequery'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  if (value['cterecursive'] !== undefined) {
    result['cterecursive'] = transformBoolean(value['cterecursive'])
  }
  
  
  if (value['cterefcount'] !== undefined) {
    result['cterefcount'] = transformGoInt(value['cterefcount'])
  }
  
  
  if (value['ctecolnames'] !== undefined) {
    const resultTransform = transformArrayNode(value['ctecolnames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['ctecolnames'] = resultTransform.result
  } 
  if (value['ctecoltypes'] !== undefined) {
    const resultTransform = transformArrayNode(value['ctecoltypes'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['ctecoltypes'] = resultTransform.result
  } 
  if (value['ctecoltypmods'] !== undefined) {
    const resultTransform = transformArrayNode(value['ctecoltypmods'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['ctecoltypmods'] = resultTransform.result
  } 
  if (value['ctecolcollations'] !== undefined) {
    const resultTransform = transformArrayNode(value['ctecolcollations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['ctecolcollations'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCompositeTypeStmt (value: pgAst.CompositeTypeStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CompositeTypeStmt {
  const result : eslintAst.CompositeTypeStmt = {
    type: 'CompositeTypeStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['typevar'] !== undefined) {
    const resultTransform = transformRangeVar(value['typevar'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typevar'] = resultTransform
  } 
  if (value['coldeflist'] !== undefined) {
    const resultTransform = transformArrayNode(value['coldeflist'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['coldeflist'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformConst (value: pgAst.Const, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Const {
  const result : eslintAst.Const = {
    type: 'Const',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['consttype'] !== undefined) {
    result['consttype'] = transformOid(value['consttype'])
  }
  
  
  if (value['consttypmod'] !== undefined) {
    result['consttypmod'] = transformGoInt32(value['consttypmod'])
  }
  
  
  if (value['constcollid'] !== undefined) {
    result['constcollid'] = transformOid(value['constcollid'])
  }
  
  
  if (value['constlen'] !== undefined) {
    result['constlen'] = transformGoInt(value['constlen'])
  }
  
  
  if (value['constvalue'] !== undefined) {
    result['constvalue'] = transformDatum(value['constvalue'])
  }
  
  
  if (value['constisnull'] !== undefined) {
    result['constisnull'] = transformBoolean(value['constisnull'])
  }
  
  
  if (value['constbyval'] !== undefined) {
    result['constbyval'] = transformBoolean(value['constbyval'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformConstrType (value: pgAst.ConstrType): eslintAst.ConstrType {
  return value
}
function transformConstraint (value: pgAst.Constraint, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Constraint {
  const result : eslintAst.Constraint = {
    type: 'Constraint',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['contype'] !== undefined) {
    result['contype'] = transformConstrType(value['contype'])
  }
  
  
  if (value['conname'] !== undefined) {
    result['conname'] = transformstring(value['conname'])
  }
  
  
  if (value['deferrable'] !== undefined) {
    result['deferrable'] = transformBoolean(value['deferrable'])
  }
  
  
  if (value['initdeferred'] !== undefined) {
    result['initdeferred'] = transformBoolean(value['initdeferred'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  if (value['isNoInherit'] !== undefined) {
    result['isNoInherit'] = transformBoolean(value['isNoInherit'])
  }
  
  
  if (value['rawExpr'] !== undefined) {
    const resultTransform = transformNode(value['rawExpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rawExpr'] = resultTransform
  } 
  if (value['cookedExpr'] !== undefined) {
    result['cookedExpr'] = transformstring(value['cookedExpr'])
  }
  
  
  if (value['generatedWhen'] !== undefined) {
    result['generatedWhen'] = transformGoByte(value['generatedWhen'])
  }
  
  
  if (value['keys'] !== undefined) {
    const resultTransform = transformArrayNode(value['keys'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['keys'] = resultTransform.result
  } 
  if (value['exclusions'] !== undefined) {
    const resultTransform = transformArrayNode(value['exclusions'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['exclusions'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['indexname'] !== undefined) {
    result['indexname'] = transformstring(value['indexname'])
  }
  
  
  if (value['indexspace'] !== undefined) {
    result['indexspace'] = transformstring(value['indexspace'])
  }
  
  
  if (value['accessMethod'] !== undefined) {
    result['accessMethod'] = transformstring(value['accessMethod'])
  }
  
  
  if (value['whereClause'] !== undefined) {
    const resultTransform = transformNode(value['whereClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whereClause'] = resultTransform
  } 
  if (value['pktable'] !== undefined) {
    const resultTransform = transformRangeVar(value['pktable'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['pktable'] = resultTransform
  } 
  if (value['fkAttrs'] !== undefined) {
    const resultTransform = transformArrayNode(value['fkAttrs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['fkAttrs'] = resultTransform.result
  } 
  if (value['pkAttrs'] !== undefined) {
    const resultTransform = transformArrayNode(value['pkAttrs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['pkAttrs'] = resultTransform.result
  } 
  if (value['fkMatchtype'] !== undefined) {
    result['fkMatchtype'] = transformGoByte(value['fkMatchtype'])
  }
  
  
  if (value['fkUpdAction'] !== undefined) {
    result['fkUpdAction'] = transformGoByte(value['fkUpdAction'])
  }
  
  
  if (value['fkDelAction'] !== undefined) {
    result['fkDelAction'] = transformGoByte(value['fkDelAction'])
  }
  
  
  if (value['oldConpfeqop'] !== undefined) {
    const resultTransform = transformArrayNode(value['oldConpfeqop'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['oldConpfeqop'] = resultTransform.result
  } 
  if (value['oldPktableOid'] !== undefined) {
    result['oldPktableOid'] = transformOid(value['oldPktableOid'])
  }
  
  
  if (value['skipValidation'] !== undefined) {
    result['skipValidation'] = transformBoolean(value['skipValidation'])
  }
  
  
  if (value['initiallyValid'] !== undefined) {
    result['initiallyValid'] = transformBoolean(value['initiallyValid'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformConstraintsSetStmt (value: pgAst.ConstraintsSetStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ConstraintsSetStmt {
  const result : eslintAst.ConstraintsSetStmt = {
    type: 'ConstraintsSetStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['constraints'] !== undefined) {
    const resultTransform = transformArrayNode(value['constraints'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['constraints'] = resultTransform.result
  } 
  if (value['deferred'] !== undefined) {
    result['deferred'] = transformBoolean(value['deferred'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformContext (value: pgAst.Context): eslintAst.Context {
  return value
}
function transformConvertRowtypeExpr (value: pgAst.ConvertRowtypeExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ConvertRowtypeExpr {
  const result : eslintAst.ConvertRowtypeExpr = {
    type: 'ConvertRowtypeExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['resulttype'] !== undefined) {
    result['resulttype'] = transformOid(value['resulttype'])
  }
  
  
  if (value['convertformat'] !== undefined) {
    result['convertformat'] = transformCoercionForm(value['convertformat'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCopyStmt (value: pgAst.CopyStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CopyStmt {
  const result : eslintAst.CopyStmt = {
    type: 'CopyStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['query'] !== undefined) {
    const resultTransform = transformNode(value['query'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['query'] = resultTransform
  } 
  if (value['attlist'] !== undefined) {
    const resultTransform = transformArrayNode(value['attlist'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['attlist'] = resultTransform.result
  } 
  if (value['isFrom'] !== undefined) {
    result['isFrom'] = transformBoolean(value['isFrom'])
  }
  
  
  if (value['isProgram'] !== undefined) {
    result['isProgram'] = transformBoolean(value['isProgram'])
  }
  
  
  if (value['filename'] !== undefined) {
    result['filename'] = transformstring(value['filename'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateAmStmt (value: pgAst.CreateAmStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateAmStmt {
  const result : eslintAst.CreateAmStmt = {
    type: 'CreateAmStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['amname'] !== undefined) {
    result['amname'] = transformstring(value['amname'])
  }
  
  
  if (value['handlerName'] !== undefined) {
    const resultTransform = transformArrayNode(value['handlerName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['handlerName'] = resultTransform.result
  } 
  if (value['amtype'] !== undefined) {
    result['amtype'] = transformGoByte(value['amtype'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateCastStmt (value: pgAst.CreateCastStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateCastStmt {
  const result : eslintAst.CreateCastStmt = {
    type: 'CreateCastStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['sourcetype'] !== undefined) {
    const resultTransform = transformTypeName(value['sourcetype'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['sourcetype'] = resultTransform
  } 
  if (value['targettype'] !== undefined) {
    const resultTransform = transformTypeName(value['targettype'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['targettype'] = resultTransform
  } 
  if (value['func'] !== undefined) {
    const resultTransform = transformObjectWithArgs(value['func'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['func'] = resultTransform
  } 
  if (value['context'] !== undefined) {
    result['context'] = transformCoercionContext(value['context'])
  }
  
  
  if (value['inout'] !== undefined) {
    result['inout'] = transformBoolean(value['inout'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateConversionStmt (value: pgAst.CreateConversionStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateConversionStmt {
  const result : eslintAst.CreateConversionStmt = {
    type: 'CreateConversionStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['conversionName'] !== undefined) {
    const resultTransform = transformArrayNode(value['conversionName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['conversionName'] = resultTransform.result
  } 
  if (value['forEncodingName'] !== undefined) {
    result['forEncodingName'] = transformstring(value['forEncodingName'])
  }
  
  
  if (value['toEncodingName'] !== undefined) {
    result['toEncodingName'] = transformstring(value['toEncodingName'])
  }
  
  
  if (value['funcName'] !== undefined) {
    const resultTransform = transformArrayNode(value['funcName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funcName'] = resultTransform.result
  } 
  if (value['def'] !== undefined) {
    result['def'] = transformBoolean(value['def'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateDomainStmt (value: pgAst.CreateDomainStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateDomainStmt {
  const result : eslintAst.CreateDomainStmt = {
    type: 'CreateDomainStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['domainname'] !== undefined) {
    const resultTransform = transformArrayNode(value['domainname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['domainname'] = resultTransform.result
  } 
  if (value['typeName'] !== undefined) {
    const resultTransform = transformTypeName(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform
  } 
  if (value['collClause'] !== undefined) {
    const resultTransform = transformCollateClause(value['collClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['collClause'] = resultTransform
  } 
  if (value['constraints'] !== undefined) {
    const resultTransform = transformArrayNode(value['constraints'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['constraints'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateEnumStmt (value: pgAst.CreateEnumStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateEnumStmt {
  const result : eslintAst.CreateEnumStmt = {
    type: 'CreateEnumStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['typeName'] !== undefined) {
    const resultTransform = transformArrayNode(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform.result
  } 
  if (value['vals'] !== undefined) {
    const resultTransform = transformArrayNode(value['vals'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['vals'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateEventTrigStmt (value: pgAst.CreateEventTrigStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateEventTrigStmt {
  const result : eslintAst.CreateEventTrigStmt = {
    type: 'CreateEventTrigStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['trigname'] !== undefined) {
    result['trigname'] = transformstring(value['trigname'])
  }
  
  
  if (value['eventname'] !== undefined) {
    result['eventname'] = transformstring(value['eventname'])
  }
  
  
  if (value['whenclause'] !== undefined) {
    const resultTransform = transformArrayNode(value['whenclause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whenclause'] = resultTransform.result
  } 
  if (value['funcname'] !== undefined) {
    const resultTransform = transformArrayNode(value['funcname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funcname'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateExtensionStmt (value: pgAst.CreateExtensionStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateExtensionStmt {
  const result : eslintAst.CreateExtensionStmt = {
    type: 'CreateExtensionStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['extname'] !== undefined) {
    result['extname'] = transformstring(value['extname'])
  }
  
  
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateFdwStmt (value: pgAst.CreateFdwStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateFdwStmt {
  const result : eslintAst.CreateFdwStmt = {
    type: 'CreateFdwStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['fdwname'] !== undefined) {
    result['fdwname'] = transformstring(value['fdwname'])
  }
  
  
  if (value['funcOptions'] !== undefined) {
    const resultTransform = transformArrayNode(value['funcOptions'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funcOptions'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateForeignServerStmt (value: pgAst.CreateForeignServerStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateForeignServerStmt {
  const result : eslintAst.CreateForeignServerStmt = {
    type: 'CreateForeignServerStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['servername'] !== undefined) {
    result['servername'] = transformstring(value['servername'])
  }
  
  
  if (value['servertype'] !== undefined) {
    result['servertype'] = transformstring(value['servertype'])
  }
  
  
  if (value['version'] !== undefined) {
    result['version'] = transformstring(value['version'])
  }
  
  
  if (value['fdwname'] !== undefined) {
    result['fdwname'] = transformstring(value['fdwname'])
  }
  
  
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateForeignTableStmt (value: pgAst.CreateForeignTableStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateForeignTableStmt {
  const result : eslintAst.CreateForeignTableStmt = {
    type: 'CreateForeignTableStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['base'] !== undefined) {
    const resultTransform = transformCreateStmt(value['base'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['base'] = resultTransform
  } 
  if (value['servername'] !== undefined) {
    result['servername'] = transformstring(value['servername'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateFunctionStmt (value: pgAst.CreateFunctionStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateFunctionStmt {
  const result : eslintAst.CreateFunctionStmt = {
    type: 'CreateFunctionStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['replace'] !== undefined) {
    result['replace'] = transformBoolean(value['replace'])
  }
  
  
  if (value['funcname'] !== undefined) {
    const resultTransform = transformArrayNode(value['funcname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funcname'] = resultTransform.result
  } 
  if (value['parameters'] !== undefined) {
    const resultTransform = transformArrayNode(value['parameters'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['parameters'] = resultTransform.result
  } 
  if (value['returnType'] !== undefined) {
    const resultTransform = transformTypeName(value['returnType'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['returnType'] = resultTransform
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['withClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['withClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['withClause'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateOpClassItem (value: pgAst.CreateOpClassItem, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateOpClassItem {
  const result : eslintAst.CreateOpClassItem = {
    type: 'CreateOpClassItem',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['itemtype'] !== undefined) {
    result['itemtype'] = transformGoInt(value['itemtype'])
  }
  
  
  if (value['name'] !== undefined) {
    const resultTransform = transformObjectWithArgs(value['name'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['name'] = resultTransform
  } 
  if (value['number'] !== undefined) {
    result['number'] = transformGoInt(value['number'])
  }
  
  
  if (value['orderFamily'] !== undefined) {
    const resultTransform = transformArrayNode(value['orderFamily'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['orderFamily'] = resultTransform.result
  } 
  if (value['classArgs'] !== undefined) {
    const resultTransform = transformArrayNode(value['classArgs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['classArgs'] = resultTransform.result
  } 
  if (value['storedtype'] !== undefined) {
    const resultTransform = transformTypeName(value['storedtype'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['storedtype'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateOpClassStmt (value: pgAst.CreateOpClassStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateOpClassStmt {
  const result : eslintAst.CreateOpClassStmt = {
    type: 'CreateOpClassStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['opclassname'] !== undefined) {
    const resultTransform = transformArrayNode(value['opclassname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['opclassname'] = resultTransform.result
  } 
  if (value['opfamilyname'] !== undefined) {
    const resultTransform = transformArrayNode(value['opfamilyname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['opfamilyname'] = resultTransform.result
  } 
  if (value['amname'] !== undefined) {
    result['amname'] = transformstring(value['amname'])
  }
  
  
  if (value['datatype'] !== undefined) {
    const resultTransform = transformTypeName(value['datatype'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['datatype'] = resultTransform
  } 
  if (value['items'] !== undefined) {
    const resultTransform = transformArrayNode(value['items'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['items'] = resultTransform.result
  } 
  if (value['isDefault'] !== undefined) {
    result['isDefault'] = transformBoolean(value['isDefault'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateOpFamilyStmt (value: pgAst.CreateOpFamilyStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateOpFamilyStmt {
  const result : eslintAst.CreateOpFamilyStmt = {
    type: 'CreateOpFamilyStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['opfamilyname'] !== undefined) {
    const resultTransform = transformArrayNode(value['opfamilyname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['opfamilyname'] = resultTransform.result
  } 
  if (value['amname'] !== undefined) {
    result['amname'] = transformstring(value['amname'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreatePLangStmt (value: pgAst.CreatePLangStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreatePLangStmt {
  const result : eslintAst.CreatePLangStmt = {
    type: 'CreatePLangStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['replace'] !== undefined) {
    result['replace'] = transformBoolean(value['replace'])
  }
  
  
  if (value['plname'] !== undefined) {
    result['plname'] = transformstring(value['plname'])
  }
  
  
  if (value['plhandler'] !== undefined) {
    const resultTransform = transformArrayNode(value['plhandler'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['plhandler'] = resultTransform.result
  } 
  if (value['plinline'] !== undefined) {
    const resultTransform = transformArrayNode(value['plinline'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['plinline'] = resultTransform.result
  } 
  if (value['plvalidator'] !== undefined) {
    const resultTransform = transformArrayNode(value['plvalidator'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['plvalidator'] = resultTransform.result
  } 
  if (value['pltrusted'] !== undefined) {
    result['pltrusted'] = transformBoolean(value['pltrusted'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreatePolicyStmt (value: pgAst.CreatePolicyStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreatePolicyStmt {
  const result : eslintAst.CreatePolicyStmt = {
    type: 'CreatePolicyStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['policyName'] !== undefined) {
    result['policyName'] = transformstring(value['policyName'])
  }
  
  
  if (value['table'] !== undefined) {
    const resultTransform = transformRangeVar(value['table'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['table'] = resultTransform
  } 
  if (value['cmdName'] !== undefined) {
    result['cmdName'] = transformstring(value['cmdName'])
  }
  
  
  if (value['permissive'] !== undefined) {
    result['permissive'] = transformBoolean(value['permissive'])
  }
  
  
  if (value['roles'] !== undefined) {
    const resultTransform = transformArrayNode(value['roles'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['roles'] = resultTransform.result
  } 
  if (value['qual'] !== undefined) {
    const resultTransform = transformNode(value['qual'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['qual'] = resultTransform
  } 
  if (value['withCheck'] !== undefined) {
    const resultTransform = transformNode(value['withCheck'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['withCheck'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreatePublicationStmt (value: pgAst.CreatePublicationStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreatePublicationStmt {
  const result : eslintAst.CreatePublicationStmt = {
    type: 'CreatePublicationStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['pubname'] !== undefined) {
    result['pubname'] = transformstring(value['pubname'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['tables'] !== undefined) {
    const resultTransform = transformArrayNode(value['tables'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['tables'] = resultTransform.result
  } 
  if (value['forAllTables'] !== undefined) {
    result['forAllTables'] = transformBoolean(value['forAllTables'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateRangeStmt (value: pgAst.CreateRangeStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateRangeStmt {
  const result : eslintAst.CreateRangeStmt = {
    type: 'CreateRangeStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['typeName'] !== undefined) {
    const resultTransform = transformArrayNode(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform.result
  } 
  if (value['params'] !== undefined) {
    const resultTransform = transformArrayNode(value['params'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['params'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateRoleStmt (value: pgAst.CreateRoleStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateRoleStmt {
  const result : eslintAst.CreateRoleStmt = {
    type: 'CreateRoleStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['stmtType'] !== undefined) {
    result['stmtType'] = transformRoleStmtType(value['stmtType'])
  }
  
  
  if (value['role'] !== undefined) {
    result['role'] = transformstring(value['role'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateSchemaStmt (value: pgAst.CreateSchemaStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateSchemaStmt {
  const result : eslintAst.CreateSchemaStmt = {
    type: 'CreateSchemaStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['schemaname'] !== undefined) {
    result['schemaname'] = transformstring(value['schemaname'])
  }
  
  
  if (value['authrole'] !== undefined) {
    const resultTransform = transformRoleSpec(value['authrole'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['authrole'] = resultTransform
  } 
  if (value['schemaElts'] !== undefined) {
    const resultTransform = transformArrayNode(value['schemaElts'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['schemaElts'] = resultTransform.result
  } 
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateSeqStmt (value: pgAst.CreateSeqStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateSeqStmt {
  const result : eslintAst.CreateSeqStmt = {
    type: 'CreateSeqStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['sequence'] !== undefined) {
    const resultTransform = transformRangeVar(value['sequence'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['sequence'] = resultTransform
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['ownerId'] !== undefined) {
    result['ownerId'] = transformOid(value['ownerId'])
  }
  
  
  if (value['forIdentity'] !== undefined) {
    result['forIdentity'] = transformBoolean(value['forIdentity'])
  }
  
  
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateStatsStmt (value: pgAst.CreateStatsStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateStatsStmt {
  const result : eslintAst.CreateStatsStmt = {
    type: 'CreateStatsStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['defnames'] !== undefined) {
    const resultTransform = transformArrayNode(value['defnames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['defnames'] = resultTransform.result
  } 
  if (value['statTypes'] !== undefined) {
    const resultTransform = transformArrayNode(value['statTypes'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['statTypes'] = resultTransform.result
  } 
  if (value['exprs'] !== undefined) {
    const resultTransform = transformArrayNode(value['exprs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['exprs'] = resultTransform.result
  } 
  if (value['relations'] !== undefined) {
    const resultTransform = transformArrayNode(value['relations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relations'] = resultTransform.result
  } 
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateStmt (value: pgAst.CreateStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateStmt {
  const result : eslintAst.CreateStmt = {
    type: 'CreateStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['tableElts'] !== undefined) {
    const resultTransform = transformArrayNode(value['tableElts'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['tableElts'] = resultTransform.result
  } 
  if (value['inhRelations'] !== undefined) {
    const resultTransform = transformArrayNode(value['inhRelations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['inhRelations'] = resultTransform.result
  } 
  if (value['partbound'] !== undefined) {
    const resultTransform = transformPartitionBoundSpec(value['partbound'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['partbound'] = resultTransform
  } 
  if (value['partspec'] !== undefined) {
    const resultTransform = transformPartitionSpec(value['partspec'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['partspec'] = resultTransform
  } 
  if (value['ofTypename'] !== undefined) {
    const resultTransform = transformTypeName(value['ofTypename'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['ofTypename'] = resultTransform
  } 
  if (value['constraints'] !== undefined) {
    const resultTransform = transformArrayNode(value['constraints'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['constraints'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['oncommit'] !== undefined) {
    result['oncommit'] = transformOnCommitAction(value['oncommit'])
  }
  
  
  if (value['tablespacename'] !== undefined) {
    result['tablespacename'] = transformstring(value['tablespacename'])
  }
  
  
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateSubscriptionStmt (value: pgAst.CreateSubscriptionStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateSubscriptionStmt {
  const result : eslintAst.CreateSubscriptionStmt = {
    type: 'CreateSubscriptionStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['subname'] !== undefined) {
    result['subname'] = transformstring(value['subname'])
  }
  
  
  if (value['conninfo'] !== undefined) {
    result['conninfo'] = transformstring(value['conninfo'])
  }
  
  
  if (value['publication'] !== undefined) {
    const resultTransform = transformArrayNode(value['publication'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['publication'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateTableAsStmt (value: pgAst.CreateTableAsStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateTableAsStmt {
  const result : eslintAst.CreateTableAsStmt = {
    type: 'CreateTableAsStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['query'] !== undefined) {
    const resultTransform = transformNode(value['query'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['query'] = resultTransform
  } 
  if (value['into'] !== undefined) {
    const resultTransform = transformIntoClause(value['into'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['into'] = resultTransform
  } 
  if (value['relkind'] !== undefined) {
    result['relkind'] = transformObjectType(value['relkind'])
  }
  
  
  if (value['isSelectInto'] !== undefined) {
    result['isSelectInto'] = transformBoolean(value['isSelectInto'])
  }
  
  
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateTableSpaceStmt (value: pgAst.CreateTableSpaceStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateTableSpaceStmt {
  const result : eslintAst.CreateTableSpaceStmt = {
    type: 'CreateTableSpaceStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['tablespacename'] !== undefined) {
    result['tablespacename'] = transformstring(value['tablespacename'])
  }
  
  
  if (value['owner'] !== undefined) {
    const resultTransform = transformRoleSpec(value['owner'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['owner'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformstring(value['location'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateTransformStmt (value: pgAst.CreateTransformStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateTransformStmt {
  const result : eslintAst.CreateTransformStmt = {
    type: 'CreateTransformStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['replace'] !== undefined) {
    result['replace'] = transformBoolean(value['replace'])
  }
  
  
  if (value['typeName'] !== undefined) {
    const resultTransform = transformTypeName(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform
  } 
  if (value['lang'] !== undefined) {
    result['lang'] = transformstring(value['lang'])
  }
  
  
  if (value['fromsql'] !== undefined) {
    const resultTransform = transformObjectWithArgs(value['fromsql'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['fromsql'] = resultTransform
  } 
  if (value['tosql'] !== undefined) {
    const resultTransform = transformObjectWithArgs(value['tosql'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['tosql'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateTrigStmt (value: pgAst.CreateTrigStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateTrigStmt {
  const result : eslintAst.CreateTrigStmt = {
    type: 'CreateTrigStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['trigname'] !== undefined) {
    result['trigname'] = transformstring(value['trigname'])
  }
  
  
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['funcname'] !== undefined) {
    const resultTransform = transformArrayNode(value['funcname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funcname'] = resultTransform.result
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['row'] !== undefined) {
    result['row'] = transformBoolean(value['row'])
  }
  
  
  if (value['timing'] !== undefined) {
    result['timing'] = transformGoInt16(value['timing'])
  }
  
  
  if (value['events'] !== undefined) {
    result['events'] = transformGoInt16(value['events'])
  }
  
  
  if (value['columns'] !== undefined) {
    const resultTransform = transformArrayNode(value['columns'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['columns'] = resultTransform.result
  } 
  if (value['whenClause'] !== undefined) {
    const resultTransform = transformNode(value['whenClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whenClause'] = resultTransform
  } 
  if (value['isconstraint'] !== undefined) {
    result['isconstraint'] = transformBoolean(value['isconstraint'])
  }
  
  
  if (value['transitionRels'] !== undefined) {
    const resultTransform = transformArrayNode(value['transitionRels'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['transitionRels'] = resultTransform.result
  } 
  if (value['deferrable'] !== undefined) {
    result['deferrable'] = transformBoolean(value['deferrable'])
  }
  
  
  if (value['initdeferred'] !== undefined) {
    result['initdeferred'] = transformBoolean(value['initdeferred'])
  }
  
  
  if (value['constrrel'] !== undefined) {
    const resultTransform = transformRangeVar(value['constrrel'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['constrrel'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreateUserMappingStmt (value: pgAst.CreateUserMappingStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreateUserMappingStmt {
  const result : eslintAst.CreateUserMappingStmt = {
    type: 'CreateUserMappingStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['user'] !== undefined) {
    const resultTransform = transformRoleSpec(value['user'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['user'] = resultTransform
  } 
  if (value['servername'] !== undefined) {
    result['servername'] = transformstring(value['servername'])
  }
  
  
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCreatedbStmt (value: pgAst.CreatedbStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CreatedbStmt {
  const result : eslintAst.CreatedbStmt = {
    type: 'CreatedbStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['dbname'] !== undefined) {
    result['dbname'] = transformstring(value['dbname'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformCurrentOfExpr (value: pgAst.CurrentOfExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.CurrentOfExpr {
  const result : eslintAst.CurrentOfExpr = {
    type: 'CurrentOfExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['cvarno'] !== undefined) {
    result['cvarno'] = transformIndex(value['cvarno'])
  }
  
  
  if (value['cursorName'] !== undefined) {
    result['cursorName'] = transformstring(value['cursorName'])
  }
  
  
  if (value['cursorParam'] !== undefined) {
    result['cursorParam'] = transformGoInt(value['cursorParam'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDeallocateStmt (value: pgAst.DeallocateStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DeallocateStmt {
  const result : eslintAst.DeallocateStmt = {
    type: 'DeallocateStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDeclareCursorStmt (value: pgAst.DeclareCursorStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DeclareCursorStmt {
  const result : eslintAst.DeclareCursorStmt = {
    type: 'DeclareCursorStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['portalname'] !== undefined) {
    result['portalname'] = transformstring(value['portalname'])
  }
  
  
  if (value['options'] !== undefined) {
    result['options'] = transformGoInt(value['options'])
  }
  
  
  if (value['query'] !== undefined) {
    const resultTransform = transformNode(value['query'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['query'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDefElem (value: pgAst.DefElem, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DefElem {
  const result : eslintAst.DefElem = {
    type: 'DefElem',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['defnamespace'] !== undefined) {
    result['defnamespace'] = transformstring(value['defnamespace'])
  }
  
  
  if (value['defname'] !== undefined) {
    result['defname'] = transformstring(value['defname'])
  }
  
  
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['defaction'] !== undefined) {
    result['defaction'] = transformDefElemAction(value['defaction'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDefElemAction (value: pgAst.DefElemAction): eslintAst.DefElemAction {
  return value
}
function transformDefineStmt (value: pgAst.DefineStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DefineStmt {
  const result : eslintAst.DefineStmt = {
    type: 'DefineStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformObjectType(value['kind'])
  }
  
  
  if (value['oldstyle'] !== undefined) {
    result['oldstyle'] = transformBoolean(value['oldstyle'])
  }
  
  
  if (value['defnames'] !== undefined) {
    const resultTransform = transformArrayNode(value['defnames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['defnames'] = resultTransform.result
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['definition'] !== undefined) {
    const resultTransform = transformArrayNode(value['definition'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['definition'] = resultTransform.result
  } 
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDeleteStmt (value: pgAst.DeleteStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DeleteStmt {
  const result : eslintAst.DeleteStmt = {
    type: 'DeleteStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['usingClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['usingClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['usingClause'] = resultTransform.result
  } 
  if (value['whereClause'] !== undefined) {
    const resultTransform = transformNode(value['whereClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whereClause'] = resultTransform
  } 
  if (value['returningList'] !== undefined) {
    const resultTransform = transformArrayNode(value['returningList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['returningList'] = resultTransform.result
  } 
  if (value['withClause'] !== undefined) {
    const resultTransform = transformWithClause(value['withClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['withClause'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDiscardMode (value: pgAst.DiscardMode): eslintAst.DiscardMode {
  return value
}
function transformDiscardStmt (value: pgAst.DiscardStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DiscardStmt {
  const result : eslintAst.DiscardStmt = {
    type: 'DiscardStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['target'] !== undefined) {
    result['target'] = transformDiscardMode(value['target'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDoStmt (value: pgAst.DoStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DoStmt {
  const result : eslintAst.DoStmt = {
    type: 'DoStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDropBehavior (value: pgAst.DropBehavior): eslintAst.DropBehavior {
  return value
}
function transformDropOwnedStmt (value: pgAst.DropOwnedStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DropOwnedStmt {
  const result : eslintAst.DropOwnedStmt = {
    type: 'DropOwnedStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['roles'] !== undefined) {
    const resultTransform = transformArrayNode(value['roles'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['roles'] = resultTransform.result
  } 
  if (value['behavior'] !== undefined) {
    result['behavior'] = transformDropBehavior(value['behavior'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDropRoleStmt (value: pgAst.DropRoleStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DropRoleStmt {
  const result : eslintAst.DropRoleStmt = {
    type: 'DropRoleStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['roles'] !== undefined) {
    const resultTransform = transformArrayNode(value['roles'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['roles'] = resultTransform.result
  } 
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDropStmt (value: pgAst.DropStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DropStmt {
  const result : eslintAst.DropStmt = {
    type: 'DropStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['objects'] !== undefined) {
    const resultTransform = transformArrayNode(value['objects'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['objects'] = resultTransform.result
  } 
  if (value['removeType'] !== undefined) {
    result['removeType'] = transformObjectType(value['removeType'])
  }
  
  
  if (value['behavior'] !== undefined) {
    result['behavior'] = transformDropBehavior(value['behavior'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  if (value['concurrent'] !== undefined) {
    result['concurrent'] = transformBoolean(value['concurrent'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDropSubscriptionStmt (value: pgAst.DropSubscriptionStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DropSubscriptionStmt {
  const result : eslintAst.DropSubscriptionStmt = {
    type: 'DropSubscriptionStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['subname'] !== undefined) {
    result['subname'] = transformstring(value['subname'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  if (value['behavior'] !== undefined) {
    result['behavior'] = transformDropBehavior(value['behavior'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDropTableSpaceStmt (value: pgAst.DropTableSpaceStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DropTableSpaceStmt {
  const result : eslintAst.DropTableSpaceStmt = {
    type: 'DropTableSpaceStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['tablespacename'] !== undefined) {
    result['tablespacename'] = transformstring(value['tablespacename'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDropUserMappingStmt (value: pgAst.DropUserMappingStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DropUserMappingStmt {
  const result : eslintAst.DropUserMappingStmt = {
    type: 'DropUserMappingStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['user'] !== undefined) {
    const resultTransform = transformRoleSpec(value['user'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['user'] = resultTransform
  } 
  if (value['servername'] !== undefined) {
    result['servername'] = transformstring(value['servername'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDropdbStmt (value: pgAst.DropdbStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DropdbStmt {
  const result : eslintAst.DropdbStmt = {
    type: 'DropdbStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['dbname'] !== undefined) {
    result['dbname'] = transformstring(value['dbname'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformExecuteStmt (value: pgAst.ExecuteStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ExecuteStmt {
  const result : eslintAst.ExecuteStmt = {
    type: 'ExecuteStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['params'] !== undefined) {
    const resultTransform = transformArrayNode(value['params'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['params'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformExplainStmt (value: pgAst.ExplainStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ExplainStmt {
  const result : eslintAst.ExplainStmt = {
    type: 'ExplainStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['query'] !== undefined) {
    const resultTransform = transformNode(value['query'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['query'] = resultTransform
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformExpr (value: pgAst.Expr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Expr {
  const result : eslintAst.Expr = {
    type: 'Expr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFetchDirection (value: pgAst.FetchDirection): eslintAst.FetchDirection {
  return value
}
function transformFetchStmt (value: pgAst.FetchStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.FetchStmt {
  const result : eslintAst.FetchStmt = {
    type: 'FetchStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['direction'] !== undefined) {
    result['direction'] = transformFetchDirection(value['direction'])
  }
  
  
  if (value['howMany'] !== undefined) {
    result['howMany'] = transformGoInt64(value['howMany'])
  }
  
  
  if (value['portalname'] !== undefined) {
    result['portalname'] = transformstring(value['portalname'])
  }
  
  
  if (value['ismove'] !== undefined) {
    result['ismove'] = transformBoolean(value['ismove'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFieldSelect (value: pgAst.FieldSelect, parent: eslintAst.Node|null, possibleStart: number): eslintAst.FieldSelect {
  const result : eslintAst.FieldSelect = {
    type: 'FieldSelect',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['fieldnum'] !== undefined) {
    result['fieldnum'] = transformAttrNumber(value['fieldnum'])
  }
  
  
  if (value['resulttype'] !== undefined) {
    result['resulttype'] = transformOid(value['resulttype'])
  }
  
  
  if (value['resulttypmod'] !== undefined) {
    result['resulttypmod'] = transformGoInt32(value['resulttypmod'])
  }
  
  
  if (value['resultcollid'] !== undefined) {
    result['resultcollid'] = transformOid(value['resultcollid'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFieldStore (value: pgAst.FieldStore, parent: eslintAst.Node|null, possibleStart: number): eslintAst.FieldStore {
  const result : eslintAst.FieldStore = {
    type: 'FieldStore',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['newvals'] !== undefined) {
    const resultTransform = transformArrayNode(value['newvals'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['newvals'] = resultTransform.result
  } 
  if (value['fieldnums'] !== undefined) {
    const resultTransform = transformArrayNode(value['fieldnums'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['fieldnums'] = resultTransform.result
  } 
  if (value['resulttype'] !== undefined) {
    result['resulttype'] = transformOid(value['resulttype'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFloat (value: pgAst.Float, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Float {
  const result : eslintAst.Float = {
    type: 'Float',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['str'] !== undefined) {
    result['str'] = transformstring(value['str'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFromExpr (value: pgAst.FromExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.FromExpr {
  const result : eslintAst.FromExpr = {
    type: 'FromExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['fromlist'] !== undefined) {
    const resultTransform = transformArrayNode(value['fromlist'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['fromlist'] = resultTransform.result
  } 
  if (value['quals'] !== undefined) {
    const resultTransform = transformNode(value['quals'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['quals'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFuncCall (value: pgAst.FuncCall, parent: eslintAst.Node|null, possibleStart: number): eslintAst.FuncCall {
  const result : eslintAst.FuncCall = {
    type: 'FuncCall',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['funcname'] !== undefined) {
    const resultTransform = transformArrayNode(value['funcname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funcname'] = resultTransform.result
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['aggOrder'] !== undefined) {
    const resultTransform = transformArrayNode(value['aggOrder'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aggOrder'] = resultTransform.result
  } 
  if (value['aggFilter'] !== undefined) {
    const resultTransform = transformNode(value['aggFilter'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aggFilter'] = resultTransform
  } 
  if (value['aggWithinGroup'] !== undefined) {
    result['aggWithinGroup'] = transformBoolean(value['aggWithinGroup'])
  }
  
  
  if (value['aggStar'] !== undefined) {
    result['aggStar'] = transformBoolean(value['aggStar'])
  }
  
  
  if (value['aggDistinct'] !== undefined) {
    result['aggDistinct'] = transformBoolean(value['aggDistinct'])
  }
  
  
  if (value['funcVariadic'] !== undefined) {
    result['funcVariadic'] = transformBoolean(value['funcVariadic'])
  }
  
  
  if (value['over'] !== undefined) {
    const resultTransform = transformWindowDef(value['over'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['over'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFuncExpr (value: pgAst.FuncExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.FuncExpr {
  const result : eslintAst.FuncExpr = {
    type: 'FuncExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['funcid'] !== undefined) {
    result['funcid'] = transformOid(value['funcid'])
  }
  
  
  if (value['funcresulttype'] !== undefined) {
    result['funcresulttype'] = transformOid(value['funcresulttype'])
  }
  
  
  if (value['funcretset'] !== undefined) {
    result['funcretset'] = transformBoolean(value['funcretset'])
  }
  
  
  if (value['funcvariadic'] !== undefined) {
    result['funcvariadic'] = transformBoolean(value['funcvariadic'])
  }
  
  
  if (value['funcformat'] !== undefined) {
    result['funcformat'] = transformCoercionForm(value['funcformat'])
  }
  
  
  if (value['funccollid'] !== undefined) {
    result['funccollid'] = transformOid(value['funccollid'])
  }
  
  
  if (value['inputcollid'] !== undefined) {
    result['inputcollid'] = transformOid(value['inputcollid'])
  }
  
  
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFunctionParameter (value: pgAst.FunctionParameter, parent: eslintAst.Node|null, possibleStart: number): eslintAst.FunctionParameter {
  const result : eslintAst.FunctionParameter = {
    type: 'FunctionParameter',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['argType'] !== undefined) {
    const resultTransform = transformTypeName(value['argType'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['argType'] = resultTransform
  } 
  if (value['mode'] !== undefined) {
    result['mode'] = transformFunctionParameterMode(value['mode'])
  }
  
  
  if (value['defexpr'] !== undefined) {
    const resultTransform = transformNode(value['defexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['defexpr'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFunctionParameterMode (value: pgAst.FunctionParameterMode): eslintAst.FunctionParameterMode {
  return value
}
function transformGrantObjectType (value: pgAst.GrantObjectType): eslintAst.GrantObjectType {
  return value
}
function transformGrantRoleStmt (value: pgAst.GrantRoleStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.GrantRoleStmt {
  const result : eslintAst.GrantRoleStmt = {
    type: 'GrantRoleStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['grantedRoles'] !== undefined) {
    const resultTransform = transformArrayNode(value['grantedRoles'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['grantedRoles'] = resultTransform.result
  } 
  if (value['granteeRoles'] !== undefined) {
    const resultTransform = transformArrayNode(value['granteeRoles'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['granteeRoles'] = resultTransform.result
  } 
  if (value['isGrant'] !== undefined) {
    result['isGrant'] = transformBoolean(value['isGrant'])
  }
  
  
  if (value['adminOpt'] !== undefined) {
    result['adminOpt'] = transformBoolean(value['adminOpt'])
  }
  
  
  if (value['grantor'] !== undefined) {
    const resultTransform = transformRoleSpec(value['grantor'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['grantor'] = resultTransform
  } 
  if (value['behavior'] !== undefined) {
    result['behavior'] = transformDropBehavior(value['behavior'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformGrantStmt (value: pgAst.GrantStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.GrantStmt {
  const result : eslintAst.GrantStmt = {
    type: 'GrantStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['isGrant'] !== undefined) {
    result['isGrant'] = transformBoolean(value['isGrant'])
  }
  
  
  if (value['targtype'] !== undefined) {
    result['targtype'] = transformGrantTargetType(value['targtype'])
  }
  
  
  if (value['objtype'] !== undefined) {
    result['objtype'] = transformGrantObjectType(value['objtype'])
  }
  
  
  if (value['objects'] !== undefined) {
    const resultTransform = transformArrayNode(value['objects'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['objects'] = resultTransform.result
  } 
  if (value['privileges'] !== undefined) {
    const resultTransform = transformArrayNode(value['privileges'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['privileges'] = resultTransform.result
  } 
  if (value['grantees'] !== undefined) {
    const resultTransform = transformArrayNode(value['grantees'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['grantees'] = resultTransform.result
  } 
  if (value['grantOption'] !== undefined) {
    result['grantOption'] = transformBoolean(value['grantOption'])
  }
  
  
  if (value['behavior'] !== undefined) {
    result['behavior'] = transformDropBehavior(value['behavior'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformGrantTargetType (value: pgAst.GrantTargetType): eslintAst.GrantTargetType {
  return value
}
function transformGroupingFunc (value: pgAst.GroupingFunc, parent: eslintAst.Node|null, possibleStart: number): eslintAst.GroupingFunc {
  const result : eslintAst.GroupingFunc = {
    type: 'GroupingFunc',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['refs'] !== undefined) {
    const resultTransform = transformArrayNode(value['refs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['refs'] = resultTransform.result
  } 
  if (value['cols'] !== undefined) {
    const resultTransform = transformArrayNode(value['cols'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['cols'] = resultTransform.result
  } 
  if (value['agglevelsup'] !== undefined) {
    result['agglevelsup'] = transformIndex(value['agglevelsup'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformGroupingSet (value: pgAst.GroupingSet, parent: eslintAst.Node|null, possibleStart: number): eslintAst.GroupingSet {
  const result : eslintAst.GroupingSet = {
    type: 'GroupingSet',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformGroupingSetKind(value['kind'])
  }
  
  
  if (value['content'] !== undefined) {
    const resultTransform = transformArrayNode(value['content'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['content'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformGroupingSetKind (value: pgAst.GroupingSetKind): eslintAst.GroupingSetKind {
  return value
}
function transformImportForeignSchemaStmt (value: pgAst.ImportForeignSchemaStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ImportForeignSchemaStmt {
  const result : eslintAst.ImportForeignSchemaStmt = {
    type: 'ImportForeignSchemaStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['serverName'] !== undefined) {
    result['serverName'] = transformstring(value['serverName'])
  }
  
  
  if (value['remoteSchema'] !== undefined) {
    result['remoteSchema'] = transformstring(value['remoteSchema'])
  }
  
  
  if (value['localSchema'] !== undefined) {
    result['localSchema'] = transformstring(value['localSchema'])
  }
  
  
  if (value['listType'] !== undefined) {
    result['listType'] = transformImportForeignSchemaType(value['listType'])
  }
  
  
  if (value['tableList'] !== undefined) {
    const resultTransform = transformArrayNode(value['tableList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['tableList'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformImportForeignSchemaType (value: pgAst.ImportForeignSchemaType): eslintAst.ImportForeignSchemaType {
  return value
}
function transformIndexElem (value: pgAst.IndexElem, parent: eslintAst.Node|null, possibleStart: number): eslintAst.IndexElem {
  const result : eslintAst.IndexElem = {
    type: 'IndexElem',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['expr'] !== undefined) {
    const resultTransform = transformNode(value['expr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['expr'] = resultTransform
  } 
  if (value['indexcolname'] !== undefined) {
    result['indexcolname'] = transformstring(value['indexcolname'])
  }
  
  
  if (value['collation'] !== undefined) {
    const resultTransform = transformArrayNode(value['collation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['collation'] = resultTransform.result
  } 
  if (value['opclass'] !== undefined) {
    const resultTransform = transformArrayNode(value['opclass'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['opclass'] = resultTransform.result
  } 
  if (value['ordering'] !== undefined) {
    result['ordering'] = transformSortByDir(value['ordering'])
  }
  
  
  if (value['nullsOrdering'] !== undefined) {
    result['nullsOrdering'] = transformSortByNulls(value['nullsOrdering'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformIndexStmt (value: pgAst.IndexStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.IndexStmt {
  const result : eslintAst.IndexStmt = {
    type: 'IndexStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['idxname'] !== undefined) {
    result['idxname'] = transformstring(value['idxname'])
  }
  
  
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['accessMethod'] !== undefined) {
    result['accessMethod'] = transformstring(value['accessMethod'])
  }
  
  
  if (value['tableSpace'] !== undefined) {
    result['tableSpace'] = transformstring(value['tableSpace'])
  }
  
  
  if (value['indexParams'] !== undefined) {
    const resultTransform = transformArrayNode(value['indexParams'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['indexParams'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['whereClause'] !== undefined) {
    const resultTransform = transformNode(value['whereClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whereClause'] = resultTransform
  } 
  if (value['excludeOpNames'] !== undefined) {
    const resultTransform = transformArrayNode(value['excludeOpNames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['excludeOpNames'] = resultTransform.result
  } 
  if (value['idxcomment'] !== undefined) {
    result['idxcomment'] = transformstring(value['idxcomment'])
  }
  
  
  if (value['indexOid'] !== undefined) {
    result['indexOid'] = transformOid(value['indexOid'])
  }
  
  
  if (value['oldNode'] !== undefined) {
    result['oldNode'] = transformOid(value['oldNode'])
  }
  
  
  if (value['unique'] !== undefined) {
    result['unique'] = transformBoolean(value['unique'])
  }
  
  
  if (value['primary'] !== undefined) {
    result['primary'] = transformBoolean(value['primary'])
  }
  
  
  if (value['isconstraint'] !== undefined) {
    result['isconstraint'] = transformBoolean(value['isconstraint'])
  }
  
  
  if (value['deferrable'] !== undefined) {
    result['deferrable'] = transformBoolean(value['deferrable'])
  }
  
  
  if (value['initdeferred'] !== undefined) {
    result['initdeferred'] = transformBoolean(value['initdeferred'])
  }
  
  
  if (value['transformed'] !== undefined) {
    result['transformed'] = transformBoolean(value['transformed'])
  }
  
  
  if (value['concurrent'] !== undefined) {
    result['concurrent'] = transformBoolean(value['concurrent'])
  }
  
  
  if (value['ifNotExists'] !== undefined) {
    result['ifNotExists'] = transformBoolean(value['ifNotExists'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformInferClause (value: pgAst.InferClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.InferClause {
  const result : eslintAst.InferClause = {
    type: 'InferClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['indexElems'] !== undefined) {
    const resultTransform = transformArrayNode(value['indexElems'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['indexElems'] = resultTransform.result
  } 
  if (value['whereClause'] !== undefined) {
    const resultTransform = transformNode(value['whereClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whereClause'] = resultTransform
  } 
  if (value['conname'] !== undefined) {
    result['conname'] = transformstring(value['conname'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformInferenceElem (value: pgAst.InferenceElem, parent: eslintAst.Node|null, possibleStart: number): eslintAst.InferenceElem {
  const result : eslintAst.InferenceElem = {
    type: 'InferenceElem',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['expr'] !== undefined) {
    const resultTransform = transformNode(value['expr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['expr'] = resultTransform
  } 
  if (value['infercollid'] !== undefined) {
    result['infercollid'] = transformOid(value['infercollid'])
  }
  
  
  if (value['inferopclass'] !== undefined) {
    result['inferopclass'] = transformOid(value['inferopclass'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformInlineCodeBlock (value: pgAst.InlineCodeBlock, parent: eslintAst.Node|null, possibleStart: number): eslintAst.InlineCodeBlock {
  const result : eslintAst.InlineCodeBlock = {
    type: 'InlineCodeBlock',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['sourceText'] !== undefined) {
    result['sourceText'] = transformstring(value['sourceText'])
  }
  
  
  if (value['langOid'] !== undefined) {
    result['langOid'] = transformOid(value['langOid'])
  }
  
  
  if (value['langIsTrusted'] !== undefined) {
    result['langIsTrusted'] = transformBoolean(value['langIsTrusted'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformInsertStmt (value: pgAst.InsertStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.InsertStmt {
  const result : eslintAst.InsertStmt = {
    type: 'InsertStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['cols'] !== undefined) {
    const resultTransform = transformArrayNode(value['cols'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['cols'] = resultTransform.result
  } 
  if (value['selectStmt'] !== undefined) {
    const resultTransform = transformNode(value['selectStmt'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['selectStmt'] = resultTransform
  } 
  if (value['onConflictClause'] !== undefined) {
    const resultTransform = transformOnConflictClause(value['onConflictClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['onConflictClause'] = resultTransform
  } 
  if (value['returningList'] !== undefined) {
    const resultTransform = transformArrayNode(value['returningList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['returningList'] = resultTransform.result
  } 
  if (value['withClause'] !== undefined) {
    const resultTransform = transformWithClause(value['withClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['withClause'] = resultTransform
  } 
  if (value['override'] !== undefined) {
    result['override'] = transformOverridingKind(value['override'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformInteger (value: pgAst.Integer, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Integer {
  const result : eslintAst.Integer = {
    type: 'Integer',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['ival'] !== undefined) {
    result['ival'] = transformGoInt64(value['ival'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformIntoClause (value: pgAst.IntoClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.IntoClause {
  const result : eslintAst.IntoClause = {
    type: 'IntoClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['rel'] !== undefined) {
    const resultTransform = transformRangeVar(value['rel'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rel'] = resultTransform
  } 
  if (value['colNames'] !== undefined) {
    const resultTransform = transformArrayNode(value['colNames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colNames'] = resultTransform.result
  } 
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['onCommit'] !== undefined) {
    result['onCommit'] = transformOnCommitAction(value['onCommit'])
  }
  
  
  if (value['tableSpaceName'] !== undefined) {
    result['tableSpaceName'] = transformstring(value['tableSpaceName'])
  }
  
  
  if (value['viewQuery'] !== undefined) {
    const resultTransform = transformNode(value['viewQuery'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['viewQuery'] = resultTransform
  } 
  if (value['skipData'] !== undefined) {
    result['skipData'] = transformBoolean(value['skipData'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformJoinExpr (value: pgAst.JoinExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.JoinExpr {
  const result : eslintAst.JoinExpr = {
    type: 'JoinExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['jointype'] !== undefined) {
    result['jointype'] = transformJoinType(value['jointype'])
  }
  
  
  if (value['isNatural'] !== undefined) {
    result['isNatural'] = transformBoolean(value['isNatural'])
  }
  
  
  if (value['larg'] !== undefined) {
    const resultTransform = transformNode(value['larg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['larg'] = resultTransform
  } 
  if (value['rarg'] !== undefined) {
    const resultTransform = transformNode(value['rarg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rarg'] = resultTransform
  } 
  if (value['usingClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['usingClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['usingClause'] = resultTransform.result
  } 
  if (value['quals'] !== undefined) {
    const resultTransform = transformNode(value['quals'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['quals'] = resultTransform
  } 
  if (value['alias'] !== undefined) {
    const resultTransform = transformAlias(value['alias'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['alias'] = resultTransform
  } 
  if (value['rtindex'] !== undefined) {
    result['rtindex'] = transformGoInt(value['rtindex'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformJoinType (value: pgAst.JoinType): eslintAst.JoinType {
  return value
}
function transformLimitOption (value: pgAst.LimitOption): eslintAst.LimitOption {
  return value
}
function transformList (value: pgAst.List, parent: eslintAst.Node|null, possibleStart: number): eslintAst.List {
  const result : eslintAst.List = {
    type: 'List',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['items'] !== undefined) {
    const resultTransform = transformArrayNode(value['items'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['items'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformListenStmt (value: pgAst.ListenStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ListenStmt {
  const result : eslintAst.ListenStmt = {
    type: 'ListenStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['conditionname'] !== undefined) {
    result['conditionname'] = transformstring(value['conditionname'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformLoadStmt (value: pgAst.LoadStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.LoadStmt {
  const result : eslintAst.LoadStmt = {
    type: 'LoadStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['filename'] !== undefined) {
    result['filename'] = transformstring(value['filename'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformLockClauseStrength (value: pgAst.LockClauseStrength): eslintAst.LockClauseStrength {
  return value
}
function transformLockStmt (value: pgAst.LockStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.LockStmt {
  const result : eslintAst.LockStmt = {
    type: 'LockStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relations'] !== undefined) {
    const resultTransform = transformArrayNode(value['relations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relations'] = resultTransform.result
  } 
  if (value['mode'] !== undefined) {
    result['mode'] = transformGoInt(value['mode'])
  }
  
  
  if (value['nowait'] !== undefined) {
    result['nowait'] = transformBoolean(value['nowait'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformLockWaitPolicy (value: pgAst.LockWaitPolicy): eslintAst.LockWaitPolicy {
  return value
}
function transformLockingClause (value: pgAst.LockingClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.LockingClause {
  const result : eslintAst.LockingClause = {
    type: 'LockingClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['lockedRels'] !== undefined) {
    const resultTransform = transformArrayNode(value['lockedRels'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['lockedRels'] = resultTransform.result
  } 
  if (value['strength'] !== undefined) {
    result['strength'] = transformLockClauseStrength(value['strength'])
  }
  
  
  if (value['waitPolicy'] !== undefined) {
    result['waitPolicy'] = transformLockWaitPolicy(value['waitPolicy'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformMinMaxExpr (value: pgAst.MinMaxExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.MinMaxExpr {
  const result : eslintAst.MinMaxExpr = {
    type: 'MinMaxExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['minmaxtype'] !== undefined) {
    result['minmaxtype'] = transformOid(value['minmaxtype'])
  }
  
  
  if (value['minmaxcollid'] !== undefined) {
    result['minmaxcollid'] = transformOid(value['minmaxcollid'])
  }
  
  
  if (value['inputcollid'] !== undefined) {
    result['inputcollid'] = transformOid(value['inputcollid'])
  }
  
  
  if (value['op'] !== undefined) {
    result['op'] = transformMinMaxOp(value['op'])
  }
  
  
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformMinMaxOp (value: pgAst.MinMaxOp): eslintAst.MinMaxOp {
  return value
}
function transformMultiAssignRef (value: pgAst.MultiAssignRef, parent: eslintAst.Node|null, possibleStart: number): eslintAst.MultiAssignRef {
  const result : eslintAst.MultiAssignRef = {
    type: 'MultiAssignRef',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['source'] !== undefined) {
    const resultTransform = transformNode(value['source'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['source'] = resultTransform
  } 
  if (value['colno'] !== undefined) {
    result['colno'] = transformGoInt(value['colno'])
  }
  
  
  if (value['ncolumns'] !== undefined) {
    result['ncolumns'] = transformGoInt(value['ncolumns'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformNamedArgExpr (value: pgAst.NamedArgExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.NamedArgExpr {
  const result : eslintAst.NamedArgExpr = {
    type: 'NamedArgExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['argnumber'] !== undefined) {
    result['argnumber'] = transformGoInt(value['argnumber'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformNextValueExpr (value: pgAst.NextValueExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.NextValueExpr {
  const result : eslintAst.NextValueExpr = {
    type: 'NextValueExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['seqid'] !== undefined) {
    result['seqid'] = transformOid(value['seqid'])
  }
  
  
  if (value['typeId'] !== undefined) {
    result['typeId'] = transformOid(value['typeId'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformFingerprintHashContext (value: pgAst.FingerprintHashContext, parent: eslintAst.Node|null, possibleStart: number): eslintAst.FingerprintHashContext {
  const result : eslintAst.FingerprintHashContext = {
    type: 'FingerprintHashContext',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['hash'] !== undefined) {
    result['hash'] = transformGoHash(value['hash'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformNotifyStmt (value: pgAst.NotifyStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.NotifyStmt {
  const result : eslintAst.NotifyStmt = {
    type: 'NotifyStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['conditionname'] !== undefined) {
    result['conditionname'] = transformstring(value['conditionname'])
  }
  
  
  if (value['payload'] !== undefined) {
    result['payload'] = transformstring(value['payload'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformNull (value: pgAst.Null, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Null {
  const result : eslintAst.Null = {
    type: 'Null',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformNullTest (value: pgAst.NullTest, parent: eslintAst.Node|null, possibleStart: number): eslintAst.NullTest {
  const result : eslintAst.NullTest = {
    type: 'NullTest',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['nulltesttype'] !== undefined) {
    result['nulltesttype'] = transformNullTestType(value['nulltesttype'])
  }
  
  
  if (value['argisrow'] !== undefined) {
    result['argisrow'] = transformBoolean(value['argisrow'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformNullTestType (value: pgAst.NullTestType): eslintAst.NullTestType {
  return value
}
function transformObjectType (value: pgAst.ObjectType): eslintAst.ObjectType {
  return value
}
function transformObjectWithArgs (value: pgAst.ObjectWithArgs, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ObjectWithArgs {
  const result : eslintAst.ObjectWithArgs = {
    type: 'ObjectWithArgs',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['objname'] !== undefined) {
    const resultTransform = transformArrayNode(value['objname'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['objname'] = resultTransform.result
  } 
  if (value['objargs'] !== undefined) {
    const resultTransform = transformArrayNode(value['objargs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['objargs'] = resultTransform.result
  } 
  if (value['argsUnspecified'] !== undefined) {
    result['argsUnspecified'] = transformBoolean(value['argsUnspecified'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformOnCommitAction (value: pgAst.OnCommitAction): eslintAst.OnCommitAction {
  return value
}
function transformOnConflictAction (value: pgAst.OnConflictAction): eslintAst.OnConflictAction {
  return value
}
function transformOnConflictClause (value: pgAst.OnConflictClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.OnConflictClause {
  const result : eslintAst.OnConflictClause = {
    type: 'OnConflictClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['action'] !== undefined) {
    result['action'] = transformOnConflictAction(value['action'])
  }
  
  
  if (value['infer'] !== undefined) {
    const resultTransform = transformInferClause(value['infer'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['infer'] = resultTransform
  } 
  if (value['targetList'] !== undefined) {
    const resultTransform = transformArrayNode(value['targetList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['targetList'] = resultTransform.result
  } 
  if (value['whereClause'] !== undefined) {
    const resultTransform = transformNode(value['whereClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whereClause'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformOnConflictExpr (value: pgAst.OnConflictExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.OnConflictExpr {
  const result : eslintAst.OnConflictExpr = {
    type: 'OnConflictExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['action'] !== undefined) {
    result['action'] = transformOnConflictAction(value['action'])
  }
  
  
  if (value['arbiterElems'] !== undefined) {
    const resultTransform = transformArrayNode(value['arbiterElems'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arbiterElems'] = resultTransform.result
  } 
  if (value['arbiterWhere'] !== undefined) {
    const resultTransform = transformNode(value['arbiterWhere'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arbiterWhere'] = resultTransform
  } 
  if (value['constraint'] !== undefined) {
    result['constraint'] = transformOid(value['constraint'])
  }
  
  
  if (value['onConflictSet'] !== undefined) {
    const resultTransform = transformArrayNode(value['onConflictSet'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['onConflictSet'] = resultTransform.result
  } 
  if (value['onConflictWhere'] !== undefined) {
    const resultTransform = transformNode(value['onConflictWhere'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['onConflictWhere'] = resultTransform
  } 
  if (value['exclRelIndex'] !== undefined) {
    result['exclRelIndex'] = transformGoInt(value['exclRelIndex'])
  }
  
  
  if (value['exclRelTlist'] !== undefined) {
    const resultTransform = transformArrayNode(value['exclRelTlist'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['exclRelTlist'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformOpExpr (value: pgAst.OpExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.OpExpr {
  const result : eslintAst.OpExpr = {
    type: 'OpExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['opno'] !== undefined) {
    result['opno'] = transformOid(value['opno'])
  }
  
  
  if (value['opfuncid'] !== undefined) {
    result['opfuncid'] = transformOid(value['opfuncid'])
  }
  
  
  if (value['opresulttype'] !== undefined) {
    result['opresulttype'] = transformOid(value['opresulttype'])
  }
  
  
  if (value['opretset'] !== undefined) {
    result['opretset'] = transformBoolean(value['opretset'])
  }
  
  
  if (value['opcollid'] !== undefined) {
    result['opcollid'] = transformOid(value['opcollid'])
  }
  
  
  if (value['inputcollid'] !== undefined) {
    result['inputcollid'] = transformOid(value['inputcollid'])
  }
  
  
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformOverridingKind (value: pgAst.OverridingKind): eslintAst.OverridingKind {
  return value
}
function transformParam (value: pgAst.Param, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Param {
  const result : eslintAst.Param = {
    type: 'Param',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['paramkind'] !== undefined) {
    result['paramkind'] = transformParamKind(value['paramkind'])
  }
  
  
  if (value['paramid'] !== undefined) {
    result['paramid'] = transformGoInt(value['paramid'])
  }
  
  
  if (value['paramtype'] !== undefined) {
    result['paramtype'] = transformOid(value['paramtype'])
  }
  
  
  if (value['paramtypmod'] !== undefined) {
    result['paramtypmod'] = transformGoInt32(value['paramtypmod'])
  }
  
  
  if (value['paramcollid'] !== undefined) {
    result['paramcollid'] = transformOid(value['paramcollid'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformParamExecData (value: pgAst.ParamExecData, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ParamExecData {
  const result : eslintAst.ParamExecData = {
    type: 'ParamExecData',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['execPlan'] !== undefined) {
    result['execPlan'] = transformany(value['execPlan'])
  }
  
  
  if (value['value'] !== undefined) {
    result['value'] = transformDatum(value['value'])
  }
  
  
  if (value['isnull'] !== undefined) {
    result['isnull'] = transformBoolean(value['isnull'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformParamExternData (value: pgAst.ParamExternData, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ParamExternData {
  const result : eslintAst.ParamExternData = {
    type: 'ParamExternData',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['value'] !== undefined) {
    result['value'] = transformDatum(value['value'])
  }
  
  
  if (value['isnull'] !== undefined) {
    result['isnull'] = transformBoolean(value['isnull'])
  }
  
  
  if (value['pflags'] !== undefined) {
    result['pflags'] = transformGoUint16(value['pflags'])
  }
  
  
  if (value['ptype'] !== undefined) {
    result['ptype'] = transformOid(value['ptype'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformParamKind (value: pgAst.ParamKind): eslintAst.ParamKind {
  return value
}
function transformParamListInfoData (value: pgAst.ParamListInfoData, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ParamListInfoData {
  const result : eslintAst.ParamListInfoData = {
    type: 'ParamListInfoData',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['paramFetchArg'] !== undefined) {
    result['paramFetchArg'] = transformany(value['paramFetchArg'])
  }
  
  
  if (value['parserSetupArg'] !== undefined) {
    result['parserSetupArg'] = transformany(value['parserSetupArg'])
  }
  
  
  if (value['numParams'] !== undefined) {
    result['numParams'] = transformGoInt(value['numParams'])
  }
  
  
  if (value['paramMask'] !== undefined) {
    result['paramMask'] = transformArrayUint32(value['paramMask'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformParamRef (value: pgAst.ParamRef, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ParamRef {
  const result : eslintAst.ParamRef = {
    type: 'ParamRef',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['number'] !== undefined) {
    result['number'] = transformGoInt(value['number'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformPartitionBoundSpec (value: pgAst.PartitionBoundSpec, parent: eslintAst.Node|null, possibleStart: number): eslintAst.PartitionBoundSpec {
  const result : eslintAst.PartitionBoundSpec = {
    type: 'PartitionBoundSpec',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['strategy'] !== undefined) {
    result['strategy'] = transformGoByte(value['strategy'])
  }
  
  
  if (value['listdatums'] !== undefined) {
    const resultTransform = transformArrayNode(value['listdatums'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['listdatums'] = resultTransform.result
  } 
  if (value['lowerdatums'] !== undefined) {
    const resultTransform = transformArrayNode(value['lowerdatums'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['lowerdatums'] = resultTransform.result
  } 
  if (value['upperdatums'] !== undefined) {
    const resultTransform = transformArrayNode(value['upperdatums'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['upperdatums'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformPartitionCmd (value: pgAst.PartitionCmd, parent: eslintAst.Node|null, possibleStart: number): eslintAst.PartitionCmd {
  const result : eslintAst.PartitionCmd = {
    type: 'PartitionCmd',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    const resultTransform = transformRangeVar(value['name'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['name'] = resultTransform
  } 
  if (value['bound'] !== undefined) {
    const resultTransform = transformPartitionBoundSpec(value['bound'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['bound'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformPartitionElem (value: pgAst.PartitionElem, parent: eslintAst.Node|null, possibleStart: number): eslintAst.PartitionElem {
  const result : eslintAst.PartitionElem = {
    type: 'PartitionElem',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['expr'] !== undefined) {
    const resultTransform = transformNode(value['expr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['expr'] = resultTransform
  } 
  if (value['collation'] !== undefined) {
    const resultTransform = transformArrayNode(value['collation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['collation'] = resultTransform.result
  } 
  if (value['opclass'] !== undefined) {
    const resultTransform = transformArrayNode(value['opclass'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['opclass'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformPartitionRangeDatum (value: pgAst.PartitionRangeDatum, parent: eslintAst.Node|null, possibleStart: number): eslintAst.PartitionRangeDatum {
  const result : eslintAst.PartitionRangeDatum = {
    type: 'PartitionRangeDatum',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformPartitionRangeDatumKind(value['kind'])
  }
  
  
  if (value['value'] !== undefined) {
    const resultTransform = transformNode(value['value'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['value'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformPartitionRangeDatumKind (value: pgAst.PartitionRangeDatumKind): eslintAst.PartitionRangeDatumKind {
  return value
}
function transformPartitionSpec (value: pgAst.PartitionSpec, parent: eslintAst.Node|null, possibleStart: number): eslintAst.PartitionSpec {
  const result : eslintAst.PartitionSpec = {
    type: 'PartitionSpec',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['strategy'] !== undefined) {
    result['strategy'] = transformstring(value['strategy'])
  }
  
  
  if (value['partParams'] !== undefined) {
    const resultTransform = transformArrayNode(value['partParams'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['partParams'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformPrepareStmt (value: pgAst.PrepareStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.PrepareStmt {
  const result : eslintAst.PrepareStmt = {
    type: 'PrepareStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['argtypes'] !== undefined) {
    const resultTransform = transformArrayNode(value['argtypes'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['argtypes'] = resultTransform.result
  } 
  if (value['query'] !== undefined) {
    const resultTransform = transformNode(value['query'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['query'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformQuery (value: pgAst.Query, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Query {
  const result : eslintAst.Query = {
    type: 'Query',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['commandType'] !== undefined) {
    result['commandType'] = transformCmdType(value['commandType'])
  }
  
  
  if (value['querySource'] !== undefined) {
    result['querySource'] = transformQuerySource(value['querySource'])
  }
  
  
  if (value['queryId'] !== undefined) {
    result['queryId'] = transformGoUint32(value['queryId'])
  }
  
  
  if (value['canSetTag'] !== undefined) {
    result['canSetTag'] = transformBoolean(value['canSetTag'])
  }
  
  
  if (value['utilityStmt'] !== undefined) {
    const resultTransform = transformNode(value['utilityStmt'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['utilityStmt'] = resultTransform
  } 
  if (value['resultRelation'] !== undefined) {
    result['resultRelation'] = transformGoInt(value['resultRelation'])
  }
  
  
  if (value['hasAggs'] !== undefined) {
    result['hasAggs'] = transformBoolean(value['hasAggs'])
  }
  
  
  if (value['hasWindowFuncs'] !== undefined) {
    result['hasWindowFuncs'] = transformBoolean(value['hasWindowFuncs'])
  }
  
  
  if (value['hasTargetSrfs'] !== undefined) {
    result['hasTargetSrfs'] = transformBoolean(value['hasTargetSrfs'])
  }
  
  
  if (value['hasSubLinks'] !== undefined) {
    result['hasSubLinks'] = transformBoolean(value['hasSubLinks'])
  }
  
  
  if (value['hasDistinctOn'] !== undefined) {
    result['hasDistinctOn'] = transformBoolean(value['hasDistinctOn'])
  }
  
  
  if (value['hasRecursive'] !== undefined) {
    result['hasRecursive'] = transformBoolean(value['hasRecursive'])
  }
  
  
  if (value['hasModifyingCte'] !== undefined) {
    result['hasModifyingCte'] = transformBoolean(value['hasModifyingCte'])
  }
  
  
  if (value['hasForUpdate'] !== undefined) {
    result['hasForUpdate'] = transformBoolean(value['hasForUpdate'])
  }
  
  
  if (value['hasRowSecurity'] !== undefined) {
    result['hasRowSecurity'] = transformBoolean(value['hasRowSecurity'])
  }
  
  
  if (value['cteList'] !== undefined) {
    const resultTransform = transformArrayNode(value['cteList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['cteList'] = resultTransform.result
  } 
  if (value['rtable'] !== undefined) {
    const resultTransform = transformArrayNode(value['rtable'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rtable'] = resultTransform.result
  } 
  if (value['jointree'] !== undefined) {
    const resultTransform = transformFromExpr(value['jointree'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['jointree'] = resultTransform
  } 
  if (value['targetList'] !== undefined) {
    const resultTransform = transformArrayNode(value['targetList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['targetList'] = resultTransform.result
  } 
  if (value['override'] !== undefined) {
    result['override'] = transformOverridingKind(value['override'])
  }
  
  
  if (value['onConflict'] !== undefined) {
    const resultTransform = transformOnConflictExpr(value['onConflict'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['onConflict'] = resultTransform
  } 
  if (value['returningList'] !== undefined) {
    const resultTransform = transformArrayNode(value['returningList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['returningList'] = resultTransform.result
  } 
  if (value['groupClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['groupClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['groupClause'] = resultTransform.result
  } 
  if (value['groupingSets'] !== undefined) {
    const resultTransform = transformArrayNode(value['groupingSets'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['groupingSets'] = resultTransform.result
  } 
  if (value['havingQual'] !== undefined) {
    const resultTransform = transformNode(value['havingQual'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['havingQual'] = resultTransform
  } 
  if (value['windowClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['windowClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['windowClause'] = resultTransform.result
  } 
  if (value['distinctClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['distinctClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['distinctClause'] = resultTransform.result
  } 
  if (value['sortClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['sortClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['sortClause'] = resultTransform.result
  } 
  if (value['limitOffset'] !== undefined) {
    const resultTransform = transformNode(value['limitOffset'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['limitOffset'] = resultTransform
  } 
  if (value['limitCount'] !== undefined) {
    const resultTransform = transformNode(value['limitCount'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['limitCount'] = resultTransform
  } 
  if (value['rowMarks'] !== undefined) {
    const resultTransform = transformArrayNode(value['rowMarks'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rowMarks'] = resultTransform.result
  } 
  if (value['setOperations'] !== undefined) {
    const resultTransform = transformNode(value['setOperations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['setOperations'] = resultTransform
  } 
  if (value['constraintDeps'] !== undefined) {
    const resultTransform = transformArrayNode(value['constraintDeps'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['constraintDeps'] = resultTransform.result
  } 
  if (value['withCheckOptions'] !== undefined) {
    const resultTransform = transformArrayNode(value['withCheckOptions'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['withCheckOptions'] = resultTransform.result
  } 
  if (value['stmtLocation'] !== undefined) {
    result['stmtLocation'] = transformGoInt(value['stmtLocation'])
  }
  
  
  if (value['stmtLen'] !== undefined) {
    result['stmtLen'] = transformGoInt(value['stmtLen'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformQuerySource (value: pgAst.QuerySource): eslintAst.QuerySource {
  return value
}
function transformRangeFunction (value: pgAst.RangeFunction, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RangeFunction {
  const result : eslintAst.RangeFunction = {
    type: 'RangeFunction',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['lateral'] !== undefined) {
    result['lateral'] = transformBoolean(value['lateral'])
  }
  
  
  if (value['ordinality'] !== undefined) {
    result['ordinality'] = transformBoolean(value['ordinality'])
  }
  
  
  if (value['isRowsfrom'] !== undefined) {
    result['isRowsfrom'] = transformBoolean(value['isRowsfrom'])
  }
  
  
  if (value['functions'] !== undefined) {
    const resultTransform = transformArrayNode(value['functions'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['functions'] = resultTransform.result
  } 
  if (value['alias'] !== undefined) {
    const resultTransform = transformAlias(value['alias'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['alias'] = resultTransform
  } 
  if (value['coldeflist'] !== undefined) {
    const resultTransform = transformArrayNode(value['coldeflist'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['coldeflist'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRangeSubselect (value: pgAst.RangeSubselect, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RangeSubselect {
  const result : eslintAst.RangeSubselect = {
    type: 'RangeSubselect',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['lateral'] !== undefined) {
    result['lateral'] = transformBoolean(value['lateral'])
  }
  
  
  if (value['subquery'] !== undefined) {
    const resultTransform = transformNode(value['subquery'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['subquery'] = resultTransform
  } 
  if (value['alias'] !== undefined) {
    const resultTransform = transformAlias(value['alias'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['alias'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRangeTableFunc (value: pgAst.RangeTableFunc, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RangeTableFunc {
  const result : eslintAst.RangeTableFunc = {
    type: 'RangeTableFunc',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['lateral'] !== undefined) {
    result['lateral'] = transformBoolean(value['lateral'])
  }
  
  
  if (value['docexpr'] !== undefined) {
    const resultTransform = transformNode(value['docexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['docexpr'] = resultTransform
  } 
  if (value['rowexpr'] !== undefined) {
    const resultTransform = transformNode(value['rowexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rowexpr'] = resultTransform
  } 
  if (value['namespaces'] !== undefined) {
    const resultTransform = transformArrayNode(value['namespaces'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['namespaces'] = resultTransform.result
  } 
  if (value['columns'] !== undefined) {
    const resultTransform = transformArrayNode(value['columns'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['columns'] = resultTransform.result
  } 
  if (value['alias'] !== undefined) {
    const resultTransform = transformAlias(value['alias'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['alias'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRangeTableFuncCol (value: pgAst.RangeTableFuncCol, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RangeTableFuncCol {
  const result : eslintAst.RangeTableFuncCol = {
    type: 'RangeTableFuncCol',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['colname'] !== undefined) {
    result['colname'] = transformstring(value['colname'])
  }
  
  
  if (value['typeName'] !== undefined) {
    const resultTransform = transformTypeName(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform
  } 
  if (value['forOrdinality'] !== undefined) {
    result['forOrdinality'] = transformBoolean(value['forOrdinality'])
  }
  
  
  if (value['isNotNull'] !== undefined) {
    result['isNotNull'] = transformBoolean(value['isNotNull'])
  }
  
  
  if (value['colexpr'] !== undefined) {
    const resultTransform = transformNode(value['colexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colexpr'] = resultTransform
  } 
  if (value['coldefexpr'] !== undefined) {
    const resultTransform = transformNode(value['coldefexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['coldefexpr'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRangeTableSample (value: pgAst.RangeTableSample, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RangeTableSample {
  const result : eslintAst.RangeTableSample = {
    type: 'RangeTableSample',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformNode(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['method'] !== undefined) {
    const resultTransform = transformArrayNode(value['method'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['method'] = resultTransform.result
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['repeatable'] !== undefined) {
    const resultTransform = transformNode(value['repeatable'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['repeatable'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRangeTblEntry (value: pgAst.RangeTblEntry, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RangeTblEntry {
  const result : eslintAst.RangeTblEntry = {
    type: 'RangeTblEntry',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['rtekind'] !== undefined) {
    result['rtekind'] = transformRTEKind(value['rtekind'])
  }
  
  
  if (value['relid'] !== undefined) {
    result['relid'] = transformOid(value['relid'])
  }
  
  
  if (value['relkind'] !== undefined) {
    result['relkind'] = transformGoByte(value['relkind'])
  }
  
  
  if (value['tablesample'] !== undefined) {
    const resultTransform = transformTableSampleClause(value['tablesample'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['tablesample'] = resultTransform
  } 
  if (value['subquery'] !== undefined) {
    const resultTransform = transformQuery(value['subquery'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['subquery'] = resultTransform
  } 
  if (value['securityBarrier'] !== undefined) {
    result['securityBarrier'] = transformBoolean(value['securityBarrier'])
  }
  
  
  if (value['jointype'] !== undefined) {
    result['jointype'] = transformJoinType(value['jointype'])
  }
  
  
  if (value['joinaliasvars'] !== undefined) {
    const resultTransform = transformArrayNode(value['joinaliasvars'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['joinaliasvars'] = resultTransform.result
  } 
  if (value['functions'] !== undefined) {
    const resultTransform = transformArrayNode(value['functions'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['functions'] = resultTransform.result
  } 
  if (value['funcordinality'] !== undefined) {
    result['funcordinality'] = transformBoolean(value['funcordinality'])
  }
  
  
  if (value['tablefunc'] !== undefined) {
    const resultTransform = transformTableFunc(value['tablefunc'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['tablefunc'] = resultTransform
  } 
  if (value['valuesLists'] !== undefined) {
    const resultTransform = transformArrayNode(value['valuesLists'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['valuesLists'] = resultTransform.result
  } 
  if (value['ctename'] !== undefined) {
    result['ctename'] = transformstring(value['ctename'])
  }
  
  
  if (value['ctelevelsup'] !== undefined) {
    result['ctelevelsup'] = transformIndex(value['ctelevelsup'])
  }
  
  
  if (value['selfReference'] !== undefined) {
    result['selfReference'] = transformBoolean(value['selfReference'])
  }
  
  
  if (value['coltypes'] !== undefined) {
    const resultTransform = transformArrayNode(value['coltypes'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['coltypes'] = resultTransform.result
  } 
  if (value['coltypmods'] !== undefined) {
    const resultTransform = transformArrayNode(value['coltypmods'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['coltypmods'] = resultTransform.result
  } 
  if (value['colcollations'] !== undefined) {
    const resultTransform = transformArrayNode(value['colcollations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colcollations'] = resultTransform.result
  } 
  if (value['enrname'] !== undefined) {
    result['enrname'] = transformstring(value['enrname'])
  }
  
  
  if (value['enrtuples'] !== undefined) {
    result['enrtuples'] = transformGoFloat64(value['enrtuples'])
  }
  
  
  if (value['alias'] !== undefined) {
    const resultTransform = transformAlias(value['alias'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['alias'] = resultTransform
  } 
  if (value['eref'] !== undefined) {
    const resultTransform = transformAlias(value['eref'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['eref'] = resultTransform
  } 
  if (value['lateral'] !== undefined) {
    result['lateral'] = transformBoolean(value['lateral'])
  }
  
  
  if (value['inh'] !== undefined) {
    result['inh'] = transformBoolean(value['inh'])
  }
  
  
  if (value['inFromCl'] !== undefined) {
    result['inFromCl'] = transformBoolean(value['inFromCl'])
  }
  
  
  if (value['requiredPerms'] !== undefined) {
    result['requiredPerms'] = transformAclMode(value['requiredPerms'])
  }
  
  
  if (value['checkAsUser'] !== undefined) {
    result['checkAsUser'] = transformOid(value['checkAsUser'])
  }
  
  
  if (value['selectedCols'] !== undefined) {
    result['selectedCols'] = transformArrayUint32(value['selectedCols'])
  }
  
  
  if (value['insertedCols'] !== undefined) {
    result['insertedCols'] = transformArrayUint32(value['insertedCols'])
  }
  
  
  if (value['updatedCols'] !== undefined) {
    result['updatedCols'] = transformArrayUint32(value['updatedCols'])
  }
  
  
  if (value['securityQuals'] !== undefined) {
    const resultTransform = transformArrayNode(value['securityQuals'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['securityQuals'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRangeTblFunction (value: pgAst.RangeTblFunction, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RangeTblFunction {
  const result : eslintAst.RangeTblFunction = {
    type: 'RangeTblFunction',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['funcexpr'] !== undefined) {
    const resultTransform = transformNode(value['funcexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funcexpr'] = resultTransform
  } 
  if (value['funccolcount'] !== undefined) {
    result['funccolcount'] = transformGoInt(value['funccolcount'])
  }
  
  
  if (value['funccolnames'] !== undefined) {
    const resultTransform = transformArrayNode(value['funccolnames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funccolnames'] = resultTransform.result
  } 
  if (value['funccoltypes'] !== undefined) {
    const resultTransform = transformArrayNode(value['funccoltypes'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funccoltypes'] = resultTransform.result
  } 
  if (value['funccoltypmods'] !== undefined) {
    const resultTransform = transformArrayNode(value['funccoltypmods'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funccoltypmods'] = resultTransform.result
  } 
  if (value['funccolcollations'] !== undefined) {
    const resultTransform = transformArrayNode(value['funccolcollations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['funccolcollations'] = resultTransform.result
  } 
  if (value['funcparams'] !== undefined) {
    result['funcparams'] = transformArrayUint32(value['funcparams'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRangeTblRef (value: pgAst.RangeTblRef, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RangeTblRef {
  const result : eslintAst.RangeTblRef = {
    type: 'RangeTblRef',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['rtindex'] !== undefined) {
    result['rtindex'] = transformGoInt(value['rtindex'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRangeVar (value: pgAst.RangeVar, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RangeVar {
  const result : eslintAst.RangeVar = {
    type: 'RangeVar',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['catalogname'] !== undefined) {
    result['catalogname'] = transformstring(value['catalogname'])
  }
  
  
  if (value['schemaname'] !== undefined) {
    result['schemaname'] = transformstring(value['schemaname'])
  }
  
  
  if (value['relname'] !== undefined) {
    result['relname'] = transformstring(value['relname'])
  }
  
  
  if (value['inh'] !== undefined) {
    result['inh'] = transformBoolean(value['inh'])
  }
  
  
  if (value['relpersistence'] !== undefined) {
    result['relpersistence'] = transformGoByte(value['relpersistence'])
  }
  
  
  if (value['alias'] !== undefined) {
    const resultTransform = transformAlias(value['alias'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['alias'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRawStmt (value: pgAst.RawStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RawStmt {
  const result : eslintAst.RawStmt = {
    type: 'RawStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['stmt'] !== undefined) {
    const resultTransform = transformNode(value['stmt'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['stmt'] = resultTransform
  } 
  if (value['stmtLocation'] !== undefined) {
    result['stmtLocation'] = transformGoInt(value['stmtLocation'])
  }
  
  
  if (value['stmtLen'] !== undefined) {
    result['stmtLen'] = transformGoInt(value['stmtLen'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformReassignOwnedStmt (value: pgAst.ReassignOwnedStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ReassignOwnedStmt {
  const result : eslintAst.ReassignOwnedStmt = {
    type: 'ReassignOwnedStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['roles'] !== undefined) {
    const resultTransform = transformArrayNode(value['roles'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['roles'] = resultTransform.result
  } 
  if (value['newrole'] !== undefined) {
    const resultTransform = transformRoleSpec(value['newrole'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['newrole'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRefreshMatViewStmt (value: pgAst.RefreshMatViewStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RefreshMatViewStmt {
  const result : eslintAst.RefreshMatViewStmt = {
    type: 'RefreshMatViewStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['concurrent'] !== undefined) {
    result['concurrent'] = transformBoolean(value['concurrent'])
  }
  
  
  if (value['skipData'] !== undefined) {
    result['skipData'] = transformBoolean(value['skipData'])
  }
  
  
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformReindexObjectType (value: pgAst.ReindexObjectType): eslintAst.ReindexObjectType {
  return value
}
function transformReindexStmt (value: pgAst.ReindexStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ReindexStmt {
  const result : eslintAst.ReindexStmt = {
    type: 'ReindexStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformReindexObjectType(value['kind'])
  }
  
  
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['options'] !== undefined) {
    result['options'] = transformGoInt(value['options'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRelabelType (value: pgAst.RelabelType, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RelabelType {
  const result : eslintAst.RelabelType = {
    type: 'RelabelType',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['resulttype'] !== undefined) {
    result['resulttype'] = transformOid(value['resulttype'])
  }
  
  
  if (value['resulttypmod'] !== undefined) {
    result['resulttypmod'] = transformGoInt32(value['resulttypmod'])
  }
  
  
  if (value['resultcollid'] !== undefined) {
    result['resultcollid'] = transformOid(value['resultcollid'])
  }
  
  
  if (value['relabelformat'] !== undefined) {
    result['relabelformat'] = transformCoercionForm(value['relabelformat'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRenameStmt (value: pgAst.RenameStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RenameStmt {
  const result : eslintAst.RenameStmt = {
    type: 'RenameStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['renameType'] !== undefined) {
    result['renameType'] = transformObjectType(value['renameType'])
  }
  
  
  if (value['relationType'] !== undefined) {
    result['relationType'] = transformObjectType(value['relationType'])
  }
  
  
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['object'] !== undefined) {
    const resultTransform = transformNode(value['object'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['object'] = resultTransform
  } 
  if (value['subname'] !== undefined) {
    result['subname'] = transformstring(value['subname'])
  }
  
  
  if (value['newname'] !== undefined) {
    result['newname'] = transformstring(value['newname'])
  }
  
  
  if (value['behavior'] !== undefined) {
    result['behavior'] = transformDropBehavior(value['behavior'])
  }
  
  
  if (value['missingOk'] !== undefined) {
    result['missingOk'] = transformBoolean(value['missingOk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformReplicaIdentityStmt (value: pgAst.ReplicaIdentityStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ReplicaIdentityStmt {
  const result : eslintAst.ReplicaIdentityStmt = {
    type: 'ReplicaIdentityStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['identityType'] !== undefined) {
    result['identityType'] = transformGoByte(value['identityType'])
  }
  
  
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformResTarget (value: pgAst.ResTarget, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ResTarget {
  const result : eslintAst.ResTarget = {
    type: 'ResTarget',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['indirection'] !== undefined) {
    const resultTransform = transformArrayNode(value['indirection'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['indirection'] = resultTransform.result
  } 
  if (value['val'] !== undefined) {
    const resultTransform = transformNode(value['val'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['val'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRoleSpec (value: pgAst.RoleSpec, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RoleSpec {
  const result : eslintAst.RoleSpec = {
    type: 'RoleSpec',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['roletype'] !== undefined) {
    result['roletype'] = transformRoleSpecType(value['roletype'])
  }
  
  
  if (value['rolename'] !== undefined) {
    result['rolename'] = transformstring(value['rolename'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRoleSpecType (value: pgAst.RoleSpecType): eslintAst.RoleSpecType {
  return value
}
function transformRoleStmtType (value: pgAst.RoleStmtType): eslintAst.RoleStmtType {
  return value
}
function transformRowCompareExpr (value: pgAst.RowCompareExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RowCompareExpr {
  const result : eslintAst.RowCompareExpr = {
    type: 'RowCompareExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['rctype'] !== undefined) {
    result['rctype'] = transformRowCompareType(value['rctype'])
  }
  
  
  if (value['opnos'] !== undefined) {
    const resultTransform = transformArrayNode(value['opnos'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['opnos'] = resultTransform.result
  } 
  if (value['opfamilies'] !== undefined) {
    const resultTransform = transformArrayNode(value['opfamilies'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['opfamilies'] = resultTransform.result
  } 
  if (value['inputcollids'] !== undefined) {
    const resultTransform = transformArrayNode(value['inputcollids'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['inputcollids'] = resultTransform.result
  } 
  if (value['largs'] !== undefined) {
    const resultTransform = transformArrayNode(value['largs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['largs'] = resultTransform.result
  } 
  if (value['rargs'] !== undefined) {
    const resultTransform = transformArrayNode(value['rargs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rargs'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRowCompareType (value: pgAst.RowCompareType): eslintAst.RowCompareType {
  return value
}
function transformRowExpr (value: pgAst.RowExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RowExpr {
  const result : eslintAst.RowExpr = {
    type: 'RowExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['rowTypeid'] !== undefined) {
    result['rowTypeid'] = transformOid(value['rowTypeid'])
  }
  
  
  if (value['rowFormat'] !== undefined) {
    result['rowFormat'] = transformCoercionForm(value['rowFormat'])
  }
  
  
  if (value['colnames'] !== undefined) {
    const resultTransform = transformArrayNode(value['colnames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colnames'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRowMarkClause (value: pgAst.RowMarkClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RowMarkClause {
  const result : eslintAst.RowMarkClause = {
    type: 'RowMarkClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['rti'] !== undefined) {
    result['rti'] = transformIndex(value['rti'])
  }
  
  
  if (value['strength'] !== undefined) {
    result['strength'] = transformLockClauseStrength(value['strength'])
  }
  
  
  if (value['waitPolicy'] !== undefined) {
    result['waitPolicy'] = transformLockWaitPolicy(value['waitPolicy'])
  }
  
  
  if (value['pushedDown'] !== undefined) {
    result['pushedDown'] = transformBoolean(value['pushedDown'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformRTEKind (value: pgAst.RTEKind): eslintAst.RTEKind {
  return value
}
function transformRuleStmt (value: pgAst.RuleStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.RuleStmt {
  const result : eslintAst.RuleStmt = {
    type: 'RuleStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['rulename'] !== undefined) {
    result['rulename'] = transformstring(value['rulename'])
  }
  
  
  if (value['whereClause'] !== undefined) {
    const resultTransform = transformNode(value['whereClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whereClause'] = resultTransform
  } 
  if (value['event'] !== undefined) {
    result['event'] = transformCmdType(value['event'])
  }
  
  
  if (value['instead'] !== undefined) {
    result['instead'] = transformBoolean(value['instead'])
  }
  
  
  if (value['actions'] !== undefined) {
    const resultTransform = transformArrayNode(value['actions'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['actions'] = resultTransform.result
  } 
  if (value['replace'] !== undefined) {
    result['replace'] = transformBoolean(value['replace'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformScalarArrayOpExpr (value: pgAst.ScalarArrayOpExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ScalarArrayOpExpr {
  const result : eslintAst.ScalarArrayOpExpr = {
    type: 'ScalarArrayOpExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['opno'] !== undefined) {
    result['opno'] = transformOid(value['opno'])
  }
  
  
  if (value['opfuncid'] !== undefined) {
    result['opfuncid'] = transformOid(value['opfuncid'])
  }
  
  
  if (value['useOr'] !== undefined) {
    result['useOr'] = transformBoolean(value['useOr'])
  }
  
  
  if (value['inputcollid'] !== undefined) {
    result['inputcollid'] = transformOid(value['inputcollid'])
  }
  
  
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformScanDirection (value: pgAst.ScanDirection): eslintAst.ScanDirection {
  return value
}
function transformSecLabelStmt (value: pgAst.SecLabelStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SecLabelStmt {
  const result : eslintAst.SecLabelStmt = {
    type: 'SecLabelStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['objtype'] !== undefined) {
    result['objtype'] = transformObjectType(value['objtype'])
  }
  
  
  if (value['object'] !== undefined) {
    const resultTransform = transformNode(value['object'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['object'] = resultTransform
  } 
  if (value['provider'] !== undefined) {
    result['provider'] = transformstring(value['provider'])
  }
  
  
  if (value['label'] !== undefined) {
    result['label'] = transformstring(value['label'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSelectStmt (value: pgAst.SelectStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SelectStmt {
  const result : eslintAst.SelectStmt = {
    type: 'SelectStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['distinctClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['distinctClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['distinctClause'] = resultTransform.result
  } 
  if (value['intoClause'] !== undefined) {
    const resultTransform = transformIntoClause(value['intoClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['intoClause'] = resultTransform
  } 
  if (value['targetList'] !== undefined) {
    const resultTransform = transformArrayNode(value['targetList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['targetList'] = resultTransform.result
  } 
  if (value['fromClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['fromClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['fromClause'] = resultTransform.result
  } 
  if (value['whereClause'] !== undefined) {
    const resultTransform = transformNode(value['whereClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whereClause'] = resultTransform
  } 
  if (value['groupClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['groupClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['groupClause'] = resultTransform.result
  } 
  if (value['havingClause'] !== undefined) {
    const resultTransform = transformNode(value['havingClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['havingClause'] = resultTransform
  } 
  if (value['windowClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['windowClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['windowClause'] = resultTransform.result
  } 
  if (value['valuesLists'] !== undefined) {
    const resultTransform = transformMatrixNode(value['valuesLists'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['valuesLists'] = resultTransform.result
  } 
  if (value['sortClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['sortClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['sortClause'] = resultTransform.result
  } 
  if (value['limitOption'] !== undefined) {
    result['limitOption'] = transformLimitOption(value['limitOption'])
  }
  
  
  if (value['limitOffset'] !== undefined) {
    const resultTransform = transformNode(value['limitOffset'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['limitOffset'] = resultTransform
  } 
  if (value['limitCount'] !== undefined) {
    const resultTransform = transformNode(value['limitCount'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['limitCount'] = resultTransform
  } 
  if (value['lockingClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['lockingClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['lockingClause'] = resultTransform.result
  } 
  if (value['withClause'] !== undefined) {
    const resultTransform = transformWithClause(value['withClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['withClause'] = resultTransform
  } 
  if (value['op'] !== undefined) {
    result['op'] = transformSetOperation(value['op'])
  }
  
  
  if (value['all'] !== undefined) {
    result['all'] = transformBoolean(value['all'])
  }
  
  
  if (value['larg'] !== undefined) {
    const resultTransform = transformSelectStmt(value['larg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['larg'] = resultTransform
  } 
  if (value['rarg'] !== undefined) {
    const resultTransform = transformSelectStmt(value['rarg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rarg'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSetOpCmd (value: pgAst.SetOpCmd): eslintAst.SetOpCmd {
  return value
}
function transformSetOpStrategy (value: pgAst.SetOpStrategy): eslintAst.SetOpStrategy {
  return value
}
function transformSetOperation (value: pgAst.SetOperation): eslintAst.SetOperation {
  return value
}
function transformSetOperationStmt (value: pgAst.SetOperationStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SetOperationStmt {
  const result : eslintAst.SetOperationStmt = {
    type: 'SetOperationStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['op'] !== undefined) {
    result['op'] = transformSetOperation(value['op'])
  }
  
  
  if (value['all'] !== undefined) {
    result['all'] = transformBoolean(value['all'])
  }
  
  
  if (value['larg'] !== undefined) {
    const resultTransform = transformNode(value['larg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['larg'] = resultTransform
  } 
  if (value['rarg'] !== undefined) {
    const resultTransform = transformNode(value['rarg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rarg'] = resultTransform
  } 
  if (value['colTypes'] !== undefined) {
    const resultTransform = transformArrayNode(value['colTypes'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colTypes'] = resultTransform.result
  } 
  if (value['colTypmods'] !== undefined) {
    const resultTransform = transformArrayNode(value['colTypmods'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colTypmods'] = resultTransform.result
  } 
  if (value['colCollations'] !== undefined) {
    const resultTransform = transformArrayNode(value['colCollations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colCollations'] = resultTransform.result
  } 
  if (value['groupClauses'] !== undefined) {
    const resultTransform = transformArrayNode(value['groupClauses'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['groupClauses'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSetToDefault (value: pgAst.SetToDefault, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SetToDefault {
  const result : eslintAst.SetToDefault = {
    type: 'SetToDefault',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['typeId'] !== undefined) {
    result['typeId'] = transformOid(value['typeId'])
  }
  
  
  if (value['typeMod'] !== undefined) {
    result['typeMod'] = transformGoInt32(value['typeMod'])
  }
  
  
  if (value['collation'] !== undefined) {
    result['collation'] = transformOid(value['collation'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSortBy (value: pgAst.SortBy, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SortBy {
  const result : eslintAst.SortBy = {
    type: 'SortBy',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['node'] !== undefined) {
    const resultTransform = transformNode(value['node'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['node'] = resultTransform
  } 
  if (value['sortbyDir'] !== undefined) {
    result['sortbyDir'] = transformSortByDir(value['sortbyDir'])
  }
  
  
  if (value['sortbyNulls'] !== undefined) {
    result['sortbyNulls'] = transformSortByNulls(value['sortbyNulls'])
  }
  
  
  if (value['useOp'] !== undefined) {
    const resultTransform = transformArrayNode(value['useOp'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['useOp'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSortByDir (value: pgAst.SortByDir): eslintAst.SortByDir {
  return value
}
function transformSortByNulls (value: pgAst.SortByNulls): eslintAst.SortByNulls {
  return value
}
function transformSortGroupClause (value: pgAst.SortGroupClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SortGroupClause {
  const result : eslintAst.SortGroupClause = {
    type: 'SortGroupClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['tleSortGroupRef'] !== undefined) {
    result['tleSortGroupRef'] = transformIndex(value['tleSortGroupRef'])
  }
  
  
  if (value['eqop'] !== undefined) {
    result['eqop'] = transformOid(value['eqop'])
  }
  
  
  if (value['sortop'] !== undefined) {
    result['sortop'] = transformOid(value['sortop'])
  }
  
  
  if (value['nullsFirst'] !== undefined) {
    result['nullsFirst'] = transformBoolean(value['nullsFirst'])
  }
  
  
  if (value['hashable'] !== undefined) {
    result['hashable'] = transformBoolean(value['hashable'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSQLValueFunction (value: pgAst.SQLValueFunction, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SQLValueFunction {
  const result : eslintAst.SQLValueFunction = {
    type: 'SQLValueFunction',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['op'] !== undefined) {
    result['op'] = transformSQLValueFunctionOp(value['op'])
  }
  
  
  if (value['type'] !== undefined) {
    result['_type'] = transformOid(value['type'])
  }
  
  
  if (value['typmod'] !== undefined) {
    result['typmod'] = transformGoInt32(value['typmod'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSQLValueFunctionOp (value: pgAst.SQLValueFunctionOp): eslintAst.SQLValueFunctionOp {
  return value
}
function transformStmtType (value: pgAst.StmtType): eslintAst.StmtType {
  return value
}
function transformString (value: pgAst.String, parent: eslintAst.Node|null, possibleStart: number): eslintAst.String {
  const result : eslintAst.String = {
    type: 'String',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['str'] !== undefined) {
    result['str'] = transformstring(value['str'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSubLink (value: pgAst.SubLink, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SubLink {
  const result : eslintAst.SubLink = {
    type: 'SubLink',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['subLinkType'] !== undefined) {
    result['subLinkType'] = transformSubLinkType(value['subLinkType'])
  }
  
  
  if (value['subLinkId'] !== undefined) {
    result['subLinkId'] = transformGoInt(value['subLinkId'])
  }
  
  
  if (value['testexpr'] !== undefined) {
    const resultTransform = transformNode(value['testexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['testexpr'] = resultTransform
  } 
  if (value['operName'] !== undefined) {
    const resultTransform = transformArrayNode(value['operName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['operName'] = resultTransform.result
  } 
  if (value['subselect'] !== undefined) {
    const resultTransform = transformNode(value['subselect'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['subselect'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSubLinkType (value: pgAst.SubLinkType): eslintAst.SubLinkType {
  return value
}
function transformSubPlan (value: pgAst.SubPlan, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SubPlan {
  const result : eslintAst.SubPlan = {
    type: 'SubPlan',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['subLinkType'] !== undefined) {
    result['subLinkType'] = transformSubLinkType(value['subLinkType'])
  }
  
  
  if (value['testexpr'] !== undefined) {
    const resultTransform = transformNode(value['testexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['testexpr'] = resultTransform
  } 
  if (value['paramIds'] !== undefined) {
    const resultTransform = transformArrayNode(value['paramIds'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['paramIds'] = resultTransform.result
  } 
  if (value['planId'] !== undefined) {
    result['planId'] = transformGoInt(value['planId'])
  }
  
  
  if (value['planName'] !== undefined) {
    result['planName'] = transformstring(value['planName'])
  }
  
  
  if (value['firstColType'] !== undefined) {
    result['firstColType'] = transformOid(value['firstColType'])
  }
  
  
  if (value['firstColTypmod'] !== undefined) {
    result['firstColTypmod'] = transformGoInt32(value['firstColTypmod'])
  }
  
  
  if (value['firstColCollation'] !== undefined) {
    result['firstColCollation'] = transformOid(value['firstColCollation'])
  }
  
  
  if (value['useHashTable'] !== undefined) {
    result['useHashTable'] = transformBoolean(value['useHashTable'])
  }
  
  
  if (value['unknownEqFalse'] !== undefined) {
    result['unknownEqFalse'] = transformBoolean(value['unknownEqFalse'])
  }
  
  
  if (value['parallelSafe'] !== undefined) {
    result['parallelSafe'] = transformBoolean(value['parallelSafe'])
  }
  
  
  if (value['setParam'] !== undefined) {
    const resultTransform = transformArrayNode(value['setParam'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['setParam'] = resultTransform.result
  } 
  if (value['parParam'] !== undefined) {
    const resultTransform = transformArrayNode(value['parParam'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['parParam'] = resultTransform.result
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['startupCost'] !== undefined) {
    result['startupCost'] = transformCost(value['startupCost'])
  }
  
  
  if (value['perCallCost'] !== undefined) {
    result['perCallCost'] = transformCost(value['perCallCost'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformSyntaxTree (value: pgAst.SyntaxTree, parent: eslintAst.Node|null, possibleStart: number): eslintAst.SyntaxTree {
  const result : eslintAst.SyntaxTree = {
    type: 'SyntaxTree',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['statements'] !== undefined) {
    const resultTransform = transformArrayNode(value['statements'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['statements'] = resultTransform.result
  } 
  if (value['query'] !== undefined) {
    result['query'] = transformstring(value['query'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformTableFunc (value: pgAst.TableFunc, parent: eslintAst.Node|null, possibleStart: number): eslintAst.TableFunc {
  const result : eslintAst.TableFunc = {
    type: 'TableFunc',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['nsUris'] !== undefined) {
    const resultTransform = transformArrayNode(value['nsUris'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['nsUris'] = resultTransform.result
  } 
  if (value['nsNames'] !== undefined) {
    const resultTransform = transformArrayNode(value['nsNames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['nsNames'] = resultTransform.result
  } 
  if (value['docexpr'] !== undefined) {
    const resultTransform = transformNode(value['docexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['docexpr'] = resultTransform
  } 
  if (value['rowexpr'] !== undefined) {
    const resultTransform = transformNode(value['rowexpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['rowexpr'] = resultTransform
  } 
  if (value['colnames'] !== undefined) {
    const resultTransform = transformArrayNode(value['colnames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colnames'] = resultTransform.result
  } 
  if (value['coltypes'] !== undefined) {
    const resultTransform = transformArrayNode(value['coltypes'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['coltypes'] = resultTransform.result
  } 
  if (value['coltypmods'] !== undefined) {
    const resultTransform = transformArrayNode(value['coltypmods'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['coltypmods'] = resultTransform.result
  } 
  if (value['colcollations'] !== undefined) {
    const resultTransform = transformArrayNode(value['colcollations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colcollations'] = resultTransform.result
  } 
  if (value['colexprs'] !== undefined) {
    const resultTransform = transformArrayNode(value['colexprs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['colexprs'] = resultTransform.result
  } 
  if (value['coldefexprs'] !== undefined) {
    const resultTransform = transformArrayNode(value['coldefexprs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['coldefexprs'] = resultTransform.result
  } 
  if (value['notnulls'] !== undefined) {
    result['notnulls'] = transformArrayUint32(value['notnulls'])
  }
  
  
  if (value['ordinalitycol'] !== undefined) {
    result['ordinalitycol'] = transformGoInt(value['ordinalitycol'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformTableLikeClause (value: pgAst.TableLikeClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.TableLikeClause {
  const result : eslintAst.TableLikeClause = {
    type: 'TableLikeClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['options'] !== undefined) {
    result['options'] = transformGoUint32(value['options'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformTableLikeOption (value: pgAst.TableLikeOption): eslintAst.TableLikeOption {
  return value
}
function transformTableSampleClause (value: pgAst.TableSampleClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.TableSampleClause {
  const result : eslintAst.TableSampleClause = {
    type: 'TableSampleClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['tsmhandler'] !== undefined) {
    result['tsmhandler'] = transformOid(value['tsmhandler'])
  }
  
  
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['repeatable'] !== undefined) {
    const resultTransform = transformNode(value['repeatable'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['repeatable'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformTargetEntry (value: pgAst.TargetEntry, parent: eslintAst.Node|null, possibleStart: number): eslintAst.TargetEntry {
  const result : eslintAst.TargetEntry = {
    type: 'TargetEntry',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['expr'] !== undefined) {
    const resultTransform = transformNode(value['expr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['expr'] = resultTransform
  } 
  if (value['resno'] !== undefined) {
    result['resno'] = transformAttrNumber(value['resno'])
  }
  
  
  if (value['resname'] !== undefined) {
    result['resname'] = transformstring(value['resname'])
  }
  
  
  if (value['ressortgroupref'] !== undefined) {
    result['ressortgroupref'] = transformIndex(value['ressortgroupref'])
  }
  
  
  if (value['resorigtbl'] !== undefined) {
    result['resorigtbl'] = transformOid(value['resorigtbl'])
  }
  
  
  if (value['resorigcol'] !== undefined) {
    result['resorigcol'] = transformAttrNumber(value['resorigcol'])
  }
  
  
  if (value['resjunk'] !== undefined) {
    result['resjunk'] = transformBoolean(value['resjunk'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformTransactionStmt (value: pgAst.TransactionStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.TransactionStmt {
  const result : eslintAst.TransactionStmt = {
    type: 'TransactionStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformTransactionStmtKind(value['kind'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['gid'] !== undefined) {
    result['gid'] = transformstring(value['gid'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformTransactionStmtKind (value: pgAst.TransactionStmtKind): eslintAst.TransactionStmtKind {
  return value
}
function transformTriggerTransition (value: pgAst.TriggerTransition, parent: eslintAst.Node|null, possibleStart: number): eslintAst.TriggerTransition {
  const result : eslintAst.TriggerTransition = {
    type: 'TriggerTransition',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['isNew'] !== undefined) {
    result['isNew'] = transformBoolean(value['isNew'])
  }
  
  
  if (value['isTable'] !== undefined) {
    result['isTable'] = transformBoolean(value['isTable'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformTruncateStmt (value: pgAst.TruncateStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.TruncateStmt {
  const result : eslintAst.TruncateStmt = {
    type: 'TruncateStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relations'] !== undefined) {
    const resultTransform = transformArrayNode(value['relations'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relations'] = resultTransform.result
  } 
  if (value['restartSeqs'] !== undefined) {
    result['restartSeqs'] = transformBoolean(value['restartSeqs'])
  }
  
  
  if (value['behavior'] !== undefined) {
    result['behavior'] = transformDropBehavior(value['behavior'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformTypeCast (value: pgAst.TypeCast, parent: eslintAst.Node|null, possibleStart: number): eslintAst.TypeCast {
  const result : eslintAst.TypeCast = {
    type: 'TypeCast',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['arg'] !== undefined) {
    const resultTransform = transformNode(value['arg'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arg'] = resultTransform
  } 
  if (value['typeName'] !== undefined) {
    const resultTransform = transformTypeName(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformTypeName (value: pgAst.TypeName, parent: eslintAst.Node|null, possibleStart: number): eslintAst.TypeName {
  const result : eslintAst.TypeName = {
    type: 'TypeName',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['names'] !== undefined) {
    const resultTransform = transformArrayNode(value['names'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['names'] = resultTransform.result
  } 
  if (value['typeOid'] !== undefined) {
    result['typeOid'] = transformOid(value['typeOid'])
  }
  
  
  if (value['setof'] !== undefined) {
    result['setof'] = transformBoolean(value['setof'])
  }
  
  
  if (value['pctType'] !== undefined) {
    result['pctType'] = transformBoolean(value['pctType'])
  }
  
  
  if (value['typmods'] !== undefined) {
    const resultTransform = transformArrayNode(value['typmods'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typmods'] = resultTransform.result
  } 
  if (value['typemod'] !== undefined) {
    result['typemod'] = transformGoInt32(value['typemod'])
  }
  
  
  if (value['arrayBounds'] !== undefined) {
    const resultTransform = transformArrayNode(value['arrayBounds'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['arrayBounds'] = resultTransform.result
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformUnlistenStmt (value: pgAst.UnlistenStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.UnlistenStmt {
  const result : eslintAst.UnlistenStmt = {
    type: 'UnlistenStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['conditionname'] !== undefined) {
    result['conditionname'] = transformstring(value['conditionname'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformUpdateStmt (value: pgAst.UpdateStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.UpdateStmt {
  const result : eslintAst.UpdateStmt = {
    type: 'UpdateStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['targetList'] !== undefined) {
    const resultTransform = transformArrayNode(value['targetList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['targetList'] = resultTransform.result
  } 
  if (value['whereClause'] !== undefined) {
    const resultTransform = transformNode(value['whereClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['whereClause'] = resultTransform
  } 
  if (value['fromClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['fromClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['fromClause'] = resultTransform.result
  } 
  if (value['returningList'] !== undefined) {
    const resultTransform = transformArrayNode(value['returningList'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['returningList'] = resultTransform.result
  } 
  if (value['withClause'] !== undefined) {
    const resultTransform = transformWithClause(value['withClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['withClause'] = resultTransform
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformDeparseTest (value: pgAst.DeparseTest, parent: eslintAst.Node|null, possibleStart: number): eslintAst.DeparseTest {
  const result : eslintAst.DeparseTest = {
    type: 'DeparseTest',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['query'] !== undefined) {
    result['query'] = transformstring(value['query'])
  }
  
  
  if (value['expected'] !== undefined) {
    result['expected'] = transformstring(value['expected'])
  }
  
  
  if (value['expectedParseError'] !== undefined) {
    result['expectedParseError'] = transformstring(value['expectedParseError'])
  }
  
  
  if (value['expectedCompileError'] !== undefined) {
    result['expectedCompileError'] = transformstring(value['expectedCompileError'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformVacuumOption (value: pgAst.VacuumOption): eslintAst.VacuumOption {
  return value
}
function transformVacuumStmt (value: pgAst.VacuumStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.VacuumStmt {
  const result : eslintAst.VacuumStmt = {
    type: 'VacuumStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['options'] !== undefined) {
    result['options'] = transformGoInt(value['options'])
  }
  
  
  if (value['relation'] !== undefined) {
    const resultTransform = transformRangeVar(value['relation'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['relation'] = resultTransform
  } 
  if (value['vaCols'] !== undefined) {
    const resultTransform = transformArrayNode(value['vaCols'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['vaCols'] = resultTransform.result
  } 
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformVar (value: pgAst.Var, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Var {
  const result : eslintAst.Var = {
    type: 'Var',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['varno'] !== undefined) {
    result['varno'] = transformIndex(value['varno'])
  }
  
  
  if (value['varattno'] !== undefined) {
    result['varattno'] = transformAttrNumber(value['varattno'])
  }
  
  
  if (value['vartype'] !== undefined) {
    result['vartype'] = transformOid(value['vartype'])
  }
  
  
  if (value['vartypmod'] !== undefined) {
    result['vartypmod'] = transformGoInt32(value['vartypmod'])
  }
  
  
  if (value['varcollid'] !== undefined) {
    result['varcollid'] = transformOid(value['varcollid'])
  }
  
  
  if (value['varlevelsup'] !== undefined) {
    result['varlevelsup'] = transformIndex(value['varlevelsup'])
  }
  
  
  if (value['varnoold'] !== undefined) {
    result['varnoold'] = transformIndex(value['varnoold'])
  }
  
  
  if (value['varoattno'] !== undefined) {
    result['varoattno'] = transformAttrNumber(value['varoattno'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformvarattexternal (value: pgAst.varattexternal, parent: eslintAst.Node|null, possibleStart: number): eslintAst.varattexternal {
  const result : eslintAst.varattexternal = {
    type: 'varattexternal',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['vaRawsize'] !== undefined) {
    result['vaRawsize'] = transformGoInt32(value['vaRawsize'])
  }
  
  
  if (value['vaExtsize'] !== undefined) {
    result['vaExtsize'] = transformGoInt32(value['vaExtsize'])
  }
  
  
  if (value['vaValueid'] !== undefined) {
    result['vaValueid'] = transformOid(value['vaValueid'])
  }
  
  
  if (value['vaToastrelid'] !== undefined) {
    result['vaToastrelid'] = transformOid(value['vaToastrelid'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformVariableSetKind (value: pgAst.VariableSetKind): eslintAst.VariableSetKind {
  return value
}
function transformVariableSetStmt (value: pgAst.VariableSetStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.VariableSetStmt {
  const result : eslintAst.VariableSetStmt = {
    type: 'VariableSetStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformVariableSetKind(value['kind'])
  }
  
  
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['isLocal'] !== undefined) {
    result['isLocal'] = transformBoolean(value['isLocal'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformVariableShowStmt (value: pgAst.VariableShowStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.VariableShowStmt {
  const result : eslintAst.VariableShowStmt = {
    type: 'VariableShowStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformVartagExternal (value: pgAst.VartagExternal): eslintAst.VartagExternal {
  return value
}
function transformViewCheckOption (value: pgAst.ViewCheckOption): eslintAst.ViewCheckOption {
  return value
}
function transformViewStmt (value: pgAst.ViewStmt, parent: eslintAst.Node|null, possibleStart: number): eslintAst.ViewStmt {
  const result : eslintAst.ViewStmt = {
    type: 'ViewStmt',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['view'] !== undefined) {
    const resultTransform = transformRangeVar(value['view'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['view'] = resultTransform
  } 
  if (value['aliases'] !== undefined) {
    const resultTransform = transformArrayNode(value['aliases'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aliases'] = resultTransform.result
  } 
  if (value['query'] !== undefined) {
    const resultTransform = transformNode(value['query'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['query'] = resultTransform
  } 
  if (value['replace'] !== undefined) {
    result['replace'] = transformBoolean(value['replace'])
  }
  
  
  if (value['options'] !== undefined) {
    const resultTransform = transformArrayNode(value['options'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['options'] = resultTransform.result
  } 
  if (value['withCheckOption'] !== undefined) {
    result['withCheckOption'] = transformViewCheckOption(value['withCheckOption'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformWCOKind (value: pgAst.WCOKind): eslintAst.WCOKind {
  return value
}
function transformWindowClause (value: pgAst.WindowClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.WindowClause {
  const result : eslintAst.WindowClause = {
    type: 'WindowClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['refname'] !== undefined) {
    result['refname'] = transformstring(value['refname'])
  }
  
  
  if (value['partitionClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['partitionClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['partitionClause'] = resultTransform.result
  } 
  if (value['orderClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['orderClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['orderClause'] = resultTransform.result
  } 
  if (value['frameOptions'] !== undefined) {
    result['frameOptions'] = transformGoInt(value['frameOptions'])
  }
  
  
  if (value['startOffset'] !== undefined) {
    const resultTransform = transformNode(value['startOffset'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['startOffset'] = resultTransform
  } 
  if (value['endOffset'] !== undefined) {
    const resultTransform = transformNode(value['endOffset'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['endOffset'] = resultTransform
  } 
  if (value['winref'] !== undefined) {
    result['winref'] = transformIndex(value['winref'])
  }
  
  
  if (value['copiedOrder'] !== undefined) {
    result['copiedOrder'] = transformBoolean(value['copiedOrder'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformWindowDef (value: pgAst.WindowDef, parent: eslintAst.Node|null, possibleStart: number): eslintAst.WindowDef {
  const result : eslintAst.WindowDef = {
    type: 'WindowDef',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['refname'] !== undefined) {
    result['refname'] = transformstring(value['refname'])
  }
  
  
  if (value['partitionClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['partitionClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['partitionClause'] = resultTransform.result
  } 
  if (value['orderClause'] !== undefined) {
    const resultTransform = transformArrayNode(value['orderClause'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['orderClause'] = resultTransform.result
  } 
  if (value['frameOptions'] !== undefined) {
    result['frameOptions'] = transformGoInt(value['frameOptions'])
  }
  
  
  if (value['startOffset'] !== undefined) {
    const resultTransform = transformNode(value['startOffset'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['startOffset'] = resultTransform
  } 
  if (value['endOffset'] !== undefined) {
    const resultTransform = transformNode(value['endOffset'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['endOffset'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformWindowFunc (value: pgAst.WindowFunc, parent: eslintAst.Node|null, possibleStart: number): eslintAst.WindowFunc {
  const result : eslintAst.WindowFunc = {
    type: 'WindowFunc',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['winfnoid'] !== undefined) {
    result['winfnoid'] = transformOid(value['winfnoid'])
  }
  
  
  if (value['wintype'] !== undefined) {
    result['wintype'] = transformOid(value['wintype'])
  }
  
  
  if (value['wincollid'] !== undefined) {
    result['wincollid'] = transformOid(value['wincollid'])
  }
  
  
  if (value['inputcollid'] !== undefined) {
    result['inputcollid'] = transformOid(value['inputcollid'])
  }
  
  
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['aggfilter'] !== undefined) {
    const resultTransform = transformNode(value['aggfilter'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['aggfilter'] = resultTransform
  } 
  if (value['winref'] !== undefined) {
    result['winref'] = transformIndex(value['winref'])
  }
  
  
  if (value['winstar'] !== undefined) {
    result['winstar'] = transformBoolean(value['winstar'])
  }
  
  
  if (value['winagg'] !== undefined) {
    result['winagg'] = transformBoolean(value['winagg'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformWithCheckOption (value: pgAst.WithCheckOption, parent: eslintAst.Node|null, possibleStart: number): eslintAst.WithCheckOption {
  const result : eslintAst.WithCheckOption = {
    type: 'WithCheckOption',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['kind'] !== undefined) {
    result['kind'] = transformWCOKind(value['kind'])
  }
  
  
  if (value['relname'] !== undefined) {
    result['relname'] = transformstring(value['relname'])
  }
  
  
  if (value['polname'] !== undefined) {
    result['polname'] = transformstring(value['polname'])
  }
  
  
  if (value['qual'] !== undefined) {
    const resultTransform = transformNode(value['qual'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['qual'] = resultTransform
  } 
  if (value['cascaded'] !== undefined) {
    result['cascaded'] = transformBoolean(value['cascaded'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformWithClause (value: pgAst.WithClause, parent: eslintAst.Node|null, possibleStart: number): eslintAst.WithClause {
  const result : eslintAst.WithClause = {
    type: 'WithClause',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['ctes'] !== undefined) {
    const resultTransform = transformArrayNode(value['ctes'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['ctes'] = resultTransform.result
  } 
  if (value['recursive'] !== undefined) {
    result['recursive'] = transformBoolean(value['recursive'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformXmlExpr (value: pgAst.XmlExpr, parent: eslintAst.Node|null, possibleStart: number): eslintAst.XmlExpr {
  const result : eslintAst.XmlExpr = {
    type: 'XmlExpr',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xpr'] !== undefined) {
    const resultTransform = transformNode(value['xpr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['xpr'] = resultTransform
  } 
  if (value['op'] !== undefined) {
    result['op'] = transformXmlExprOp(value['op'])
  }
  
  
  if (value['name'] !== undefined) {
    result['name'] = transformstring(value['name'])
  }
  
  
  if (value['namedArgs'] !== undefined) {
    const resultTransform = transformArrayNode(value['namedArgs'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['namedArgs'] = resultTransform.result
  } 
  if (value['argNames'] !== undefined) {
    const resultTransform = transformArrayNode(value['argNames'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['argNames'] = resultTransform.result
  } 
  if (value['args'] !== undefined) {
    const resultTransform = transformArrayNode(value['args'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['args'] = resultTransform.result
  } 
  if (value['xmloption'] !== undefined) {
    result['xmloption'] = transformXmlOptionType(value['xmloption'])
  }
  
  
  if (value['type'] !== undefined) {
    result['_type'] = transformOid(value['type'])
  }
  
  
  if (value['typmod'] !== undefined) {
    result['typmod'] = transformGoInt32(value['typmod'])
  }
  
  
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}
function transformXmlExprOp (value: pgAst.XmlExprOp): eslintAst.XmlExprOp {
  return value
}
function transformXmlOptionType (value: pgAst.XmlOptionType): eslintAst.XmlOptionType {
  return value
}
function transformXmlSerialize (value: pgAst.XmlSerialize, parent: eslintAst.Node|null, possibleStart: number): eslintAst.XmlSerialize {
  const result : eslintAst.XmlSerialize = {
    type: 'XmlSerialize',
    parent,
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      }
    },
    range: [0, 0]
  }
  const locationStart = possibleStart
  let locationEnd = locationStart + 1
   
  if (value['xmloption'] !== undefined) {
    result['xmloption'] = transformXmlOptionType(value['xmloption'])
  }
  
  
  if (value['expr'] !== undefined) {
    const resultTransform = transformNode(value['expr'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['expr'] = resultTransform
  } 
  if (value['typeName'] !== undefined) {
    const resultTransform = transformTypeName(value['typeName'], result, locationStart)
    if (resultTransform.end > locationEnd) {
      locationEnd = resultTransform.end
    }
    result['typeName'] = resultTransform
  } 
  if (value['location'] !== undefined) {
    result['location'] = transformGoInt(value['location'])
  }
  
  
  
  result.start = locationStart
  result.range[0] = locationStart
  result.end = locationEnd
  result.range[1] = locationEnd 
  return result
}

const mapping = {
  AArrayExpr: transformAArrayExpr,
    A_Const: transformAConst,
    A_Expr: transformAExpr,
    AIndices: transformAIndices,
    AIndirection: transformAIndirection,
    AStar: transformAStar,
    AccessPriv: transformAccessPriv,
    Aggref: transformAggref,
    Alias: transformAlias,
    AlterCollationStmt: transformAlterCollationStmt,
    AlterDatabaseSetStmt: transformAlterDatabaseSetStmt,
    AlterDatabaseStmt: transformAlterDatabaseStmt,
    AlterDefaultPrivilegesStmt: transformAlterDefaultPrivilegesStmt,
    AlterDomainStmt: transformAlterDomainStmt,
    AlterEnumStmt: transformAlterEnumStmt,
    AlterEventTrigStmt: transformAlterEventTrigStmt,
    AlterExtensionContentsStmt: transformAlterExtensionContentsStmt,
    AlterExtensionStmt: transformAlterExtensionStmt,
    AlterFdwStmt: transformAlterFdwStmt,
    AlterForeignServerStmt: transformAlterForeignServerStmt,
    AlterFunctionStmt: transformAlterFunctionStmt,
    AlterObjectDependsStmt: transformAlterObjectDependsStmt,
    AlterObjectSchemaStmt: transformAlterObjectSchemaStmt,
    AlterOpFamilyStmt: transformAlterOpFamilyStmt,
    AlterOperatorStmt: transformAlterOperatorStmt,
    AlterOwnerStmt: transformAlterOwnerStmt,
    AlterPolicyStmt: transformAlterPolicyStmt,
    AlterPublicationStmt: transformAlterPublicationStmt,
    AlterRoleSetStmt: transformAlterRoleSetStmt,
    AlterRoleStmt: transformAlterRoleStmt,
    AlterSeqStmt: transformAlterSeqStmt,
    AlterSubscriptionStmt: transformAlterSubscriptionStmt,
    AlterSystemStmt: transformAlterSystemStmt,
    AlterTableCmd: transformAlterTableCmd,
    AlterTableMoveAllStmt: transformAlterTableMoveAllStmt,
    AlterTableSpaceOptionsStmt: transformAlterTableSpaceOptionsStmt,
    AlterTableStmt: transformAlterTableStmt,
    AlterTSConfigurationStmt: transformAlterTSConfigurationStmt,
    AlterTSDictionaryStmt: transformAlterTSDictionaryStmt,
    AlterUserMappingStmt: transformAlterUserMappingStmt,
    AlternativeSubPlan: transformAlternativeSubPlan,
    ArrayCoerceExpr: transformArrayCoerceExpr,
    ArrayExpr: transformArrayExpr,
    ArrayRef: transformArrayRef,
    BitString: transformBitString,
    BlockIdData: transformBlockIdData,
    BoolExpr: transformBoolExpr,
    BooleanTest: transformBooleanTest,
    CaseExpr: transformCaseExpr,
    CaseTestExpr: transformCaseTestExpr,
    CaseWhen: transformCaseWhen,
    CheckPointStmt: transformCheckPointStmt,
    ClosePortalStmt: transformClosePortalStmt,
    ClusterStmt: transformClusterStmt,
    CoalesceExpr: transformCoalesceExpr,
    CoerceToDomain: transformCoerceToDomain,
    CoerceToDomainValue: transformCoerceToDomainValue,
    CoerceViaIO: transformCoerceViaIO,
    CollateClause: transformCollateClause,
    CollateExpr: transformCollateExpr,
    ColumnDef: transformColumnDef,
    ColumnRef: transformColumnRef,
    CommentStmt: transformCommentStmt,
    CommonTableExpr: transformCommonTableExpr,
    CompositeTypeStmt: transformCompositeTypeStmt,
    Const: transformConst,
    Constraint: transformConstraint,
    ConstraintsSetStmt: transformConstraintsSetStmt,
    ConvertRowtypeExpr: transformConvertRowtypeExpr,
    CopyStmt: transformCopyStmt,
    CreateAmStmt: transformCreateAmStmt,
    CreateCastStmt: transformCreateCastStmt,
    CreateConversionStmt: transformCreateConversionStmt,
    CreateDomainStmt: transformCreateDomainStmt,
    CreateEnumStmt: transformCreateEnumStmt,
    CreateEventTrigStmt: transformCreateEventTrigStmt,
    CreateExtensionStmt: transformCreateExtensionStmt,
    CreateFdwStmt: transformCreateFdwStmt,
    CreateForeignServerStmt: transformCreateForeignServerStmt,
    CreateForeignTableStmt: transformCreateForeignTableStmt,
    CreateFunctionStmt: transformCreateFunctionStmt,
    CreateOpClassItem: transformCreateOpClassItem,
    CreateOpClassStmt: transformCreateOpClassStmt,
    CreateOpFamilyStmt: transformCreateOpFamilyStmt,
    CreatePLangStmt: transformCreatePLangStmt,
    CreatePolicyStmt: transformCreatePolicyStmt,
    CreatePublicationStmt: transformCreatePublicationStmt,
    CreateRangeStmt: transformCreateRangeStmt,
    CreateRoleStmt: transformCreateRoleStmt,
    CreateSchemaStmt: transformCreateSchemaStmt,
    CreateSeqStmt: transformCreateSeqStmt,
    CreateStatsStmt: transformCreateStatsStmt,
    CreateStmt: transformCreateStmt,
    CreateSubscriptionStmt: transformCreateSubscriptionStmt,
    CreateTableAsStmt: transformCreateTableAsStmt,
    CreateTableSpaceStmt: transformCreateTableSpaceStmt,
    CreateTransformStmt: transformCreateTransformStmt,
    CreateTrigStmt: transformCreateTrigStmt,
    CreateUserMappingStmt: transformCreateUserMappingStmt,
    CreatedbStmt: transformCreatedbStmt,
    CurrentOfExpr: transformCurrentOfExpr,
    DeallocateStmt: transformDeallocateStmt,
    DeclareCursorStmt: transformDeclareCursorStmt,
    DefElem: transformDefElem,
    DefineStmt: transformDefineStmt,
    DeleteStmt: transformDeleteStmt,
    DiscardStmt: transformDiscardStmt,
    DoStmt: transformDoStmt,
    DropOwnedStmt: transformDropOwnedStmt,
    DropRoleStmt: transformDropRoleStmt,
    DropStmt: transformDropStmt,
    DropSubscriptionStmt: transformDropSubscriptionStmt,
    DropTableSpaceStmt: transformDropTableSpaceStmt,
    DropUserMappingStmt: transformDropUserMappingStmt,
    DropdbStmt: transformDropdbStmt,
    ExecuteStmt: transformExecuteStmt,
    ExplainStmt: transformExplainStmt,
    Expr: transformExpr,
    FetchStmt: transformFetchStmt,
    FieldSelect: transformFieldSelect,
    FieldStore: transformFieldStore,
    Float: transformFloat,
    FromExpr: transformFromExpr,
    FuncCall: transformFuncCall,
    FuncExpr: transformFuncExpr,
    FunctionParameter: transformFunctionParameter,
    GrantRoleStmt: transformGrantRoleStmt,
    GrantStmt: transformGrantStmt,
    GroupingFunc: transformGroupingFunc,
    GroupingSet: transformGroupingSet,
    ImportForeignSchemaStmt: transformImportForeignSchemaStmt,
    IndexElem: transformIndexElem,
    IndexStmt: transformIndexStmt,
    InferClause: transformInferClause,
    InferenceElem: transformInferenceElem,
    InlineCodeBlock: transformInlineCodeBlock,
    InsertStmt: transformInsertStmt,
    Integer: transformInteger,
    IntoClause: transformIntoClause,
    JoinExpr: transformJoinExpr,
    List: transformList,
    ListenStmt: transformListenStmt,
    LoadStmt: transformLoadStmt,
    LockStmt: transformLockStmt,
    LockingClause: transformLockingClause,
    MinMaxExpr: transformMinMaxExpr,
    MultiAssignRef: transformMultiAssignRef,
    NamedArgExpr: transformNamedArgExpr,
    NextValueExpr: transformNextValueExpr,
    FingerprintHashContext: transformFingerprintHashContext,
    NotifyStmt: transformNotifyStmt,
    Null: transformNull,
    NullTest: transformNullTest,
    ObjectWithArgs: transformObjectWithArgs,
    OnConflictClause: transformOnConflictClause,
    OnConflictExpr: transformOnConflictExpr,
    OpExpr: transformOpExpr,
    Param: transformParam,
    ParamExecData: transformParamExecData,
    ParamExternData: transformParamExternData,
    ParamListInfoData: transformParamListInfoData,
    ParamRef: transformParamRef,
    PartitionBoundSpec: transformPartitionBoundSpec,
    PartitionCmd: transformPartitionCmd,
    PartitionElem: transformPartitionElem,
    PartitionRangeDatum: transformPartitionRangeDatum,
    PartitionSpec: transformPartitionSpec,
    PrepareStmt: transformPrepareStmt,
    Query: transformQuery,
    RangeFunction: transformRangeFunction,
    RangeSubselect: transformRangeSubselect,
    RangeTableFunc: transformRangeTableFunc,
    RangeTableFuncCol: transformRangeTableFuncCol,
    RangeTableSample: transformRangeTableSample,
    RangeTblEntry: transformRangeTblEntry,
    RangeTblFunction: transformRangeTblFunction,
    RangeTblRef: transformRangeTblRef,
    RangeVar: transformRangeVar,
    RawStmt: transformRawStmt,
    ReassignOwnedStmt: transformReassignOwnedStmt,
    RefreshMatViewStmt: transformRefreshMatViewStmt,
    ReindexStmt: transformReindexStmt,
    RelabelType: transformRelabelType,
    RenameStmt: transformRenameStmt,
    ReplicaIdentityStmt: transformReplicaIdentityStmt,
    ResTarget: transformResTarget,
    RoleSpec: transformRoleSpec,
    RowCompareExpr: transformRowCompareExpr,
    RowExpr: transformRowExpr,
    RowMarkClause: transformRowMarkClause,
    RuleStmt: transformRuleStmt,
    ScalarArrayOpExpr: transformScalarArrayOpExpr,
    SecLabelStmt: transformSecLabelStmt,
    SelectStmt: transformSelectStmt,
    SetOperationStmt: transformSetOperationStmt,
    SetToDefault: transformSetToDefault,
    SortBy: transformSortBy,
    SortGroupClause: transformSortGroupClause,
    SQLValueFunction: transformSQLValueFunction,
    String: transformString,
    SubLink: transformSubLink,
    SubPlan: transformSubPlan,
    SyntaxTree: transformSyntaxTree,
    TableFunc: transformTableFunc,
    TableLikeClause: transformTableLikeClause,
    TableSampleClause: transformTableSampleClause,
    TargetEntry: transformTargetEntry,
    TransactionStmt: transformTransactionStmt,
    TriggerTransition: transformTriggerTransition,
    TruncateStmt: transformTruncateStmt,
    TypeCast: transformTypeCast,
    TypeName: transformTypeName,
    UnlistenStmt: transformUnlistenStmt,
    UpdateStmt: transformUpdateStmt,
    DeparseTest: transformDeparseTest,
    VacuumStmt: transformVacuumStmt,
    Var: transformVar,
    varattexternal: transformvarattexternal,
    VariableSetStmt: transformVariableSetStmt,
    VariableShowStmt: transformVariableShowStmt,
    ViewStmt: transformViewStmt,
    WindowClause: transformWindowClause,
    WindowDef: transformWindowDef,
    WindowFunc: transformWindowFunc,
    WithCheckOption: transformWithCheckOption,
    WithClause: transformWithClause,
    XmlExpr: transformXmlExpr,
    XmlSerialize: transformXmlSerialize
}

export function transformNode (node: pgAst.Node, parent: eslintAst.Node|null, possibleStart: number): eslintAst.Node {
  const keys = Object.keys(node)
  if (keys.length !== 1) {
    console.error('Unexpected keys for node type', keys)
    throw new Error('Unexpected keys for node')
  }
  
    // @ts-ignore
  return mapping[keys[0]](node[keys[0]], parent, possibleStart)
} 

export const visitorKeys = {
  "AArrayExpr": [
    "elements"
  ],
  "AConst": [
    "val"
  ],
  "AExpr": [
    "name",
    "lexpr",
    "rexpr"
  ],
  "AIndices": [
    "lidx",
    "uidx"
  ],
  "AIndirection": [
    "arg",
    "indirection"
  ],
  "AStar": [],
  "AccessPriv": [
    "cols"
  ],
  "Aggref": [
    "xpr",
    "aggargtypes",
    "aggdirectargs",
    "args",
    "aggorder",
    "aggdistinct",
    "aggfilter"
  ],
  "Alias": [
    "colnames"
  ],
  "AlterCollationStmt": [
    "collname"
  ],
  "AlterDatabaseSetStmt": [
    "setstmt"
  ],
  "AlterDatabaseStmt": [
    "options"
  ],
  "AlterDefaultPrivilegesStmt": [
    "options",
    "action"
  ],
  "AlterDomainStmt": [
    "typeName",
    "def"
  ],
  "AlterEnumStmt": [
    "typeName"
  ],
  "AlterEventTrigStmt": [],
  "AlterExtensionContentsStmt": [
    "object"
  ],
  "AlterExtensionStmt": [
    "options"
  ],
  "AlterFdwStmt": [
    "funcOptions",
    "options"
  ],
  "AlterForeignServerStmt": [
    "options"
  ],
  "AlterFunctionStmt": [
    "func",
    "actions"
  ],
  "AlterObjectDependsStmt": [
    "relation",
    "object",
    "extname"
  ],
  "AlterObjectSchemaStmt": [
    "relation",
    "object"
  ],
  "AlterOpFamilyStmt": [
    "opfamilyname",
    "items"
  ],
  "AlterOperatorStmt": [
    "opername",
    "options"
  ],
  "AlterOwnerStmt": [
    "relation",
    "object",
    "newowner"
  ],
  "AlterPolicyStmt": [
    "table",
    "roles",
    "qual",
    "withCheck"
  ],
  "AlterPublicationStmt": [
    "options",
    "tables"
  ],
  "AlterRoleSetStmt": [
    "role",
    "setstmt"
  ],
  "AlterRoleStmt": [
    "role",
    "options"
  ],
  "AlterSeqStmt": [
    "sequence",
    "options"
  ],
  "AlterSubscriptionStmt": [
    "publication",
    "options"
  ],
  "AlterSystemStmt": [
    "setstmt"
  ],
  "AlterTableCmd": [
    "newowner",
    "def"
  ],
  "AlterTableMoveAllStmt": [
    "roles"
  ],
  "AlterTableSpaceOptionsStmt": [
    "options"
  ],
  "AlterTableStmt": [
    "relation",
    "cmds"
  ],
  "AlterTSConfigurationStmt": [
    "cfgname",
    "tokentype",
    "dicts"
  ],
  "AlterTSDictionaryStmt": [
    "dictname",
    "options"
  ],
  "AlterUserMappingStmt": [
    "user",
    "options"
  ],
  "AlternativeSubPlan": [
    "xpr",
    "subplans"
  ],
  "ArrayCoerceExpr": [
    "xpr",
    "arg"
  ],
  "ArrayExpr": [
    "xpr",
    "elements"
  ],
  "ArrayRef": [
    "xpr",
    "refupperindexpr",
    "reflowerindexpr",
    "refexpr",
    "refassgnexpr"
  ],
  "BitString": [],
  "BlockIdData": [],
  "BoolExpr": [
    "xpr",
    "args"
  ],
  "BooleanTest": [
    "xpr",
    "arg"
  ],
  "CaseExpr": [
    "xpr",
    "arg",
    "args",
    "defresult"
  ],
  "CaseTestExpr": [
    "xpr"
  ],
  "CaseWhen": [
    "xpr",
    "expr",
    "result"
  ],
  "CheckPointStmt": [],
  "ClosePortalStmt": [],
  "ClusterStmt": [
    "relation"
  ],
  "CoalesceExpr": [
    "xpr",
    "args"
  ],
  "CoerceToDomain": [
    "xpr",
    "arg"
  ],
  "CoerceToDomainValue": [
    "xpr"
  ],
  "CoerceViaIO": [
    "xpr",
    "arg"
  ],
  "CollateClause": [
    "arg",
    "collname"
  ],
  "CollateExpr": [
    "xpr",
    "arg"
  ],
  "ColumnDef": [
    "typeName",
    "rawDefault",
    "cookedDefault",
    "collClause",
    "constraints",
    "fdwoptions"
  ],
  "ColumnRef": [
    "fields"
  ],
  "CommentStmt": [
    "object"
  ],
  "CommonTableExpr": [
    "aliascolnames",
    "ctequery",
    "ctecolnames",
    "ctecoltypes",
    "ctecoltypmods",
    "ctecolcollations"
  ],
  "CompositeTypeStmt": [
    "typevar",
    "coldeflist"
  ],
  "Const": [
    "xpr"
  ],
  "Constraint": [
    "rawExpr",
    "keys",
    "exclusions",
    "options",
    "whereClause",
    "pktable",
    "fkAttrs",
    "pkAttrs",
    "oldConpfeqop"
  ],
  "ConstraintsSetStmt": [
    "constraints"
  ],
  "ConvertRowtypeExpr": [
    "xpr",
    "arg"
  ],
  "CopyStmt": [
    "relation",
    "query",
    "attlist",
    "options"
  ],
  "CreateAmStmt": [
    "handlerName"
  ],
  "CreateCastStmt": [
    "sourcetype",
    "targettype",
    "func"
  ],
  "CreateConversionStmt": [
    "conversionName",
    "funcName"
  ],
  "CreateDomainStmt": [
    "domainname",
    "typeName",
    "collClause",
    "constraints"
  ],
  "CreateEnumStmt": [
    "typeName",
    "vals"
  ],
  "CreateEventTrigStmt": [
    "whenclause",
    "funcname"
  ],
  "CreateExtensionStmt": [
    "options"
  ],
  "CreateFdwStmt": [
    "funcOptions",
    "options"
  ],
  "CreateForeignServerStmt": [
    "options"
  ],
  "CreateForeignTableStmt": [
    "base",
    "options"
  ],
  "CreateFunctionStmt": [
    "funcname",
    "parameters",
    "returnType",
    "options",
    "withClause"
  ],
  "CreateOpClassItem": [
    "name",
    "orderFamily",
    "classArgs",
    "storedtype"
  ],
  "CreateOpClassStmt": [
    "opclassname",
    "opfamilyname",
    "datatype",
    "items"
  ],
  "CreateOpFamilyStmt": [
    "opfamilyname"
  ],
  "CreatePLangStmt": [
    "plhandler",
    "plinline",
    "plvalidator"
  ],
  "CreatePolicyStmt": [
    "table",
    "roles",
    "qual",
    "withCheck"
  ],
  "CreatePublicationStmt": [
    "options",
    "tables"
  ],
  "CreateRangeStmt": [
    "typeName",
    "params"
  ],
  "CreateRoleStmt": [
    "options"
  ],
  "CreateSchemaStmt": [
    "authrole",
    "schemaElts"
  ],
  "CreateSeqStmt": [
    "sequence",
    "options"
  ],
  "CreateStatsStmt": [
    "defnames",
    "statTypes",
    "exprs",
    "relations"
  ],
  "CreateStmt": [
    "relation",
    "tableElts",
    "inhRelations",
    "partbound",
    "partspec",
    "ofTypename",
    "constraints",
    "options"
  ],
  "CreateSubscriptionStmt": [
    "publication",
    "options"
  ],
  "CreateTableAsStmt": [
    "query",
    "into"
  ],
  "CreateTableSpaceStmt": [
    "owner",
    "options"
  ],
  "CreateTransformStmt": [
    "typeName",
    "fromsql",
    "tosql"
  ],
  "CreateTrigStmt": [
    "relation",
    "funcname",
    "args",
    "columns",
    "whenClause",
    "transitionRels",
    "constrrel"
  ],
  "CreateUserMappingStmt": [
    "user",
    "options"
  ],
  "CreatedbStmt": [
    "options"
  ],
  "CurrentOfExpr": [
    "xpr"
  ],
  "DeallocateStmt": [],
  "DeclareCursorStmt": [
    "query"
  ],
  "DefElem": [
    "arg"
  ],
  "DefineStmt": [
    "defnames",
    "args",
    "definition"
  ],
  "DeleteStmt": [
    "relation",
    "usingClause",
    "whereClause",
    "returningList",
    "withClause"
  ],
  "DiscardStmt": [],
  "DoStmt": [
    "args"
  ],
  "DropOwnedStmt": [
    "roles"
  ],
  "DropRoleStmt": [
    "roles"
  ],
  "DropStmt": [
    "objects"
  ],
  "DropSubscriptionStmt": [],
  "DropTableSpaceStmt": [],
  "DropUserMappingStmt": [
    "user"
  ],
  "DropdbStmt": [],
  "ExecuteStmt": [
    "params"
  ],
  "ExplainStmt": [
    "query",
    "options"
  ],
  "Expr": [],
  "FetchStmt": [],
  "FieldSelect": [
    "xpr",
    "arg"
  ],
  "FieldStore": [
    "xpr",
    "arg",
    "newvals",
    "fieldnums"
  ],
  "Float": [],
  "FromExpr": [
    "fromlist",
    "quals"
  ],
  "FuncCall": [
    "funcname",
    "args",
    "aggOrder",
    "aggFilter",
    "over"
  ],
  "FuncExpr": [
    "xpr",
    "args"
  ],
  "FunctionParameter": [
    "argType",
    "defexpr"
  ],
  "GrantRoleStmt": [
    "grantedRoles",
    "granteeRoles",
    "grantor"
  ],
  "GrantStmt": [
    "objects",
    "privileges",
    "grantees"
  ],
  "GroupingFunc": [
    "xpr",
    "args",
    "refs",
    "cols"
  ],
  "GroupingSet": [
    "content"
  ],
  "ImportForeignSchemaStmt": [
    "tableList",
    "options"
  ],
  "IndexElem": [
    "expr",
    "collation",
    "opclass"
  ],
  "IndexStmt": [
    "relation",
    "indexParams",
    "options",
    "whereClause",
    "excludeOpNames"
  ],
  "InferClause": [
    "indexElems",
    "whereClause"
  ],
  "InferenceElem": [
    "xpr",
    "expr"
  ],
  "InlineCodeBlock": [],
  "InsertStmt": [
    "relation",
    "cols",
    "selectStmt",
    "onConflictClause",
    "returningList",
    "withClause"
  ],
  "Integer": [],
  "IntoClause": [
    "rel",
    "colNames",
    "options",
    "viewQuery"
  ],
  "JoinExpr": [
    "larg",
    "rarg",
    "usingClause",
    "quals",
    "alias"
  ],
  "List": [
    "items"
  ],
  "ListenStmt": [],
  "LoadStmt": [],
  "LockStmt": [
    "relations"
  ],
  "LockingClause": [
    "lockedRels"
  ],
  "MinMaxExpr": [
    "xpr",
    "args"
  ],
  "MultiAssignRef": [
    "source"
  ],
  "NamedArgExpr": [
    "xpr",
    "arg"
  ],
  "NextValueExpr": [
    "xpr"
  ],
  "FingerprintHashContext": [],
  "NotifyStmt": [],
  "Null": [],
  "NullTest": [
    "xpr",
    "arg"
  ],
  "ObjectWithArgs": [
    "objname",
    "objargs"
  ],
  "OnConflictClause": [
    "infer",
    "targetList",
    "whereClause"
  ],
  "OnConflictExpr": [
    "arbiterElems",
    "arbiterWhere",
    "onConflictSet",
    "onConflictWhere",
    "exclRelTlist"
  ],
  "OpExpr": [
    "xpr",
    "args"
  ],
  "Param": [
    "xpr"
  ],
  "ParamExecData": [],
  "ParamExternData": [],
  "ParamListInfoData": [],
  "ParamRef": [],
  "PartitionBoundSpec": [
    "listdatums",
    "lowerdatums",
    "upperdatums"
  ],
  "PartitionCmd": [
    "name",
    "bound"
  ],
  "PartitionElem": [
    "expr",
    "collation",
    "opclass"
  ],
  "PartitionRangeDatum": [
    "value"
  ],
  "PartitionSpec": [
    "partParams"
  ],
  "PrepareStmt": [
    "argtypes",
    "query"
  ],
  "Query": [
    "utilityStmt",
    "cteList",
    "rtable",
    "jointree",
    "targetList",
    "onConflict",
    "returningList",
    "groupClause",
    "groupingSets",
    "havingQual",
    "windowClause",
    "distinctClause",
    "sortClause",
    "limitOffset",
    "limitCount",
    "rowMarks",
    "setOperations",
    "constraintDeps",
    "withCheckOptions"
  ],
  "RangeFunction": [
    "functions",
    "alias",
    "coldeflist"
  ],
  "RangeSubselect": [
    "subquery",
    "alias"
  ],
  "RangeTableFunc": [
    "docexpr",
    "rowexpr",
    "namespaces",
    "columns",
    "alias"
  ],
  "RangeTableFuncCol": [
    "typeName",
    "colexpr",
    "coldefexpr"
  ],
  "RangeTableSample": [
    "relation",
    "method",
    "args",
    "repeatable"
  ],
  "RangeTblEntry": [
    "tablesample",
    "subquery",
    "joinaliasvars",
    "functions",
    "tablefunc",
    "valuesLists",
    "coltypes",
    "coltypmods",
    "colcollations",
    "alias",
    "eref",
    "securityQuals"
  ],
  "RangeTblFunction": [
    "funcexpr",
    "funccolnames",
    "funccoltypes",
    "funccoltypmods",
    "funccolcollations"
  ],
  "RangeTblRef": [],
  "RangeVar": [
    "alias"
  ],
  "RawStmt": [
    "stmt"
  ],
  "ReassignOwnedStmt": [
    "roles",
    "newrole"
  ],
  "RefreshMatViewStmt": [
    "relation"
  ],
  "ReindexStmt": [
    "relation"
  ],
  "RelabelType": [
    "xpr",
    "arg"
  ],
  "RenameStmt": [
    "relation",
    "object"
  ],
  "ReplicaIdentityStmt": [],
  "ResTarget": [
    "indirection",
    "val"
  ],
  "RoleSpec": [],
  "RowCompareExpr": [
    "xpr",
    "opnos",
    "opfamilies",
    "inputcollids",
    "largs",
    "rargs"
  ],
  "RowExpr": [
    "xpr",
    "args",
    "colnames"
  ],
  "RowMarkClause": [],
  "RuleStmt": [
    "relation",
    "whereClause",
    "actions"
  ],
  "ScalarArrayOpExpr": [
    "xpr",
    "args"
  ],
  "SecLabelStmt": [
    "object"
  ],
  "SelectStmt": [
    "distinctClause",
    "intoClause",
    "targetList",
    "fromClause",
    "whereClause",
    "groupClause",
    "havingClause",
    "windowClause",
    "valuesLists",
    "sortClause",
    "limitOffset",
    "limitCount",
    "lockingClause",
    "withClause",
    "larg",
    "rarg"
  ],
  "SetOperationStmt": [
    "larg",
    "rarg",
    "colTypes",
    "colTypmods",
    "colCollations",
    "groupClauses"
  ],
  "SetToDefault": [
    "xpr"
  ],
  "SortBy": [
    "node",
    "useOp"
  ],
  "SortGroupClause": [],
  "SQLValueFunction": [
    "xpr"
  ],
  "String": [],
  "SubLink": [
    "xpr",
    "testexpr",
    "operName",
    "subselect"
  ],
  "SubPlan": [
    "xpr",
    "testexpr",
    "paramIds",
    "setParam",
    "parParam",
    "args"
  ],
  "SyntaxTree": [
    "statements"
  ],
  "TableFunc": [
    "nsUris",
    "nsNames",
    "docexpr",
    "rowexpr",
    "colnames",
    "coltypes",
    "coltypmods",
    "colcollations",
    "colexprs",
    "coldefexprs"
  ],
  "TableLikeClause": [
    "relation"
  ],
  "TableSampleClause": [
    "args",
    "repeatable"
  ],
  "TargetEntry": [
    "xpr",
    "expr"
  ],
  "TransactionStmt": [
    "options"
  ],
  "TriggerTransition": [],
  "TruncateStmt": [
    "relations"
  ],
  "TypeCast": [
    "arg",
    "typeName"
  ],
  "TypeName": [
    "names",
    "typmods",
    "arrayBounds"
  ],
  "UnlistenStmt": [],
  "UpdateStmt": [
    "relation",
    "targetList",
    "whereClause",
    "fromClause",
    "returningList",
    "withClause"
  ],
  "DeparseTest": [],
  "VacuumStmt": [
    "relation",
    "vaCols"
  ],
  "Var": [
    "xpr"
  ],
  "varattexternal": [],
  "VariableSetStmt": [
    "args"
  ],
  "VariableShowStmt": [],
  "ViewStmt": [
    "view",
    "aliases",
    "query",
    "options"
  ],
  "WindowClause": [
    "partitionClause",
    "orderClause",
    "startOffset",
    "endOffset"
  ],
  "WindowDef": [
    "partitionClause",
    "orderClause",
    "startOffset",
    "endOffset"
  ],
  "WindowFunc": [
    "xpr",
    "args",
    "aggfilter"
  ],
  "WithCheckOption": [
    "qual"
  ],
  "WithClause": [
    "ctes"
  ],
  "XmlExpr": [
    "xpr",
    "namedArgs",
    "argNames",
    "args"
  ],
  "XmlSerialize": [
    "expr",
    "typeName"
  ]
}
visitorKeys['Program'] = ['queries']
