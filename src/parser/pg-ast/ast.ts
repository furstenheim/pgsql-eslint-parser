import type { Node } from './Node'

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
type GoHash = string

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


export interface AArrayExpr {
  elements?: Node[]
  location?: GoInt
}

export interface AConst {
  val?: Node
  location?: GoInt
}

export interface AExpr {
  kind?: AExprKind
  name?: Node[]
  lexpr?: Node
  rexpr?: Node
  location?: GoInt
}

export type AExprKind = 'AEXPR_OP'|'AEXPR_OP_ANY'|'AEXPR_OP_ALL'|'AEXPR_DISTINCT'|'AEXPR_NOT_DISTINCT'|'AEXPR_NULLIF'|'AEXPR_OF'|'AEXPR_IN'|'AEXPR_LIKE'|'AEXPR_ILIKE'|'AEXPR_SIMILAR'|'AEXPR_BETWEEN'|'AEXPR_NOT_BETWEEN'|'AEXPR_BETWEEN_SYM'|'AEXPR_NOT_BETWEEN_SYM'|'AEXPR_PAREN'


export interface AIndices {
  isSlice?: Boolean
  lidx?: Node
  uidx?: Node
}

export interface AIndirection {
  arg?: Node
  indirection?: Node[]
}

export interface AStar {

}

export interface AccessPriv {
  privName?: string
  cols?: Node[]
}

export type AggSplit = 'AGGSPLIT_SIMPLE'|'AGGSPLIT_INITIAL_SERIAL'|'AGGSPLIT_FINAL_DESERIAL'


export type AggStrategy = 'AGG_PLAIN'|'AGG_SORTED'|'AGG_HASHED'|'AGG_MIXED'


export interface Aggref {
  xpr?: Node
  aggfnoid?: Oid
  aggtype?: Oid
  aggcollid?: Oid
  inputcollid?: Oid
  aggtranstype?: Oid
  aggargtypes?: Node[]
  aggdirectargs?: Node[]
  args?: Node[]
  aggorder?: Node[]
  aggdistinct?: Node[]
  aggfilter?: Node
  aggstar?: Boolean
  aggvariadic?: Boolean
  aggkind?: GoByte
  agglevelsup?: Index
  aggsplit?: AggSplit
  location?: GoInt
}

export interface Alias {
  aliasname?: string
  colnames?: Node[]
}

export interface AlterCollationStmt {
  collname?: Node[]
}

export interface AlterDatabaseSetStmt {
  dbname?: string
  setstmt?: VariableSetStmt
}

export interface AlterDatabaseStmt {
  dbname?: string
  options?: Node[]
}

export interface AlterDefaultPrivilegesStmt {
  options?: Node[]
  action?: GrantStmt
}

export interface AlterDomainStmt {
  subtype?: GoByte
  typeName?: Node[]
  name?: string
  def?: Node
  behavior?: DropBehavior
  missingOk?: Boolean
}

export interface AlterEnumStmt {
  typeName?: Node[]
  oldVal?: string
  newVal?: string
  newValNeighbor?: string
  newValIsAfter?: Boolean
  skipIfNewValExists?: Boolean
}

export interface AlterEventTrigStmt {
  trigname?: string
  tgenabled?: GoByte
}

export interface AlterExtensionContentsStmt {
  extname?: string
  action?: GoInt
  objtype?: ObjectType
  object?: Node
}

export interface AlterExtensionStmt {
  extname?: string
  options?: Node[]
}

export interface AlterFdwStmt {
  fdwname?: string
  funcOptions?: Node[]
  options?: Node[]
}

export interface AlterForeignServerStmt {
  servername?: string
  version?: string
  options?: Node[]
  hasVersion?: Boolean
}

export interface AlterFunctionStmt {
  func?: ObjectWithArgs
  actions?: Node[]
}

export interface AlterObjectDependsStmt {
  objectType?: ObjectType
  relation?: RangeVar
  object?: Node
  extname?: Node
}

export interface AlterObjectSchemaStmt {
  objectType?: ObjectType
  relation?: RangeVar
  object?: Node
  newschema?: string
  missingOk?: Boolean
}

export interface AlterOpFamilyStmt {
  opfamilyname?: Node[]
  amname?: string
  isDrop?: Boolean
  items?: Node[]
}

export interface AlterOperatorStmt {
  opername?: ObjectWithArgs
  options?: Node[]
}

export interface AlterOwnerStmt {
  objectType?: ObjectType
  relation?: RangeVar
  object?: Node
  newowner?: RoleSpec
}

export interface AlterPolicyStmt {
  policyName?: string
  table?: RangeVar
  roles?: Node[]
  qual?: Node
  withCheck?: Node
}

export interface AlterPublicationStmt {
  pubname?: string
  options?: Node[]
  tables?: Node[]
  forAllTables?: Boolean
  tableAction?: DefElemAction
}

export interface AlterRoleSetStmt {
  role?: RoleSpec
  database?: string
  setstmt?: VariableSetStmt
}

export interface AlterRoleStmt {
  role?: RoleSpec
  options?: Node[]
  action?: GoInt
}

export interface AlterSeqStmt {
  sequence?: RangeVar
  options?: Node[]
  forIdentity?: Boolean
  missingOk?: Boolean
}

export interface AlterSubscriptionStmt {
  kind?: AlterSubscriptionType
  subname?: string
  conninfo?: string
  publication?: Node[]
  options?: Node[]
}

export type AlterSubscriptionType = 'ALTER_SUBSCRIPTION_OPTIONS'|'ALTER_SUBSCRIPTION_CONNECTION'|'ALTER_SUBSCRIPTION_PUBLICATION'|'ALTER_SUBSCRIPTION_REFRESH'|'ALTER_SUBSCRIPTION_ENABLED'


export interface AlterSystemStmt {
  setstmt?: VariableSetStmt
}

export interface AlterTableCmd {
  subtype?: AlterTableType
  name?: string
  newowner?: RoleSpec
  def?: Node
  behavior?: DropBehavior
  missingOk?: Boolean
}

export interface AlterTableMoveAllStmt {
  origTablespacename?: string
  objtype?: ObjectType
  roles?: Node[]
  newTablespacename?: string
  nowait?: Boolean
}

export interface AlterTableSpaceOptionsStmt {
  tablespacename?: string
  options?: Node[]
  isReset?: Boolean
}

export interface AlterTableStmt {
  relation?: RangeVar
  cmds?: Node[]
  relkind?: ObjectType
  missingOk?: Boolean
}

export type AlterTableType = 'AT_AddColumn'|'AT_AddColumnRecurse'|'AT_AddColumnToView'|'AT_ColumnDefault'|'AT_DropNotNull'|'AT_SetNotNull'|'AT_SetStatistics'|'AT_SetOptions'|'AT_ResetOptions'|'AT_SetStorage'|'AT_DropColumn'|'AT_DropColumnRecurse'|'AT_AddIndex'|'AT_ReAddIndex'|'AT_AddConstraint'|'AT_AddConstraintRecurse'|'AT_ReAddConstraint'|'AT_AlterConstraint'|'AT_ValidateConstraint'|'AT_ValidateConstraintRecurse'|'AT_ProcessedConstraint'|'AT_AddIndexConstraint'|'AT_DropConstraint'|'AT_DropConstraintRecurse'|'AT_ReAddComment'|'AT_AlterColumnType'|'AT_AlterColumnGenericOptions'|'AT_ChangeOwner'|'AT_ClusterOn'|'AT_DropCluster'|'AT_SetLogged'|'AT_SetUnLogged'|'AT_AddOids'|'AT_AddOidsRecurse'|'AT_DropOids'|'AT_SetTableSpace'|'AT_SetRelOptions'|'AT_ResetRelOptions'|'AT_ReplaceRelOptions'|'AT_EnableTrig'|'AT_EnableAlwaysTrig'|'AT_EnableReplicaTrig'|'AT_DisableTrig'|'AT_EnableTrigAll'|'AT_DisableTrigAll'|'AT_EnableTrigUser'|'AT_DisableTrigUser'|'AT_EnableRule'|'AT_EnableAlwaysRule'|'AT_EnableReplicaRule'|'AT_DisableRule'|'AT_AddInherit'|'AT_DropInherit'|'AT_AddOf'|'AT_DropOf'|'AT_ReplicaIdentity'|'AT_EnableRowSecurity'|'AT_DisableRowSecurity'|'AT_ForceRowSecurity'|'AT_NoForceRowSecurity'|'AT_GenericOptions'|'AT_AttachPartition'|'AT_DetachPartition'|'AT_AddIdentity'|'AT_SetIdentity'|'AT_DropIdentity'


export type AlterTSConfigType = 'ALTER_TSCONFIG_ADD_MAPPING'|'ALTER_TSCONFIG_ALTER_MAPPING_FOR_TOKEN'|'ALTER_TSCONFIG_REPLACE_DICT'|'ALTER_TSCONFIG_REPLACE_DICT_FOR_TOKEN'|'ALTER_TSCONFIG_DROP_MAPPING'


export interface AlterTSConfigurationStmt {
  kind?: AlterTSConfigType
  cfgname?: Node[]
  tokentype?: Node[]
  dicts?: Node[]
  override?: Boolean
  replace?: Boolean
  missingOk?: Boolean
}

export interface AlterTSDictionaryStmt {
  dictname?: Node[]
  options?: Node[]
}

export interface AlterUserMappingStmt {
  user?: RoleSpec
  servername?: string
  options?: Node[]
}

export interface AlternativeSubPlan {
  xpr?: Node
  subplans?: Node[]
}

export interface ArrayCoerceExpr {
  xpr?: Node
  arg?: Node
  elemfuncid?: Oid
  resulttype?: Oid
  resulttypmod?: GoInt32
  resultcollid?: Oid
  isExplicit?: Boolean
  coerceformat?: CoercionForm
  location?: GoInt
}

export interface ArrayExpr {
  xpr?: Node
  arrayTypeid?: Oid
  arrayCollid?: Oid
  elementTypeid?: Oid
  elements?: Node[]
  multidims?: Boolean
  location?: GoInt
}

export interface ArrayRef {
  xpr?: Node
  refarraytype?: Oid
  refelemtype?: Oid
  reftypmod?: GoInt32
  refcollid?: Oid
  refupperindexpr?: Node[]
  reflowerindexpr?: Node[]
  refexpr?: Node
  refassgnexpr?: Node
}

export interface BitString {
  str?: string
}

export interface BlockIdData {
  biHi?: GoUint16
  biLo?: GoUint16
}

export interface BoolExpr {
  xpr?: Node
  boolop?: BoolExprType
  args?: Node[]
  location?: GoInt
}

export type BoolExprType = 'AND_EXPR'|'OR_EXPR'


export type BoolTestType = 'IS_TRUE'|'IS_NOT_TRUE'


export interface BooleanTest {
  xpr?: Node
  arg?: Node
  booltesttype?: BoolTestType
  location?: GoInt
}

export interface CaseExpr {
  xpr?: Node
  casetype?: Oid
  casecollid?: Oid
  arg?: Node
  args?: Node[]
  defresult?: Node
  location?: GoInt
}

export interface CaseTestExpr {
  xpr?: Node
  typeId?: Oid
  typeMod?: GoInt32
  collation?: Oid
}

export interface CaseWhen {
  xpr?: Node
  expr?: Node
  result?: Node
  location?: GoInt
}

export interface CheckPointStmt {

}

export interface ClosePortalStmt {
  portalname?: string
}

export interface ClusterStmt {
  relation?: RangeVar
  indexname?: string
  verbose?: Boolean
}

export type CmdType = 'CMD_UNKNOWN'|'CMD_SELECT'|'CMD_UPDATE'|'CMD_INSERT'|'CMD_DELETE'|'CMD_UTILITY'|'CMD_NOTHING'


export interface CoalesceExpr {
  xpr?: Node
  coalescetype?: Oid
  coalescecollid?: Oid
  args?: Node[]
  location?: GoInt
}

export interface CoerceToDomain {
  xpr?: Node
  arg?: Node
  resulttype?: Oid
  resulttypmod?: GoInt32
  resultcollid?: Oid
  coercionformat?: CoercionForm
  location?: GoInt
}

export interface CoerceToDomainValue {
  xpr?: Node
  typeId?: Oid
  typeMod?: GoInt32
  collation?: Oid
  location?: GoInt
}

export interface CoerceViaIO {
  xpr?: Node
  arg?: Node
  resulttype?: Oid
  resultcollid?: Oid
  coerceformat?: CoercionForm
  location?: GoInt
}

export type CoercionContext = 'COERCION_IMPLICIT'|'COERCION_ASSIGNMENT'|'COERCION_EXPLICIT'


export type CoercionForm = 'COERCE_EXPLICIT_CALL'|'COERCE_EXPLICIT_CAST'|'COERCE_IMPLICIT_CAST'


export interface CollateClause {
  arg?: Node
  collname?: Node[]
  location?: GoInt
}

export interface CollateExpr {
  xpr?: Node
  arg?: Node
  collOid?: Oid
  location?: GoInt
}

export interface ColumnDef {
  colname?: string
  typeName?: TypeName
  inhcount?: GoInt
  isLocal?: Boolean
  isNotNull?: Boolean
  isFromType?: Boolean
  isFromParent?: Boolean
  storage?: GoByte
  rawDefault?: Node
  cookedDefault?: Node
  identity?: GoByte
  collClause?: CollateClause
  collOid?: Oid
  constraints?: Node[]
  fdwoptions?: Node[]
  location?: GoInt
}

export interface ColumnRef {
  fields?: Node[]
  location?: GoInt
}

export interface CommentStmt {
  objtype?: ObjectType
  object?: Node
  comment?: string
}

export interface CommonTableExpr {
  ctename?: string
  aliascolnames?: Node[]
  ctequery?: Node
  location?: GoInt
  cterecursive?: Boolean
  cterefcount?: GoInt
  ctecolnames?: Node[]
  ctecoltypes?: Node[]
  ctecoltypmods?: Node[]
  ctecolcollations?: Node[]
}

export interface CompositeTypeStmt {
  typevar?: RangeVar
  coldeflist?: Node[]
}

export interface Const {
  xpr?: Node
  consttype?: Oid
  consttypmod?: GoInt32
  constcollid?: Oid
  constlen?: GoInt
  constvalue?: Datum
  constisnull?: Boolean
  constbyval?: Boolean
  location?: GoInt
}

export type ConstrType = 'CONSTR_NULL'|'CONSTR_NOTNULL'|'CONSTR_DEFAULT'|'CONSTR_IDENTITY'|'CONSTR_CHECK'|'CONSTR_PRIMARY'|'CONSTR_UNIQUE'|'CONSTR_EXCLUSION'|'CONSTR_FOREIGN'|'CONSTR_ATTR_DEFERRABLE'|'CONSTR_ATTR_NOT_DEFERRABLE'|'CONSTR_ATTR_DEFERRED'|'CONSTR_ATTR_IMMEDIATE'


export interface Constraint {
  contype?: ConstrType
  conname?: string
  deferrable?: Boolean
  initdeferred?: Boolean
  location?: GoInt
  isNoInherit?: Boolean
  rawExpr?: Node
  cookedExpr?: string
  generatedWhen?: GoByte
  keys?: Node[]
  exclusions?: Node[]
  options?: Node[]
  indexname?: string
  indexspace?: string
  accessMethod?: string
  whereClause?: Node
  pktable?: RangeVar
  fkAttrs?: Node[]
  pkAttrs?: Node[]
  fkMatchtype?: GoByte
  fkUpdAction?: GoByte
  fkDelAction?: GoByte
  oldConpfeqop?: Node[]
  oldPktableOid?: Oid
  skipValidation?: Boolean
  initiallyValid?: Boolean
}

export interface ConstraintsSetStmt {
  constraints?: Node[]
  deferred?: Boolean
}

export type Context = 'Context_None'|'Context_True'|'Context_False'|'Context_Select'|'Context_Update'|'Context_AConst'|'Context_FuncCall'|'Context_TypeName'|'Context_Operator'


export interface ConvertRowtypeExpr {
  xpr?: Node
  arg?: Node
  resulttype?: Oid
  convertformat?: CoercionForm
  location?: GoInt
}

export interface CopyStmt {
  relation?: RangeVar
  query?: Node
  attlist?: Node[]
  isFrom?: Boolean
  isProgram?: Boolean
  filename?: string
  options?: Node[]
}

export interface CreateAmStmt {
  amname?: string
  handlerName?: Node[]
  amtype?: GoByte
}

export interface CreateCastStmt {
  sourcetype?: TypeName
  targettype?: TypeName
  func?: ObjectWithArgs
  context?: CoercionContext
  inout?: Boolean
}

export interface CreateConversionStmt {
  conversionName?: Node[]
  forEncodingName?: string
  toEncodingName?: string
  funcName?: Node[]
  def?: Boolean
}

export interface CreateDomainStmt {
  domainname?: Node[]
  typeName?: TypeName
  collClause?: CollateClause
  constraints?: Node[]
}

export interface CreateEnumStmt {
  typeName?: Node[]
  vals?: Node[]
}

export interface CreateEventTrigStmt {
  trigname?: string
  eventname?: string
  whenclause?: Node[]
  funcname?: Node[]
}

export interface CreateExtensionStmt {
  extname?: string
  ifNotExists?: Boolean
  options?: Node[]
}

export interface CreateFdwStmt {
  fdwname?: string
  funcOptions?: Node[]
  options?: Node[]
}

export interface CreateForeignServerStmt {
  servername?: string
  servertype?: string
  version?: string
  fdwname?: string
  ifNotExists?: Boolean
  options?: Node[]
}

export interface CreateForeignTableStmt {
  base?: CreateStmt
  servername?: string
  options?: Node[]
}

export interface CreateFunctionStmt {
  replace?: Boolean
  funcname?: Node[]
  parameters?: Node[]
  returnType?: TypeName
  options?: Node[]
  withClause?: Node[]
}

export interface CreateOpClassItem {
  itemtype?: GoInt
  name?: ObjectWithArgs
  number?: GoInt
  orderFamily?: Node[]
  classArgs?: Node[]
  storedtype?: TypeName
}

export interface CreateOpClassStmt {
  opclassname?: Node[]
  opfamilyname?: Node[]
  amname?: string
  datatype?: TypeName
  items?: Node[]
  isDefault?: Boolean
}

export interface CreateOpFamilyStmt {
  opfamilyname?: Node[]
  amname?: string
}

export interface CreatePLangStmt {
  replace?: Boolean
  plname?: string
  plhandler?: Node[]
  plinline?: Node[]
  plvalidator?: Node[]
  pltrusted?: Boolean
}

export interface CreatePolicyStmt {
  policyName?: string
  table?: RangeVar
  cmdName?: string
  permissive?: Boolean
  roles?: Node[]
  qual?: Node
  withCheck?: Node
}

export interface CreatePublicationStmt {
  pubname?: string
  options?: Node[]
  tables?: Node[]
  forAllTables?: Boolean
}

export interface CreateRangeStmt {
  typeName?: Node[]
  params?: Node[]
}

export interface CreateRoleStmt {
  stmtType?: RoleStmtType
  role?: string
  options?: Node[]
}

export interface CreateSchemaStmt {
  schemaname?: string
  authrole?: RoleSpec
  schemaElts?: Node[]
  ifNotExists?: Boolean
}

export interface CreateSeqStmt {
  sequence?: RangeVar
  options?: Node[]
  ownerId?: Oid
  forIdentity?: Boolean
  ifNotExists?: Boolean
}

export interface CreateStatsStmt {
  defnames?: Node[]
  statTypes?: Node[]
  exprs?: Node[]
  relations?: Node[]
  ifNotExists?: Boolean
}

export interface CreateStmt {
  relation?: RangeVar
  tableElts?: Node[]
  inhRelations?: Node[]
  partbound?: PartitionBoundSpec
  partspec?: PartitionSpec
  ofTypename?: TypeName
  constraints?: Node[]
  options?: Node[]
  oncommit?: OnCommitAction
  tablespacename?: string
  ifNotExists?: Boolean
}

export interface CreateSubscriptionStmt {
  subname?: string
  conninfo?: string
  publication?: Node[]
  options?: Node[]
}

export interface CreateTableAsStmt {
  query?: Node
  into?: IntoClause
  relkind?: ObjectType
  isSelectInto?: Boolean
  ifNotExists?: Boolean
}

export interface CreateTableSpaceStmt {
  tablespacename?: string
  owner?: RoleSpec
  location?: string
  options?: Node[]
}

export interface CreateTransformStmt {
  replace?: Boolean
  typeName?: TypeName
  lang?: string
  fromsql?: ObjectWithArgs
  tosql?: ObjectWithArgs
}

export interface CreateTrigStmt {
  trigname?: string
  relation?: RangeVar
  funcname?: Node[]
  args?: Node[]
  row?: Boolean
  timing?: GoInt16
  events?: GoInt16
  columns?: Node[]
  whenClause?: Node
  isconstraint?: Boolean
  transitionRels?: Node[]
  deferrable?: Boolean
  initdeferred?: Boolean
  constrrel?: RangeVar
}

export interface CreateUserMappingStmt {
  user?: RoleSpec
  servername?: string
  ifNotExists?: Boolean
  options?: Node[]
}

export interface CreatedbStmt {
  dbname?: string
  options?: Node[]
}

export interface CurrentOfExpr {
  xpr?: Node
  cvarno?: Index
  cursorName?: string
  cursorParam?: GoInt
}

export interface DeallocateStmt {
  name?: string
}

export interface DeclareCursorStmt {
  portalname?: string
  options?: GoInt
  query?: Node
}

export interface DefElem {
  defnamespace?: string
  defname?: string
  arg?: Node
  defaction?: DefElemAction
  location?: GoInt
}

export type DefElemAction = 'DEFELEM_UNSPEC'|'DEFELEM_SET'|'DEFELEM_ADD'|'DEFELEM_DROP'


export interface DefineStmt {
  kind?: ObjectType
  oldstyle?: Boolean
  defnames?: Node[]
  args?: Node[]
  definition?: Node[]
  ifNotExists?: Boolean
}

export interface DeleteStmt {
  relation?: RangeVar
  usingClause?: Node[]
  whereClause?: Node
  returningList?: Node[]
  withClause?: WithClause
}

export type DiscardMode = 'DISCARD_ALL'|'DISCARD_PLANS'|'DISCARD_SEQUENCES'|'DISCARD_TEMP'


export interface DiscardStmt {
  target?: DiscardMode
}

export interface DoStmt {
  args?: Node[]
}

export type DropBehavior = 'DROP_RESTRICT'|'DROP_CASCADE'


export interface DropOwnedStmt {
  roles?: Node[]
  behavior?: DropBehavior
}

export interface DropRoleStmt {
  roles?: Node[]
  missingOk?: Boolean
}

export interface DropStmt {
  objects?: Node[]
  removeType?: ObjectType
  behavior?: DropBehavior
  missingOk?: Boolean
  concurrent?: Boolean
}

export interface DropSubscriptionStmt {
  subname?: string
  missingOk?: Boolean
  behavior?: DropBehavior
}

export interface DropTableSpaceStmt {
  tablespacename?: string
  missingOk?: Boolean
}

export interface DropUserMappingStmt {
  user?: RoleSpec
  servername?: string
  missingOk?: Boolean
}

export interface DropdbStmt {
  dbname?: string
  missingOk?: Boolean
}

export interface ExecuteStmt {
  name?: string
  params?: Node[]
}

export interface ExplainStmt {
  query?: Node
  options?: Node[]
}

export interface Expr {

}

export type FetchDirection = 'FETCH_FORWARD'|'FETCH_BACKWARD'|'FETCH_ABSOLUTE'|'FETCH_RELATIVE'


export interface FetchStmt {
  direction?: FetchDirection
  howMany?: GoInt64
  portalname?: string
  ismove?: Boolean
}

export interface FieldSelect {
  xpr?: Node
  arg?: Node
  fieldnum?: AttrNumber
  resulttype?: Oid
  resulttypmod?: GoInt32
  resultcollid?: Oid
}

export interface FieldStore {
  xpr?: Node
  arg?: Node
  newvals?: Node[]
  fieldnums?: Node[]
  resulttype?: Oid
}

export interface Float {
  str?: string
}

export interface FromExpr {
  fromlist?: Node[]
  quals?: Node
}

export interface FuncCall {
  funcname?: Node[]
  args?: Node[]
  aggOrder?: Node[]
  aggFilter?: Node
  aggWithinGroup?: Boolean
  aggStar?: Boolean
  aggDistinct?: Boolean
  funcVariadic?: Boolean
  over?: WindowDef
  location?: GoInt
}

export interface FuncExpr {
  xpr?: Node
  funcid?: Oid
  funcresulttype?: Oid
  funcretset?: Boolean
  funcvariadic?: Boolean
  funcformat?: CoercionForm
  funccollid?: Oid
  inputcollid?: Oid
  args?: Node[]
  location?: GoInt
}

export interface FunctionParameter {
  name?: string
  argType?: TypeName
  mode?: FunctionParameterMode
  defexpr?: Node
}

export type FunctionParameterMode = 'FUNC_PARAM_IN'|'FUNC_PARAM_OUT'|'FUNC_PARAM_INOUT'|'FUNC_PARAM_VARIADIC'|'FUNC_PARAM_TABLE'


export type GrantObjectType = 'ACL_OBJECT_COLUMN'|'ACL_OBJECT_RELATION'|'ACL_OBJECT_SEQUENCE'|'ACL_OBJECT_DATABASE'|'ACL_OBJECT_DOMAIN'|'ACL_OBJECT_FDW'|'ACL_OBJECT_FOREIGN_SERVER'|'ACL_OBJECT_FUNCTION'|'ACL_OBJECT_LANGUAGE'|'ACL_OBJECT_LARGEOBJECT'|'ACL_OBJECT_NAMESPACE'|'ACL_OBJECT_TABLESPACE'|'ACL_OBJECT_TYPE'


export interface GrantRoleStmt {
  grantedRoles?: Node[]
  granteeRoles?: Node[]
  isGrant?: Boolean
  adminOpt?: Boolean
  grantor?: RoleSpec
  behavior?: DropBehavior
}

export interface GrantStmt {
  isGrant?: Boolean
  targtype?: GrantTargetType
  objtype?: GrantObjectType
  objects?: Node[]
  privileges?: Node[]
  grantees?: Node[]
  grantOption?: Boolean
  behavior?: DropBehavior
}

export type GrantTargetType = 'ACL_TARGET_OBJECT'|'ACL_TARGET_ALL_IN_SCHEMA'|'ACL_TARGET_DEFAULTS'


export interface GroupingFunc {
  xpr?: Node
  args?: Node[]
  refs?: Node[]
  cols?: Node[]
  agglevelsup?: Index
  location?: GoInt
}

export interface GroupingSet {
  kind?: GroupingSetKind
  content?: Node[]
  location?: GoInt
}

export type GroupingSetKind = 'GROUPING_SET_EMPTY'|'GROUPING_SET_SIMPLE'|'GROUPING_SET_ROLLUP'|'GROUPING_SET_CUBE'|'GROUPING_SET_SETS'


export interface ImportForeignSchemaStmt {
  serverName?: string
  remoteSchema?: string
  localSchema?: string
  listType?: ImportForeignSchemaType
  tableList?: Node[]
  options?: Node[]
}

export type ImportForeignSchemaType = 'FDW_IMPORT_SCHEMA_ALL'|'FDW_IMPORT_SCHEMA_LIMIT_TO'|'FDW_IMPORT_SCHEMA_EXCEPT'


export interface IndexElem {
  name?: string
  expr?: Node
  indexcolname?: string
  collation?: Node[]
  opclass?: Node[]
  ordering?: SortByDir
  nullsOrdering?: SortByNulls
}

export interface IndexStmt {
  idxname?: string
  relation?: RangeVar
  accessMethod?: string
  tableSpace?: string
  indexParams?: Node[]
  options?: Node[]
  whereClause?: Node
  excludeOpNames?: Node[]
  idxcomment?: string
  indexOid?: Oid
  oldNode?: Oid
  unique?: Boolean
  primary?: Boolean
  isconstraint?: Boolean
  deferrable?: Boolean
  initdeferred?: Boolean
  transformed?: Boolean
  concurrent?: Boolean
  ifNotExists?: Boolean
}

export interface InferClause {
  indexElems?: Node[]
  whereClause?: Node
  conname?: string
  location?: GoInt
}

export interface InferenceElem {
  xpr?: Node
  expr?: Node
  infercollid?: Oid
  inferopclass?: Oid
}

export interface InlineCodeBlock {
  sourceText?: string
  langOid?: Oid
  langIsTrusted?: Boolean
}

export interface InsertStmt {
  relation?: RangeVar
  cols?: Node[]
  selectStmt?: Node
  onConflictClause?: OnConflictClause
  returningList?: Node[]
  withClause?: WithClause
  override?: OverridingKind
}

export interface Integer {
  ival?: GoInt64
}

export interface IntoClause {
  rel?: RangeVar
  colNames?: Node[]
  options?: Node[]
  onCommit?: OnCommitAction
  tableSpaceName?: string
  viewQuery?: Node
  skipData?: Boolean
}

export interface JoinExpr {
  jointype?: JoinType
  isNatural?: Boolean
  larg?: Node
  rarg?: Node
  usingClause?: Node[]
  quals?: Node
  alias?: Alias
  rtindex?: GoInt
}

export type JoinType = 'JOIN_INNER'|'JOIN_LEFT'|'JOIN_FULL'|'JOIN_RIGHT'|'JOIN_SEMI'|'JOIN_ANTI'|'JOIN_UNIQUE_OUTER'|'JOIN_UNIQUE_INNER'


export type LimitOption = 'LIMIT_OPTION_DEFAULT'|'LIMIT_OPTION_COUNT'


export interface List {
  items?: Node[]
}

export interface ListenStmt {
  conditionname?: string
}

export interface LoadStmt {
  filename?: string
}

export type LockClauseStrength = 'LCS_NONE'|'LCS_FORKEYSHARE'|'LCS_FORSHARE'|'LCS_FORNOKEYUPDATE'|'LCS_FORUPDATE'


export interface LockStmt {
  relations?: Node[]
  mode?: GoInt
  nowait?: Boolean
}

export type LockWaitPolicy = 'LockWaitBlock'|'LockWaitSkip'|'LockWaitError'


export interface LockingClause {
  lockedRels?: Node[]
  strength?: LockClauseStrength
  waitPolicy?: LockWaitPolicy
}

export interface MinMaxExpr {
  xpr?: Node
  minmaxtype?: Oid
  minmaxcollid?: Oid
  inputcollid?: Oid
  op?: MinMaxOp
  args?: Node[]
  location?: GoInt
}

export type MinMaxOp = 'IS_GREATEST'|'IS_LEAST'


export interface MultiAssignRef {
  source?: Node
  colno?: GoInt
  ncolumns?: GoInt
}

export interface NamedArgExpr {
  xpr?: Node
  arg?: Node
  name?: string
  argnumber?: GoInt
  location?: GoInt
}

export interface NextValueExpr {
  xpr?: Node
  seqid?: Oid
  typeId?: Oid
}

export interface FingerprintHashContext {
  hash?: GoHash
}

export interface NotifyStmt {
  conditionname?: string
  payload?: string
}

export interface Null {

}

export interface NullTest {
  xpr?: Node
  arg?: Node
  nulltesttype?: NullTestType
  argisrow?: Boolean
  location?: GoInt
}

export type NullTestType = 'IS_NULL'|'IS_NOT_NULL'


export type ObjectType = 'OBJECT_ACCESS_METHOD'|'OBJECT_AGGREGATE'|'OBJECT_AMOP'|'OBJECT_AMPROC'|'OBJECT_ATTRIBUTE'|'OBJECT_CAST'|'OBJECT_COLUMN'|'OBJECT_COLLATION'|'OBJECT_CONVERSION'|'OBJECT_DATABASE'|'OBJECT_DEFAULT'|'OBJECT_DEFACL'|'OBJECT_DOMAIN'|'OBJECT_DOMCONSTRAINT'|'OBJECT_EVENT_TRIGGER'|'OBJECT_EXTENSION'|'OBJECT_FDW'|'OBJECT_FOREIGN_SERVER'|'OBJECT_FOREIGN_TABLE'|'OBJECT_FUNCTION'|'OBJECT_INDEX'|'OBJECT_LANGUAGE'|'OBJECT_LARGEOBJECT'|'OBJECT_MATVIEW'|'OBJECT_OPCLASS'|'OBJECT_OPERATOR'|'OBJECT_OPFAMILY'|'OBJECT_POLICY'|'OBJECT_PUBLICATION'|'OBJECT_PUBLICATION_REL'|'OBJECT_ROLE'|'OBJECT_RULE'|'OBJECT_SCHEMA'|'OBJECT_SEQUENCE'|'OBJECT_SUBSCRIPTION'|'OBJECT_STATISTIC_EXT'|'OBJECT_TABCONSTRAINT'|'OBJECT_TABLE'|'OBJECT_TABLESPACE'|'OBJECT_TRANSFORM'|'OBJECT_TRIGGER'|'OBJECT_TSCONFIGURATION'|'OBJECT_TSDICTIONARY'|'OBJECT_TSPARSER'|'OBJECT_TSTEMPLATE'|'OBJECT_TYPE'|'OBJECT_USER_MAPPING'|'OBJECT_VIEW'


export interface ObjectWithArgs {
  objname?: Node[]
  objargs?: Node[]
  argsUnspecified?: Boolean
}

export type OnCommitAction = 'ONCOMMIT_NOOP'|'ONCOMMIT_PRESERVE_ROWS'|'ONCOMMIT_DELETE_ROWS'|'ONCOMMIT_DROP'


export type OnConflictAction = 'ONCONFLICT_NONE'|'ONCONFLICT_NOTHING'|'ONCONFLICT_UPDATE'


export interface OnConflictClause {
  action?: OnConflictAction
  infer?: InferClause
  targetList?: Node[]
  whereClause?: Node
  location?: GoInt
}

export interface OnConflictExpr {
  action?: OnConflictAction
  arbiterElems?: Node[]
  arbiterWhere?: Node
  constraint?: Oid
  onConflictSet?: Node[]
  onConflictWhere?: Node
  exclRelIndex?: GoInt
  exclRelTlist?: Node[]
}

export interface OpExpr {
  xpr?: Node
  opno?: Oid
  opfuncid?: Oid
  opresulttype?: Oid
  opretset?: Boolean
  opcollid?: Oid
  inputcollid?: Oid
  args?: Node[]
  location?: GoInt
}

export type OverridingKind = 'OVERRIDING_NOT_SET'|'OVERRIDING_USER_VALUE'|'OVERRIDING_SYSTEM_VALUE'


export interface Param {
  xpr?: Node
  paramkind?: ParamKind
  paramid?: GoInt
  paramtype?: Oid
  paramtypmod?: GoInt32
  paramcollid?: Oid
  location?: GoInt
}

export interface ParamExecData {
  execPlan?: any
  value?: Datum
  isnull?: Boolean
}

export interface ParamExternData {
  value?: Datum
  isnull?: Boolean
  pflags?: GoUint16
  ptype?: Oid
}

export type ParamKind = 'PARAM_EXTERN'|'PARAM_EXEC'|'PARAM_SUBLINK'|'PARAM_MULTIEXPR'


export interface ParamListInfoData {
  paramFetchArg?: any
  parserSetupArg?: any
  numParams?: GoInt
  paramMask?: GoUint32[]
}

export interface ParamRef {
  number?: GoInt
  location?: GoInt
}

export interface PartitionBoundSpec {
  strategy?: GoByte
  listdatums?: Node[]
  lowerdatums?: Node[]
  upperdatums?: Node[]
  location?: GoInt
}

export interface PartitionCmd {
  name?: RangeVar
  bound?: PartitionBoundSpec
}

export interface PartitionElem {
  name?: string
  expr?: Node
  collation?: Node[]
  opclass?: Node[]
  location?: GoInt
}

export interface PartitionRangeDatum {
  kind?: PartitionRangeDatumKind
  value?: Node
  location?: GoInt
}

export type PartitionRangeDatumKind = 'PARTITION_RANGE_DATUM_MINVALUE'|'PARTITION_RANGE_DATUM_VALUE'|'PARTITION_RANGE_DATUM_MAXVALUE'


export interface PartitionSpec {
  strategy?: string
  partParams?: Node[]
  location?: GoInt
}

export interface PrepareStmt {
  name?: string
  argtypes?: Node[]
  query?: Node
}

export interface Query {
  commandType?: CmdType
  querySource?: QuerySource
  queryId?: GoUint32
  canSetTag?: Boolean
  utilityStmt?: Node
  resultRelation?: GoInt
  hasAggs?: Boolean
  hasWindowFuncs?: Boolean
  hasTargetSrfs?: Boolean
  hasSubLinks?: Boolean
  hasDistinctOn?: Boolean
  hasRecursive?: Boolean
  hasModifyingCte?: Boolean
  hasForUpdate?: Boolean
  hasRowSecurity?: Boolean
  cteList?: Node[]
  rtable?: Node[]
  jointree?: FromExpr
  targetList?: Node[]
  override?: OverridingKind
  onConflict?: OnConflictExpr
  returningList?: Node[]
  groupClause?: Node[]
  groupingSets?: Node[]
  havingQual?: Node
  windowClause?: Node[]
  distinctClause?: Node[]
  sortClause?: Node[]
  limitOffset?: Node
  limitCount?: Node
  rowMarks?: Node[]
  setOperations?: Node
  constraintDeps?: Node[]
  withCheckOptions?: Node[]
  stmtLocation?: GoInt
  stmtLen?: GoInt
}

export type QuerySource = 'QSRC_ORIGINAL'|'QSRC_PARSER'|'QSRC_INSTEAD_RULE'|'QSRC_QUAL_INSTEAD_RULE'|'QSRC_NON_INSTEAD_RULE'


export interface RangeFunction {
  lateral?: Boolean
  ordinality?: Boolean
  isRowsfrom?: Boolean
  functions?: Node[]
  alias?: Alias
  coldeflist?: Node[]
}

export interface RangeSubselect {
  lateral?: Boolean
  subquery?: Node
  alias?: Alias
}

export interface RangeTableFunc {
  lateral?: Boolean
  docexpr?: Node
  rowexpr?: Node
  namespaces?: Node[]
  columns?: Node[]
  alias?: Alias
  location?: GoInt
}

export interface RangeTableFuncCol {
  colname?: string
  typeName?: TypeName
  forOrdinality?: Boolean
  isNotNull?: Boolean
  colexpr?: Node
  coldefexpr?: Node
  location?: GoInt
}

export interface RangeTableSample {
  relation?: Node
  method?: Node[]
  args?: Node[]
  repeatable?: Node
  location?: GoInt
}

export interface RangeTblEntry {
  rtekind?: RTEKind
  relid?: Oid
  relkind?: GoByte
  tablesample?: TableSampleClause
  subquery?: Query
  securityBarrier?: Boolean
  jointype?: JoinType
  joinaliasvars?: Node[]
  functions?: Node[]
  funcordinality?: Boolean
  tablefunc?: TableFunc
  valuesLists?: Node[]
  ctename?: string
  ctelevelsup?: Index
  selfReference?: Boolean
  coltypes?: Node[]
  coltypmods?: Node[]
  colcollations?: Node[]
  enrname?: string
  enrtuples?: GoFloat64
  alias?: Alias
  eref?: Alias
  lateral?: Boolean
  inh?: Boolean
  inFromCl?: Boolean
  requiredPerms?: AclMode
  checkAsUser?: Oid
  selectedCols?: GoUint32[]
  insertedCols?: GoUint32[]
  updatedCols?: GoUint32[]
  securityQuals?: Node[]
}

export interface RangeTblFunction {
  funcexpr?: Node
  funccolcount?: GoInt
  funccolnames?: Node[]
  funccoltypes?: Node[]
  funccoltypmods?: Node[]
  funccolcollations?: Node[]
  funcparams?: GoUint32[]
}

export interface RangeTblRef {
  rtindex?: GoInt
}

export interface RangeVar {
  catalogname?: string
  schemaname?: string
  relname?: string
  inh?: Boolean
  relpersistence?: GoByte
  alias?: Alias
  location?: GoInt
}

export interface RawStmt {
  stmt?: Node
  stmtLocation?: GoInt
  stmtLen?: GoInt
}

export interface ReassignOwnedStmt {
  roles?: Node[]
  newrole?: RoleSpec
}

export interface RefreshMatViewStmt {
  concurrent?: Boolean
  skipData?: Boolean
  relation?: RangeVar
}

export type ReindexObjectType = 'REINDEX_OBJECT_INDEX'|'REINDEX_OBJECT_TABLE'|'REINDEX_OBJECT_SCHEMA'|'REINDEX_OBJECT_SYSTEM'|'REINDEX_OBJECT_DATABASE'


export interface ReindexStmt {
  kind?: ReindexObjectType
  relation?: RangeVar
  name?: string
  options?: GoInt
}

export interface RelabelType {
  xpr?: Node
  arg?: Node
  resulttype?: Oid
  resulttypmod?: GoInt32
  resultcollid?: Oid
  relabelformat?: CoercionForm
  location?: GoInt
}

export interface RenameStmt {
  renameType?: ObjectType
  relationType?: ObjectType
  relation?: RangeVar
  object?: Node
  subname?: string
  newname?: string
  behavior?: DropBehavior
  missingOk?: Boolean
}

export interface ReplicaIdentityStmt {
  identityType?: GoByte
  name?: string
}

export interface ResTarget {
  name?: string
  indirection?: Node[]
  val?: Node
  location?: GoInt
}

export interface RoleSpec {
  roletype?: RoleSpecType
  rolename?: string
  location?: GoInt
}

export type RoleSpecType = 'ROLESPEC_CSTRING'|'ROLESPEC_CURRENT_USER'|'ROLESPEC_SESSION_USER'|'ROLESPEC_PUBLIC'


export type RoleStmtType = 'ROLESTMT_ROLE'|'ROLESTMT_USER'|'ROLESTMT_GROUP'


export interface RowCompareExpr {
  xpr?: Node
  rctype?: RowCompareType
  opnos?: Node[]
  opfamilies?: Node[]
  inputcollids?: Node[]
  largs?: Node[]
  rargs?: Node[]
}

export type RowCompareType = 'ROWCOMPARE_LT'|'ROWCOMPARE_LE'|'ROWCOMPARE_EQ'|'ROWCOMPARE_GE'|'ROWCOMPARE_GT'|'ROWCOMPARE_NE'


export interface RowExpr {
  xpr?: Node
  args?: Node[]
  rowTypeid?: Oid
  rowFormat?: CoercionForm
  colnames?: Node[]
  location?: GoInt
}

export interface RowMarkClause {
  rti?: Index
  strength?: LockClauseStrength
  waitPolicy?: LockWaitPolicy
  pushedDown?: Boolean
}

export type RTEKind = 'RTE_RELATION'|'RTE_SUBQUERY'|'RTE_JOIN'|'RTE_FUNCTION'|'RTE_TABLEFUNC'|'RTE_VALUES'|'RTE_CTE'|'RTE_NAMEDTUPLESTORE'


export interface RuleStmt {
  relation?: RangeVar
  rulename?: string
  whereClause?: Node
  event?: CmdType
  instead?: Boolean
  actions?: Node[]
  replace?: Boolean
}

export interface ScalarArrayOpExpr {
  xpr?: Node
  opno?: Oid
  opfuncid?: Oid
  useOr?: Boolean
  inputcollid?: Oid
  args?: Node[]
  location?: GoInt
}

export type ScanDirection = 'BackwardScanDirection'|'NoMovementScanDirection'|'ForwardScanDirection'


export interface SecLabelStmt {
  objtype?: ObjectType
  object?: Node
  provider?: string
  label?: string
}

export interface SelectStmt {
  distinctClause?: Node[]
  intoClause?: IntoClause
  targetList?: Node[]
  fromClause?: Node[]
  whereClause?: Node
  groupClause?: Node[]
  havingClause?: Node
  windowClause?: Node[]
  valuesLists?: Node[][]
  sortClause?: Node[]
  limitOption?: LimitOption
  limitOffset?: Node
  limitCount?: Node
  lockingClause?: Node[]
  withClause?: WithClause
  op?: SetOperation
  all?: Boolean
  larg?: SelectStmt
  rarg?: SelectStmt
}

export type SetOpCmd = 'SETOPCMD_INTERSECT'|'SETOPCMD_INTERSECT_ALL'|'SETOPCMD_EXCEPT'|'SETOPCMD_EXCEPT_ALL'


export type SetOpStrategy = 'SETOP_SORTED'|'SETOP_HASHED'


export type SetOperation = 'SETOP_NONE'|'SETOP_UNION'|'SETOP_INTERSECT'|'SETOP_EXCEPT'


export interface SetOperationStmt {
  op?: SetOperation
  all?: Boolean
  larg?: Node
  rarg?: Node
  colTypes?: Node[]
  colTypmods?: Node[]
  colCollations?: Node[]
  groupClauses?: Node[]
}

export interface SetToDefault {
  xpr?: Node
  typeId?: Oid
  typeMod?: GoInt32
  collation?: Oid
  location?: GoInt
}

export interface SortBy {
  node?: Node
  sortbyDir?: SortByDir
  sortbyNulls?: SortByNulls
  useOp?: Node[]
  location?: GoInt
}

export type SortByDir = 'SORTBY_DEFAULT'|'SORTBY_ASC'|'SORTBY_DESC'|'SORTBY_USING'


export type SortByNulls = 'SORTBY_NULLS_DEFAULT'|'SORTBY_NULLS_FIRST'|'SORTBY_NULLS_LAST'


export interface SortGroupClause {
  tleSortGroupRef?: Index
  eqop?: Oid
  sortop?: Oid
  nullsFirst?: Boolean
  hashable?: Boolean
}

export interface SQLValueFunction {
  xpr?: Node
  op?: SQLValueFunctionOp
  type?: Oid
  typmod?: GoInt32
  location?: GoInt
}

export type SQLValueFunctionOp = 'SVFOP_CURRENT_DATE'|'SVFOP_CURRENT_TIME'|'SVFOP_CURRENT_TIME_N'|'SVFOP_CURRENT_TIMESTAMP'|'SVFOP_CURRENT_TIMESTAMP_N'|'SVFOP_LOCALTIME'|'SVFOP_LOCALTIME_N'|'SVFOP_LOCALTIMESTAMP'|'SVFOP_LOCALTIMESTAMP_N'|'SVFOP_CURRENT_ROLE'|'SVFOP_CURRENT_USER'|'SVFOP_USER'|'SVFOP_SESSION_USER'|'SVFOP_CURRENT_CATALOG'|'SVFOP_CURRENT_SCHEMA'


export type StmtType = 'Ack'|'DDL'|'RowsAffected'|'Rows'|'CopyIn'|'Unknown'


export interface String {
  str?: string
}

export interface SubLink {
  xpr?: Node
  subLinkType?: SubLinkType
  subLinkId?: GoInt
  testexpr?: Node
  operName?: Node[]
  subselect?: Node
  location?: GoInt
}

export type SubLinkType = 'EXISTS_SUBLINK'|'ALL_SUBLINK'|'ANY_SUBLINK'|'ROWCOMPARE_SUBLINK'|'EXPR_SUBLINK'|'MULTIEXPR_SUBLINK'|'ARRAY_SUBLINK'|'CTE_SUBLINK'


export interface SubPlan {
  xpr?: Node
  subLinkType?: SubLinkType
  testexpr?: Node
  paramIds?: Node[]
  planId?: GoInt
  planName?: string
  firstColType?: Oid
  firstColTypmod?: GoInt32
  firstColCollation?: Oid
  useHashTable?: Boolean
  unknownEqFalse?: Boolean
  parallelSafe?: Boolean
  setParam?: Node[]
  parParam?: Node[]
  args?: Node[]
  startupCost?: Cost
  perCallCost?: Cost
}

export interface SyntaxTree {
  statements?: Node[]
  query?: string
}

export interface TableFunc {
  nsUris?: Node[]
  nsNames?: Node[]
  docexpr?: Node
  rowexpr?: Node
  colnames?: Node[]
  coltypes?: Node[]
  coltypmods?: Node[]
  colcollations?: Node[]
  colexprs?: Node[]
  coldefexprs?: Node[]
  notnulls?: GoUint32[]
  ordinalitycol?: GoInt
  location?: GoInt
}

export interface TableLikeClause {
  relation?: RangeVar
  options?: GoUint32
}

export type TableLikeOption = 'CREATE_TABLE_LIKE_DEFAULTS'|'CREATE_TABLE_LIKE_CONSTRAINTS'|'CREATE_TABLE_LIKE_IDENTITY'|'CREATE_TABLE_LIKE_INDEXES'|'CREATE_TABLE_LIKE_STORAGE'|'CREATE_TABLE_LIKE_COMMENTS'|'CREATE_TABLE_LIKE_ALL'


export interface TableSampleClause {
  tsmhandler?: Oid
  args?: Node[]
  repeatable?: Node
}

export interface TargetEntry {
  xpr?: Node
  expr?: Node
  resno?: AttrNumber
  resname?: string
  ressortgroupref?: Index
  resorigtbl?: Oid
  resorigcol?: AttrNumber
  resjunk?: Boolean
}

export interface TransactionStmt {
  kind?: TransactionStmtKind
  options?: Node[]
  gid?: string
}

export type TransactionStmtKind = 'TRANS_STMT_BEGIN'|'TRANS_STMT_START'|'TRANS_STMT_COMMIT'|'TRANS_STMT_ROLLBACK'|'TRANS_STMT_SAVEPOINT'|'TRANS_STMT_RELEASE'|'TRANS_STMT_ROLLBACK_TO'|'TRANS_STMT_PREPARE'|'TRANS_STMT_COMMIT_PREPARED'|'TRANS_STMT_ROLLBACK_PREPARED'


export interface TriggerTransition {
  name?: string
  isNew?: Boolean
  isTable?: Boolean
}

export interface TruncateStmt {
  relations?: Node[]
  restartSeqs?: Boolean
  behavior?: DropBehavior
}

export interface TypeCast {
  arg?: Node
  typeName?: TypeName
  location?: GoInt
}

export interface TypeName {
  names?: Node[]
  typeOid?: Oid
  setof?: Boolean
  pctType?: Boolean
  typmods?: Node[]
  typemod?: GoInt32
  arrayBounds?: Node[]
  location?: GoInt
}

export interface UnlistenStmt {
  conditionname?: string
}

export interface UpdateStmt {
  relation?: RangeVar
  targetList?: Node[]
  whereClause?: Node
  fromClause?: Node[]
  returningList?: Node[]
  withClause?: WithClause
}

export interface DeparseTest {
  query?: string
  expected?: string
  expectedParseError?: string
  expectedCompileError?: string
}

export type VacuumOption = 'VACOPT_VACUUM'|'VACOPT_ANALYZE'|'VACOPT_VERBOSE'|'VACOPT_FREEZE'|'VACOPT_FULL'|'VACOPT_NOWAIT'|'VACOPT_SKIPTOAST'|'VACOPT_DISABLE_PAGE_SKIPPING'


export interface VacuumStmt {
  options?: GoInt
  relation?: RangeVar
  vaCols?: Node[]
}

export interface Var {
  xpr?: Node
  varno?: Index
  varattno?: AttrNumber
  vartype?: Oid
  vartypmod?: GoInt32
  varcollid?: Oid
  varlevelsup?: Index
  varnoold?: Index
  varoattno?: AttrNumber
  location?: GoInt
}

export interface varattexternal {
  vaRawsize?: GoInt32
  vaExtsize?: GoInt32
  vaValueid?: Oid
  vaToastrelid?: Oid
}

export type VariableSetKind = 'VAR_SET_VALUE'|'VAR_SET_DEFAULT'|'VAR_SET_CURRENT'|'VAR_SET_MULTI'|'VAR_RESET'|'VAR_RESET_ALL'


export interface VariableSetStmt {
  kind?: VariableSetKind
  name?: string
  args?: Node[]
  isLocal?: Boolean
}

export interface VariableShowStmt {
  name?: string
}

export type VartagExternal = 'VARTAG_INDIRECT'|'VARTAG_EXPANDED_RO'|'VARTAG_EXPANDED_RW'|'VARTAG_ONDISK'


export type ViewCheckOption = 'NO_CHECK_OPTION'|'LOCAL_CHECK_OPTION'|'CASCADED_CHECK_OPTION'


export interface ViewStmt {
  view?: RangeVar
  aliases?: Node[]
  query?: Node
  replace?: Boolean
  options?: Node[]
  withCheckOption?: ViewCheckOption
}

export type WCOKind = 'WCO_VIEW_CHECK'|'WCO_RLS_INSERT_CHECK'|'WCO_RLS_UPDATE_CHECK'|'WCO_RLS_CONFLICT_CHECK'


export interface WindowClause {
  name?: string
  refname?: string
  partitionClause?: Node[]
  orderClause?: Node[]
  frameOptions?: GoInt
  startOffset?: Node
  endOffset?: Node
  winref?: Index
  copiedOrder?: Boolean
}

export interface WindowDef {
  name?: string
  refname?: string
  partitionClause?: Node[]
  orderClause?: Node[]
  frameOptions?: GoInt
  startOffset?: Node
  endOffset?: Node
  location?: GoInt
}

export interface WindowFunc {
  xpr?: Node
  winfnoid?: Oid
  wintype?: Oid
  wincollid?: Oid
  inputcollid?: Oid
  args?: Node[]
  aggfilter?: Node
  winref?: Index
  winstar?: Boolean
  winagg?: Boolean
  location?: GoInt
}

export interface WithCheckOption {
  kind?: WCOKind
  relname?: string
  polname?: string
  qual?: Node
  cascaded?: Boolean
}

export interface WithClause {
  ctes?: Node[]
  recursive?: Boolean
  location?: GoInt
}

export interface XmlExpr {
  xpr?: Node
  op?: XmlExprOp
  name?: string
  namedArgs?: Node[]
  argNames?: Node[]
  args?: Node[]
  xmloption?: XmlOptionType
  type?: Oid
  typmod?: GoInt32
  location?: GoInt
}

export type XmlExprOp = 'IS_XMLCONCAT'|'IS_XMLELEMENT'|'IS_XMLFOREST'|'IS_XMLPARSE'|'IS_XMLPI'|'IS_XMLROOT'|'IS_XMLSERIALIZE'|'IS_DOCUMENT'


export type XmlOptionType = 'XMLOPTION_DOCUMENT'|'XMLOPTION_CONTENT'


export interface XmlSerialize {
  xmloption?: XmlOptionType
  expr?: Node
  typeName?: TypeName
  location?: GoInt
}
