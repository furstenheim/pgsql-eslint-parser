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
  elements: Node[]
  location: GoInt
}

export interface AConst {
  val: Node
  location: GoInt
}

export interface AExpr {
  kind: AExprKind
  name: Node[]
  lexpr: Node
  rexpr: Node
  location: GoInt
}

export enum AExprKind {
  AEXPROP = 0,
  AEXPROP_ANY = 1,
  AEXPROP_ALL = 2,
  AEXPRDISTINCT = 3,
  AEXPRNOT_DISTINCT = 4,
  AEXPRNULLIF = 5,
  AEXPROF = 6,
  AEXPRIN = 7,
  AEXPRLIKE = 8,
  AEXPRILIKE = 9,
  AEXPRSIMILAR = 10,
  AEXPRBETWEEN = 11,
  AEXPRNOT_BETWEEN = 12,
  AEXPRBETWEEN_SYM = 13,
  AEXPRNOT_BETWEEN_SYM = 14,
  AEXPRPAREN = 15,
}

export interface AIndices {
  isSlice: Boolean
  lidx: Node
  uidx: Node
}

export interface AIndirection {
  arg: Node
  indirection: Node[]
}

export interface AStar {

}

export interface AccessPriv {
  privName: string
  cols: Node[]
}

export enum AggSplit {
  AGGSPLITSIMPLE = 0,
  AGGSPLITINITIAL_SERIAL = 1,
  AGGSPLITFINAL_DESERIAL = 2,
}

export enum AggStrategy {
  AGGPLAIN = 0,
  AGGSORTED = 1,
  AGGHASHED = 2,
  AGGMIXED = 3,
}

export interface Aggref {
  xpr: Node
  aggfnoid: Oid
  aggtype: Oid
  aggcollid: Oid
  inputcollid: Oid
  aggtranstype: Oid
  aggargtypes: Node[]
  aggdirectargs: Node[]
  args: Node[]
  aggorder: Node[]
  aggdistinct: Node[]
  aggfilter: Node
  aggstar: Boolean
  aggvariadic: Boolean
  aggkind: GoByte
  agglevelsup: Index
  aggsplit: AggSplit
  location: GoInt
}

export interface Alias {
  aliasname: string
  colnames: Node[]
}

export interface AlterCollationStmt {
  collname: Node[]
}

export interface AlterDatabaseSetStmt {
  dbname: string
  setstmt: VariableSetStmt
}

export interface AlterDatabaseStmt {
  dbname: string
  options: Node[]
}

export interface AlterDefaultPrivilegesStmt {
  options: Node[]
  action: GrantStmt
}

export interface AlterDomainStmt {
  subtype: GoByte
  typeName: Node[]
  name: string
  def: Node
  behavior: DropBehavior
  missingOk: Boolean
}

export interface AlterEnumStmt {
  typeName: Node[]
  oldVal: string
  newVal: string
  newValNeighbor: string
  newValIsAfter: Boolean
  skipIfNewValExists: Boolean
}

export interface AlterEventTrigStmt {
  trigname: string
  tgenabled: GoByte
}

export interface AlterExtensionContentsStmt {
  extname: string
  action: GoInt
  objtype: ObjectType
  object: Node
}

export interface AlterExtensionStmt {
  extname: string
  options: Node[]
}

export interface AlterFdwStmt {
  fdwname: string
  funcOptions: Node[]
  options: Node[]
}

export interface AlterForeignServerStmt {
  servername: string
  version: string
  options: Node[]
  hasVersion: Boolean
}

export interface AlterFunctionStmt {
  func: ObjectWithArgs
  actions: Node[]
}

export interface AlterObjectDependsStmt {
  objectType: ObjectType
  relation: RangeVar
  object: Node
  extname: Node
}

export interface AlterObjectSchemaStmt {
  objectType: ObjectType
  relation: RangeVar
  object: Node
  newschema: string
  missingOk: Boolean
}

export interface AlterOpFamilyStmt {
  opfamilyname: Node[]
  amname: string
  isDrop: Boolean
  items: Node[]
}

export interface AlterOperatorStmt {
  opername: ObjectWithArgs
  options: Node[]
}

export interface AlterOwnerStmt {
  objectType: ObjectType
  relation: RangeVar
  object: Node
  newowner: RoleSpec
}

export interface AlterPolicyStmt {
  policyName: string
  table: RangeVar
  roles: Node[]
  qual: Node
  withCheck: Node
}

export interface AlterPublicationStmt {
  pubname: string
  options: Node[]
  tables: Node[]
  forAllTables: Boolean
  tableAction: DefElemAction
}

export interface AlterRoleSetStmt {
  role: RoleSpec
  database: string
  setstmt: VariableSetStmt
}

export interface AlterRoleStmt {
  role: RoleSpec
  options: Node[]
  action: GoInt
}

export interface AlterSeqStmt {
  sequence: RangeVar
  options: Node[]
  forIdentity: Boolean
  missingOk: Boolean
}

export interface AlterSubscriptionStmt {
  kind: AlterSubscriptionType
  subname: string
  conninfo: string
  publication: Node[]
  options: Node[]
}

export enum AlterSubscriptionType {
  ALTERSUBSCRIPTION_OPTIONS = 0,
  ALTERSUBSCRIPTION_CONNECTION = 1,
  ALTERSUBSCRIPTION_PUBLICATION = 2,
  ALTERSUBSCRIPTION_REFRESH = 3,
  ALTERSUBSCRIPTION_ENABLED = 4,
}

export interface AlterSystemStmt {
  setstmt: VariableSetStmt
}

export interface AlterTableCmd {
  subtype: AlterTableType
  name: string
  newowner: RoleSpec
  def: Node
  behavior: DropBehavior
  missingOk: Boolean
}

export interface AlterTableMoveAllStmt {
  origTablespacename: string
  objtype: ObjectType
  roles: Node[]
  newTablespacename: string
  nowait: Boolean
}

export interface AlterTableSpaceOptionsStmt {
  tablespacename: string
  options: Node[]
  isReset: Boolean
}

export interface AlterTableStmt {
  relation: RangeVar
  cmds: Node[]
  relkind: ObjectType
  missingOk: Boolean
}

export enum AlterTableType {
  ATAddColumn = 0,
  ATAddColumnRecurse = 1,
  ATAddColumnToView = 2,
  ATColumnDefault = 3,
  ATDropNotNull = 4,
  ATSetNotNull = 5,
  ATSetStatistics = 6,
  ATSetOptions = 7,
  ATResetOptions = 8,
  ATSetStorage = 9,
  ATDropColumn = 10,
  ATDropColumnRecurse = 11,
  ATAddIndex = 12,
  ATReAddIndex = 13,
  ATAddConstraint = 14,
  ATAddConstraintRecurse = 15,
  ATReAddConstraint = 16,
  ATAlterConstraint = 17,
  ATValidateConstraint = 18,
  ATValidateConstraintRecurse = 19,
  ATProcessedConstraint = 20,
  ATAddIndexConstraint = 21,
  ATDropConstraint = 22,
  ATDropConstraintRecurse = 23,
  ATReAddComment = 24,
  ATAlterColumnType = 25,
  ATAlterColumnGenericOptions = 26,
  ATChangeOwner = 27,
  ATClusterOn = 28,
  ATDropCluster = 29,
  ATSetLogged = 30,
  ATSetUnLogged = 31,
  ATAddOids = 32,
  ATAddOidsRecurse = 33,
  ATDropOids = 34,
  ATSetTableSpace = 35,
  ATSetRelOptions = 36,
  ATResetRelOptions = 37,
  ATReplaceRelOptions = 38,
  ATEnableTrig = 39,
  ATEnableAlwaysTrig = 40,
  ATEnableReplicaTrig = 41,
  ATDisableTrig = 42,
  ATEnableTrigAll = 43,
  ATDisableTrigAll = 44,
  ATEnableTrigUser = 45,
  ATDisableTrigUser = 46,
  ATEnableRule = 47,
  ATEnableAlwaysRule = 48,
  ATEnableReplicaRule = 49,
  ATDisableRule = 50,
  ATAddInherit = 51,
  ATDropInherit = 52,
  ATAddOf = 53,
  ATDropOf = 54,
  ATReplicaIdentity = 55,
  ATEnableRowSecurity = 56,
  ATDisableRowSecurity = 57,
  ATForceRowSecurity = 58,
  ATNoForceRowSecurity = 59,
  ATGenericOptions = 60,
  ATAttachPartition = 61,
  ATDetachPartition = 62,
  ATAddIdentity = 63,
  ATSetIdentity = 64,
  ATDropIdentity = 65,
}

export enum AlterTSConfigType {
  ALTERTSCONFIG_ADD_MAPPING = 0,
  ALTERTSCONFIG_ALTER_MAPPING_FOR_TOKEN = 1,
  ALTERTSCONFIG_REPLACE_DICT = 2,
  ALTERTSCONFIG_REPLACE_DICT_FOR_TOKEN = 3,
  ALTERTSCONFIG_DROP_MAPPING = 4,
}

export interface AlterTSConfigurationStmt {
  kind: AlterTSConfigType
  cfgname: Node[]
  tokentype: Node[]
  dicts: Node[]
  override: Boolean
  replace: Boolean
  missingOk: Boolean
}

export interface AlterTSDictionaryStmt {
  dictname: Node[]
  options: Node[]
}

export interface AlterUserMappingStmt {
  user: RoleSpec
  servername: string
  options: Node[]
}

export interface AlternativeSubPlan {
  xpr: Node
  subplans: Node[]
}

export interface ArrayCoerceExpr {
  xpr: Node
  arg: Node
  elemfuncid: Oid
  resulttype: Oid
  resulttypmod: GoInt32
  resultcollid: Oid
  isExplicit: Boolean
  coerceformat: CoercionForm
  location: GoInt
}

export interface ArrayExpr {
  xpr: Node
  arrayTypeid: Oid
  arrayCollid: Oid
  elementTypeid: Oid
  elements: Node[]
  multidims: Boolean
  location: GoInt
}

export interface ArrayRef {
  xpr: Node
  refarraytype: Oid
  refelemtype: Oid
  reftypmod: GoInt32
  refcollid: Oid
  refupperindexpr: Node[]
  reflowerindexpr: Node[]
  refexpr: Node
  refassgnexpr: Node
}

export interface BitString {
  str: string
}

export interface BlockIdData {
  biHi: GoUint16
  biLo: GoUint16
}

export interface BoolExpr {
  xpr: Node
  boolop: BoolExprType
  args: Node[]
  location: GoInt
}

export enum BoolExprType {
  ANDEXPR = 0,
  OREXPR = 1,
}

export enum BoolTestType {
  ISTRUE = 0,
  ISNOT_TRUE = 1,
}

export interface BooleanTest {
  xpr: Node
  arg: Node
  booltesttype: BoolTestType
  location: GoInt
}

export interface CaseExpr {
  xpr: Node
  casetype: Oid
  casecollid: Oid
  arg: Node
  args: Node[]
  defresult: Node
  location: GoInt
}

export interface CaseTestExpr {
  xpr: Node
  typeId: Oid
  typeMod: GoInt32
  collation: Oid
}

export interface CaseWhen {
  xpr: Node
  expr: Node
  result: Node
  location: GoInt
}

export interface CheckPointStmt {

}

export interface ClosePortalStmt {
  portalname: string
}

export interface ClusterStmt {
  relation: RangeVar
  indexname: string
  verbose: Boolean
}

export enum CmdType {
  CMDUNKNOWN = 0,
  CMDSELECT = 1,
  CMDUPDATE = 2,
  CMDINSERT = 3,
  CMDDELETE = 4,
  CMDUTILITY = 5,
  CMDNOTHING = 6,
}

export interface CoalesceExpr {
  xpr: Node
  coalescetype: Oid
  coalescecollid: Oid
  args: Node[]
  location: GoInt
}

export interface CoerceToDomain {
  xpr: Node
  arg: Node
  resulttype: Oid
  resulttypmod: GoInt32
  resultcollid: Oid
  coercionformat: CoercionForm
  location: GoInt
}

export interface CoerceToDomainValue {
  xpr: Node
  typeId: Oid
  typeMod: GoInt32
  collation: Oid
  location: GoInt
}

export interface CoerceViaIO {
  xpr: Node
  arg: Node
  resulttype: Oid
  resultcollid: Oid
  coerceformat: CoercionForm
  location: GoInt
}

export enum CoercionContext {
  COERCIONIMPLICIT = 0,
  COERCIONASSIGNMENT = 1,
  COERCIONEXPLICIT = 2,
}

export enum CoercionForm {
  COERCEEXPLICIT_CALL = 0,
  COERCEEXPLICIT_CAST = 1,
  COERCEIMPLICIT_CAST = 2,
}

export interface CollateClause {
  arg: Node
  collname: Node[]
  location: GoInt
}

export interface CollateExpr {
  xpr: Node
  arg: Node
  collOid: Oid
  location: GoInt
}

export interface ColumnDef {
  colname: string
  typeName: TypeName
  inhcount: GoInt
  isLocal: Boolean
  isNotNull: Boolean
  isFromType: Boolean
  isFromParent: Boolean
  storage: GoByte
  rawDefault: Node
  cookedDefault: Node
  identity: GoByte
  collClause: CollateClause
  collOid: Oid
  constraints: Node[]
  fdwoptions: Node[]
  location: GoInt
}

export interface ColumnRef {
  fields: Node[]
  location: GoInt
}

export interface CommentStmt {
  objtype: ObjectType
  object: Node
  comment: string
}

export interface CommonTableExpr {
  ctename: string
  aliascolnames: Node[]
  ctequery: Node
  location: GoInt
  cterecursive: Boolean
  cterefcount: GoInt
  ctecolnames: Node[]
  ctecoltypes: Node[]
  ctecoltypmods: Node[]
  ctecolcollations: Node[]
}

export interface CompositeTypeStmt {
  typevar: RangeVar
  coldeflist: Node[]
}

export interface Const {
  xpr: Node
  consttype: Oid
  consttypmod: GoInt32
  constcollid: Oid
  constlen: GoInt
  constvalue: Datum
  constisnull: Boolean
  constbyval: Boolean
  location: GoInt
}

export enum ConstrType {
  CONSTRNULL = 0,
  CONSTRNOTNULL = 1,
  CONSTRDEFAULT = 2,
  CONSTRIDENTITY = 3,
  CONSTRCHECK = 4,
  CONSTRPRIMARY = 5,
  CONSTRUNIQUE = 6,
  CONSTREXCLUSION = 7,
  CONSTRFOREIGN = 8,
  CONSTRATTR_DEFERRABLE = 9,
  CONSTRATTR_NOT_DEFERRABLE = 10,
  CONSTRATTR_DEFERRED = 11,
  CONSTRATTR_IMMEDIATE = 12,
}

export interface Constraint {
  contype: ConstrType
  conname: string
  deferrable: Boolean
  initdeferred: Boolean
  location: GoInt
  isNoInherit: Boolean
  rawExpr: Node
  cookedExpr: string
  generatedWhen: GoByte
  keys: Node[]
  exclusions: Node[]
  options: Node[]
  indexname: string
  indexspace: string
  accessMethod: string
  whereClause: Node
  pktable: RangeVar
  fkAttrs: Node[]
  pkAttrs: Node[]
  fkMatchtype: GoByte
  fkUpdAction: GoByte
  fkDelAction: GoByte
  oldConpfeqop: Node[]
  oldPktableOid: Oid
  skipValidation: Boolean
  initiallyValid: Boolean
}

export interface ConstraintsSetStmt {
  constraints: Node[]
  deferred: Boolean
}

export enum Context {
  ContextNone = 0,
  ContextTrue = 1,
  ContextFalse = 2,
  ContextSelect = 3,
  ContextUpdate = 4,
  ContextAConst = 5,
  ContextFuncCall = 6,
  ContextTypeName = 7,
  ContextOperator = 8,
}

export interface ConvertRowtypeExpr {
  xpr: Node
  arg: Node
  resulttype: Oid
  convertformat: CoercionForm
  location: GoInt
}

export interface CopyStmt {
  relation: RangeVar
  query: Node
  attlist: Node[]
  isFrom: Boolean
  isProgram: Boolean
  filename: string
  options: Node[]
}

export interface CreateAmStmt {
  amname: string
  handlerName: Node[]
  amtype: GoByte
}

export interface CreateCastStmt {
  sourcetype: TypeName
  targettype: TypeName
  func: ObjectWithArgs
  context: CoercionContext
  inout: Boolean
}

export interface CreateConversionStmt {
  conversionName: Node[]
  forEncodingName: string
  toEncodingName: string
  funcName: Node[]
  def: Boolean
}

export interface CreateDomainStmt {
  domainname: Node[]
  typeName: TypeName
  collClause: CollateClause
  constraints: Node[]
}

export interface CreateEnumStmt {
  typeName: Node[]
  vals: Node[]
}

export interface CreateEventTrigStmt {
  trigname: string
  eventname: string
  whenclause: Node[]
  funcname: Node[]
}

export interface CreateExtensionStmt {
  extname: string
  ifNotExists: Boolean
  options: Node[]
}

export interface CreateFdwStmt {
  fdwname: string
  funcOptions: Node[]
  options: Node[]
}

export interface CreateForeignServerStmt {
  servername: string
  servertype: string
  version: string
  fdwname: string
  ifNotExists: Boolean
  options: Node[]
}

export interface CreateForeignTableStmt {
  base: CreateStmt
  servername: string
  options: Node[]
}

export interface CreateFunctionStmt {
  replace: Boolean
  funcname: Node[]
  parameters: Node[]
  returnType: TypeName
  options: Node[]
  withClause: Node[]
}

export interface CreateOpClassItem {
  itemtype: GoInt
  name: ObjectWithArgs
  number: GoInt
  orderFamily: Node[]
  classArgs: Node[]
  storedtype: TypeName
}

export interface CreateOpClassStmt {
  opclassname: Node[]
  opfamilyname: Node[]
  amname: string
  datatype: TypeName
  items: Node[]
  isDefault: Boolean
}

export interface CreateOpFamilyStmt {
  opfamilyname: Node[]
  amname: string
}

export interface CreatePLangStmt {
  replace: Boolean
  plname: string
  plhandler: Node[]
  plinline: Node[]
  plvalidator: Node[]
  pltrusted: Boolean
}

export interface CreatePolicyStmt {
  policyName: string
  table: RangeVar
  cmdName: string
  permissive: Boolean
  roles: Node[]
  qual: Node
  withCheck: Node
}

export interface CreatePublicationStmt {
  pubname: string
  options: Node[]
  tables: Node[]
  forAllTables: Boolean
}

export interface CreateRangeStmt {
  typeName: Node[]
  params: Node[]
}

export interface CreateRoleStmt {
  stmtType: RoleStmtType
  role: string
  options: Node[]
}

export interface CreateSchemaStmt {
  schemaname: string
  authrole: RoleSpec
  schemaElts: Node[]
  ifNotExists: Boolean
}

export interface CreateSeqStmt {
  sequence: RangeVar
  options: Node[]
  ownerId: Oid
  forIdentity: Boolean
  ifNotExists: Boolean
}

export interface CreateStatsStmt {
  defnames: Node[]
  statTypes: Node[]
  exprs: Node[]
  relations: Node[]
  ifNotExists: Boolean
}

export interface CreateStmt {
  relation: RangeVar
  tableElts: Node[]
  inhRelations: Node[]
  partbound: PartitionBoundSpec
  partspec: PartitionSpec
  ofTypename: TypeName
  constraints: Node[]
  options: Node[]
  oncommit: OnCommitAction
  tablespacename: string
  ifNotExists: Boolean
}

export interface CreateSubscriptionStmt {
  subname: string
  conninfo: string
  publication: Node[]
  options: Node[]
}

export interface CreateTableAsStmt {
  query: Node
  into: IntoClause
  relkind: ObjectType
  isSelectInto: Boolean
  ifNotExists: Boolean
}

export interface CreateTableSpaceStmt {
  tablespacename: string
  owner: RoleSpec
  location: string
  options: Node[]
}

export interface CreateTransformStmt {
  replace: Boolean
  typeName: TypeName
  lang: string
  fromsql: ObjectWithArgs
  tosql: ObjectWithArgs
}

export interface CreateTrigStmt {
  trigname: string
  relation: RangeVar
  funcname: Node[]
  args: Node[]
  row: Boolean
  timing: GoInt16
  events: GoInt16
  columns: Node[]
  whenClause: Node
  isconstraint: Boolean
  transitionRels: Node[]
  deferrable: Boolean
  initdeferred: Boolean
  constrrel: RangeVar
}

export interface CreateUserMappingStmt {
  user: RoleSpec
  servername: string
  ifNotExists: Boolean
  options: Node[]
}

export interface CreatedbStmt {
  dbname: string
  options: Node[]
}

export interface CurrentOfExpr {
  xpr: Node
  cvarno: Index
  cursorName: string
  cursorParam: GoInt
}

export interface DeallocateStmt {
  name: string
}

export interface DeclareCursorStmt {
  portalname: string
  options: GoInt
  query: Node
}

export interface DefElem {
  defnamespace: string
  defname: string
  arg: Node
  defaction: DefElemAction
  location: GoInt
}

export enum DefElemAction {
  DEFELEMUNSPEC = 0,
  DEFELEMSET = 1,
  DEFELEMADD = 2,
  DEFELEMDROP = 3,
}

export interface DefineStmt {
  kind: ObjectType
  oldstyle: Boolean
  defnames: Node[]
  args: Node[]
  definition: Node[]
  ifNotExists: Boolean
}

export interface DeleteStmt {
  relation: RangeVar
  usingClause: Node[]
  whereClause: Node
  returningList: Node[]
  withClause: WithClause
}

export enum DiscardMode {
  DISCARDALL = 0,
  DISCARDPLANS = 1,
  DISCARDSEQUENCES = 2,
  DISCARDTEMP = 3,
}

export interface DiscardStmt {
  target: DiscardMode
}

export interface DoStmt {
  args: Node[]
}

export enum DropBehavior {
  DROPRESTRICT = 0,
  DROPCASCADE = 1,
}

export interface DropOwnedStmt {
  roles: Node[]
  behavior: DropBehavior
}

export interface DropRoleStmt {
  roles: Node[]
  missingOk: Boolean
}

export interface DropStmt {
  objects: Node[]
  removeType: ObjectType
  behavior: DropBehavior
  missingOk: Boolean
  concurrent: Boolean
}

export interface DropSubscriptionStmt {
  subname: string
  missingOk: Boolean
  behavior: DropBehavior
}

export interface DropTableSpaceStmt {
  tablespacename: string
  missingOk: Boolean
}

export interface DropUserMappingStmt {
  user: RoleSpec
  servername: string
  missingOk: Boolean
}

export interface DropdbStmt {
  dbname: string
  missingOk: Boolean
}

export interface ExecuteStmt {
  name: string
  params: Node[]
}

export interface ExplainStmt {
  query: Node
  options: Node[]
}

export interface Expr {

}

export enum FetchDirection {
  FETCHFORWARD = 0,
  FETCHBACKWARD = 1,
  FETCHABSOLUTE = 2,
  FETCHRELATIVE = 3,
}

export interface FetchStmt {
  direction: FetchDirection
  howMany: GoInt64
  portalname: string
  ismove: Boolean
}

export interface FieldSelect {
  xpr: Node
  arg: Node
  fieldnum: AttrNumber
  resulttype: Oid
  resulttypmod: GoInt32
  resultcollid: Oid
}

export interface FieldStore {
  xpr: Node
  arg: Node
  newvals: Node[]
  fieldnums: Node[]
  resulttype: Oid
}

export interface Float {
  str: string
}

export interface FromExpr {
  fromlist: Node[]
  quals: Node
}

export interface FuncCall {
  funcname: Node[]
  args: Node[]
  aggOrder: Node[]
  aggFilter: Node
  aggWithinGroup: Boolean
  aggStar: Boolean
  aggDistinct: Boolean
  funcVariadic: Boolean
  over: WindowDef
  location: GoInt
}

export interface FuncExpr {
  xpr: Node
  funcid: Oid
  funcresulttype: Oid
  funcretset: Boolean
  funcvariadic: Boolean
  funcformat: CoercionForm
  funccollid: Oid
  inputcollid: Oid
  args: Node[]
  location: GoInt
}

export interface FunctionParameter {
  name: string
  argType: TypeName
  mode: FunctionParameterMode
  defexpr: Node
}

export enum FunctionParameterMode {
  FUNCPARAM_IN = 0,
  FUNCPARAM_OUT = 1,
  FUNCPARAM_INOUT = 2,
  FUNCPARAM_VARIADIC = 3,
  FUNCPARAM_TABLE = 4,
}

export enum GrantObjectType {
  ACLOBJECT_COLUMN = 0,
  ACLOBJECT_RELATION = 1,
  ACLOBJECT_SEQUENCE = 2,
  ACLOBJECT_DATABASE = 3,
  ACLOBJECT_DOMAIN = 4,
  ACLOBJECT_FDW = 5,
  ACLOBJECT_FOREIGN_SERVER = 6,
  ACLOBJECT_FUNCTION = 7,
  ACLOBJECT_LANGUAGE = 8,
  ACLOBJECT_LARGEOBJECT = 9,
  ACLOBJECT_NAMESPACE = 10,
  ACLOBJECT_TABLESPACE = 11,
  ACLOBJECT_TYPE = 12,
}

export interface GrantRoleStmt {
  grantedRoles: Node[]
  granteeRoles: Node[]
  isGrant: Boolean
  adminOpt: Boolean
  grantor: RoleSpec
  behavior: DropBehavior
}

export interface GrantStmt {
  isGrant: Boolean
  targtype: GrantTargetType
  objtype: GrantObjectType
  objects: Node[]
  privileges: Node[]
  grantees: Node[]
  grantOption: Boolean
  behavior: DropBehavior
}

export enum GrantTargetType {
  ACLTARGET_OBJECT = 0,
  ACLTARGET_ALL_IN_SCHEMA = 1,
  ACLTARGET_DEFAULTS = 2,
}

export interface GroupingFunc {
  xpr: Node
  args: Node[]
  refs: Node[]
  cols: Node[]
  agglevelsup: Index
  location: GoInt
}

export interface GroupingSet {
  kind: GroupingSetKind
  content: Node[]
  location: GoInt
}

export enum GroupingSetKind {
  GROUPINGSET_EMPTY = 0,
  GROUPINGSET_SIMPLE = 1,
  GROUPINGSET_ROLLUP = 2,
  GROUPINGSET_CUBE = 3,
  GROUPINGSET_SETS = 4,
}

export interface ImportForeignSchemaStmt {
  serverName: string
  remoteSchema: string
  localSchema: string
  listType: ImportForeignSchemaType
  tableList: Node[]
  options: Node[]
}

export enum ImportForeignSchemaType {
  FDWIMPORT_SCHEMA_ALL = 0,
  FDWIMPORT_SCHEMA_LIMIT_TO = 1,
  FDWIMPORT_SCHEMA_EXCEPT = 2,
}

export interface IndexElem {
  name: string
  expr: Node
  indexcolname: string
  collation: Node[]
  opclass: Node[]
  ordering: SortByDir
  nullsOrdering: SortByNulls
}

export interface IndexStmt {
  idxname: string
  relation: RangeVar
  accessMethod: string
  tableSpace: string
  indexParams: Node[]
  options: Node[]
  whereClause: Node
  excludeOpNames: Node[]
  idxcomment: string
  indexOid: Oid
  oldNode: Oid
  unique: Boolean
  primary: Boolean
  isconstraint: Boolean
  deferrable: Boolean
  initdeferred: Boolean
  transformed: Boolean
  concurrent: Boolean
  ifNotExists: Boolean
}

export interface InferClause {
  indexElems: Node[]
  whereClause: Node
  conname: string
  location: GoInt
}

export interface InferenceElem {
  xpr: Node
  expr: Node
  infercollid: Oid
  inferopclass: Oid
}

export interface InlineCodeBlock {
  sourceText: string
  langOid: Oid
  langIsTrusted: Boolean
}

export interface InsertStmt {
  relation: RangeVar
  cols: Node[]
  selectStmt: Node
  onConflictClause: OnConflictClause
  returningList: Node[]
  withClause: WithClause
  override: OverridingKind
}

export interface Integer {
  ival: GoInt64
}

export interface IntoClause {
  rel: RangeVar
  colNames: Node[]
  options: Node[]
  onCommit: OnCommitAction
  tableSpaceName: string
  viewQuery: Node
  skipData: Boolean
}

export interface JoinExpr {
  jointype: JoinType
  isNatural: Boolean
  larg: Node
  rarg: Node
  usingClause: Node[]
  quals: Node
  alias: Alias
  rtindex: GoInt
}

export enum JoinType {
  JOININNER = 0,
  JOINLEFT = 1,
  JOINFULL = 2,
  JOINRIGHT = 3,
  JOINSEMI = 4,
  JOINANTI = 5,
  JOINUNIQUE_OUTER = 6,
  JOINUNIQUE_INNER = 7,
}

export interface List {
  items: Node[]
}

export interface ListenStmt {
  conditionname: string
}

export interface LoadStmt {
  filename: string
}

export enum LockClauseStrength {
  LCSNONE = 0,
  LCSFORKEYSHARE = 1,
  LCSFORSHARE = 2,
  LCSFORNOKEYUPDATE = 3,
  LCSFORUPDATE = 4,
}

export interface LockStmt {
  relations: Node[]
  mode: GoInt
  nowait: Boolean
}

export enum LockWaitPolicy {
  LockWaitBlock = 0,
  LockWaitSkip = 1,
  LockWaitError = 2,
}

export interface LockingClause {
  lockedRels: Node[]
  strength: LockClauseStrength
  waitPolicy: LockWaitPolicy
}

export interface MinMaxExpr {
  xpr: Node
  minmaxtype: Oid
  minmaxcollid: Oid
  inputcollid: Oid
  op: MinMaxOp
  args: Node[]
  location: GoInt
}

export enum MinMaxOp {
  ISGREATEST = 0,
  ISLEAST = 1,
}

export interface MultiAssignRef {
  source: Node
  colno: GoInt
  ncolumns: GoInt
}

export interface NamedArgExpr {
  xpr: Node
  arg: Node
  name: string
  argnumber: GoInt
  location: GoInt
}

export interface NextValueExpr {
  xpr: Node
  seqid: Oid
  typeId: Oid
}

export interface FingerprintHashContext {
  hash: hash.Hash
}

export interface NotifyStmt {
  conditionname: string
  payload: string
}

export interface Null {

}

export interface NullTest {
  xpr: Node
  arg: Node
  nulltesttype: NullTestType
  argisrow: Boolean
  location: GoInt
}

export enum NullTestType {
  ISNULL = 0,
  ISNOT_NULL = 1,
}

export enum ObjectType {
  OBJECTACCESS_METHOD = 0,
  OBJECTAGGREGATE = 1,
  OBJECTAMOP = 2,
  OBJECTAMPROC = 3,
  OBJECTATTRIBUTE = 4,
  OBJECTCAST = 5,
  OBJECTCOLUMN = 6,
  OBJECTCOLLATION = 7,
  OBJECTCONVERSION = 8,
  OBJECTDATABASE = 9,
  OBJECTDEFAULT = 10,
  OBJECTDEFACL = 11,
  OBJECTDOMAIN = 12,
  OBJECTDOMCONSTRAINT = 13,
  OBJECTEVENT_TRIGGER = 14,
  OBJECTEXTENSION = 15,
  OBJECTFDW = 16,
  OBJECTFOREIGN_SERVER = 17,
  OBJECTFOREIGN_TABLE = 18,
  OBJECTFUNCTION = 19,
  OBJECTINDEX = 20,
  OBJECTLANGUAGE = 21,
  OBJECTLARGEOBJECT = 22,
  OBJECTMATVIEW = 23,
  OBJECTOPCLASS = 24,
  OBJECTOPERATOR = 25,
  OBJECTOPFAMILY = 26,
  OBJECTPOLICY = 27,
  OBJECTPUBLICATION = 28,
  OBJECTPUBLICATION_REL = 29,
  OBJECTROLE = 30,
  OBJECTRULE = 31,
  OBJECTSCHEMA = 32,
  OBJECTSEQUENCE = 33,
  OBJECTSUBSCRIPTION = 34,
  OBJECTSTATISTIC_EXT = 35,
  OBJECTTABCONSTRAINT = 36,
  OBJECTTABLE = 37,
  OBJECTTABLESPACE = 38,
  OBJECTTRANSFORM = 39,
  OBJECTTRIGGER = 40,
  OBJECTTSCONFIGURATION = 41,
  OBJECTTSDICTIONARY = 42,
  OBJECTTSPARSER = 43,
  OBJECTTSTEMPLATE = 44,
  OBJECTTYPE = 45,
  OBJECTUSER_MAPPING = 46,
  OBJECTVIEW = 47,
}

export interface ObjectWithArgs {
  objname: Node[]
  objargs: Node[]
  argsUnspecified: Boolean
}

export enum OnCommitAction {
  ONCOMMITNOOP = 0,
  ONCOMMITPRESERVE_ROWS = 1,
  ONCOMMITDELETE_ROWS = 2,
  ONCOMMITDROP = 3,
}

export enum OnConflictAction {
  ONCONFLICTNONE = 0,
  ONCONFLICTNOTHING = 1,
  ONCONFLICTUPDATE = 2,
}

export interface OnConflictClause {
  action: OnConflictAction
  infer: InferClause
  targetList: Node[]
  whereClause: Node
  location: GoInt
}

export interface OnConflictExpr {
  action: OnConflictAction
  arbiterElems: Node[]
  arbiterWhere: Node
  constraint: Oid
  onConflictSet: Node[]
  onConflictWhere: Node
  exclRelIndex: GoInt
  exclRelTlist: Node[]
}

export interface OpExpr {
  xpr: Node
  opno: Oid
  opfuncid: Oid
  opresulttype: Oid
  opretset: Boolean
  opcollid: Oid
  inputcollid: Oid
  args: Node[]
  location: GoInt
}

export enum OverridingKind {
  OVERRIDINGNOT_SET = 0,
  OVERRIDINGUSER_VALUE = 1,
  OVERRIDINGSYSTEM_VALUE = 2,
}

export interface Param {
  xpr: Node
  paramkind: ParamKind
  paramid: GoInt
  paramtype: Oid
  paramtypmod: GoInt32
  paramcollid: Oid
  location: GoInt
}

export interface ParamExecData {
  execPlan: any
  value: Datum
  isnull: Boolean
}

export interface ParamExternData {
  value: Datum
  isnull: Boolean
  pflags: GoUint16
  ptype: Oid
}

export enum ParamKind {
  PARAMEXTERN = 0,
  PARAMEXEC = 1,
  PARAMSUBLINK = 2,
  PARAMMULTIEXPR = 3,
}

export interface ParamListInfoData {
  paramFetchArg: any
  parserSetupArg: any
  numParams: GoInt
  paramMask: GoUint32[]
}

export interface ParamRef {
  number: GoInt
  location: GoInt
}

export interface PartitionBoundSpec {
  strategy: GoByte
  listdatums: Node[]
  lowerdatums: Node[]
  upperdatums: Node[]
  location: GoInt
}

export interface PartitionCmd {
  name: RangeVar
  bound: PartitionBoundSpec
}

export interface PartitionElem {
  name: string
  expr: Node
  collation: Node[]
  opclass: Node[]
  location: GoInt
}

export interface PartitionRangeDatum {
  kind: PartitionRangeDatumKind
  value: Node
  location: GoInt
}

export enum PartitionRangeDatumKind {
  PARTITIONRANGE_DATUM_MINVALUE = 0,
  PARTITIONRANGE_DATUM_VALUE = 1,
  PARTITIONRANGE_DATUM_MAXVALUE = 2,
}

export interface PartitionSpec {
  strategy: string
  partParams: Node[]
  location: GoInt
}

export interface PrepareStmt {
  name: string
  argtypes: Node[]
  query: Node
}

export interface Query {
  commandType: CmdType
  querySource: QuerySource
  queryId: GoUint32
  canSetTag: Boolean
  utilityStmt: Node
  resultRelation: GoInt
  hasAggs: Boolean
  hasWindowFuncs: Boolean
  hasTargetSrfs: Boolean
  hasSubLinks: Boolean
  hasDistinctOn: Boolean
  hasRecursive: Boolean
  hasModifyingCte: Boolean
  hasForUpdate: Boolean
  hasRowSecurity: Boolean
  cteList: Node[]
  rtable: Node[]
  jointree: FromExpr
  targetList: Node[]
  override: OverridingKind
  onConflict: OnConflictExpr
  returningList: Node[]
  groupClause: Node[]
  groupingSets: Node[]
  havingQual: Node
  windowClause: Node[]
  distinctClause: Node[]
  sortClause: Node[]
  limitOffset: Node
  limitCount: Node
  rowMarks: Node[]
  setOperations: Node
  constraintDeps: Node[]
  withCheckOptions: Node[]
  stmtLocation: GoInt
  stmtLen: GoInt
}

export enum QuerySource {
  QSRCORIGINAL = 0,
  QSRCPARSER = 1,
  QSRCINSTEAD_RULE = 2,
  QSRCQUAL_INSTEAD_RULE = 3,
  QSRCNON_INSTEAD_RULE = 4,
}

export interface RangeFunction {
  lateral: Boolean
  ordinality: Boolean
  isRowsfrom: Boolean
  functions: Node[]
  alias: Alias
  coldeflist: Node[]
}

export interface RangeSubselect {
  lateral: Boolean
  subquery: Node
  alias: Alias
}

export interface RangeTableFunc {
  lateral: Boolean
  docexpr: Node
  rowexpr: Node
  namespaces: Node[]
  columns: Node[]
  alias: Alias
  location: GoInt
}

export interface RangeTableFuncCol {
  colname: string
  typeName: TypeName
  forOrdinality: Boolean
  isNotNull: Boolean
  colexpr: Node
  coldefexpr: Node
  location: GoInt
}

export interface RangeTableSample {
  relation: Node
  method: Node[]
  args: Node[]
  repeatable: Node
  location: GoInt
}

export interface RangeTblEntry {
  rtekind: RTEKind
  relid: Oid
  relkind: GoByte
  tablesample: TableSampleClause
  subquery: Query
  securityBarrier: Boolean
  jointype: JoinType
  joinaliasvars: Node[]
  functions: Node[]
  funcordinality: Boolean
  tablefunc: TableFunc
  valuesLists: Node[]
  ctename: string
  ctelevelsup: Index
  selfReference: Boolean
  coltypes: Node[]
  coltypmods: Node[]
  colcollations: Node[]
  enrname: string
  enrtuples: GoFloat64
  alias: Alias
  eref: Alias
  lateral: Boolean
  inh: Boolean
  inFromCl: Boolean
  requiredPerms: AclMode
  checkAsUser: Oid
  selectedCols: GoUint32[]
  insertedCols: GoUint32[]
  updatedCols: GoUint32[]
  securityQuals: Node[]
}

export interface RangeTblFunction {
  funcexpr: Node
  funccolcount: GoInt
  funccolnames: Node[]
  funccoltypes: Node[]
  funccoltypmods: Node[]
  funccolcollations: Node[]
  funcparams: GoUint32[]
}

export interface RangeTblRef {
  rtindex: GoInt
}

export interface RangeVar {
  catalogname: string
  schemaname: string
  relname: string
  inh: Boolean
  relpersistence: GoByte
  alias: Alias
  location: GoInt
}

export interface RawStmt {
  stmt: Node
  stmtLocation: GoInt
  stmtLen: GoInt
}

export interface ReassignOwnedStmt {
  roles: Node[]
  newrole: RoleSpec
}

export interface RefreshMatViewStmt {
  concurrent: Boolean
  skipData: Boolean
  relation: RangeVar
}

export enum ReindexObjectType {
  REINDEXOBJECT_INDEX = 0,
  REINDEXOBJECT_TABLE = 1,
  REINDEXOBJECT_SCHEMA = 2,
  REINDEXOBJECT_SYSTEM = 3,
  REINDEXOBJECT_DATABASE = 4,
}

export interface ReindexStmt {
  kind: ReindexObjectType
  relation: RangeVar
  name: string
  options: GoInt
}

export interface RelabelType {
  xpr: Node
  arg: Node
  resulttype: Oid
  resulttypmod: GoInt32
  resultcollid: Oid
  relabelformat: CoercionForm
  location: GoInt
}

export interface RenameStmt {
  renameType: ObjectType
  relationType: ObjectType
  relation: RangeVar
  object: Node
  subname: string
  newname: string
  behavior: DropBehavior
  missingOk: Boolean
}

export interface ReplicaIdentityStmt {
  identityType: GoByte
  name: string
}

export interface ResTarget {
  name: string
  indirection: Node[]
  val: Node
  location: GoInt
}

export interface RoleSpec {
  roletype: RoleSpecType
  rolename: string
  location: GoInt
}

export enum RoleSpecType {
  ROLESPECCSTRING = 0,
  ROLESPECCURRENT_USER = 1,
  ROLESPECSESSION_USER = 2,
  ROLESPECPUBLIC = 3,
}

export enum RoleStmtType {
  ROLESTMTROLE = 0,
  ROLESTMTUSER = 1,
  ROLESTMTGROUP = 2,
}

export interface RowCompareExpr {
  xpr: Node
  rctype: RowCompareType
  opnos: Node[]
  opfamilies: Node[]
  inputcollids: Node[]
  largs: Node[]
  rargs: Node[]
}

export enum RowCompareType {
  ROWCOMPARELT = 0,
  ROWCOMPARELE = 1,
  ROWCOMPAREEQ = 2,
  ROWCOMPAREGE = 3,
  ROWCOMPAREGT = 4,
  ROWCOMPARENE = 5,
}

export interface RowExpr {
  xpr: Node
  args: Node[]
  rowTypeid: Oid
  rowFormat: CoercionForm
  colnames: Node[]
  location: GoInt
}

export interface RowMarkClause {
  rti: Index
  strength: LockClauseStrength
  waitPolicy: LockWaitPolicy
  pushedDown: Boolean
}

export enum RTEKind {
  RTERELATION = 0,
  RTESUBQUERY = 1,
  RTEJOIN = 2,
  RTEFUNCTION = 3,
  RTETABLEFUNC = 4,
  RTEVALUES = 5,
  RTECTE = 6,
  RTENAMEDTUPLESTORE = 7,
}

export interface RuleStmt {
  relation: RangeVar
  rulename: string
  whereClause: Node
  event: CmdType
  instead: Boolean
  actions: Node[]
  replace: Boolean
}

export interface ScalarArrayOpExpr {
  xpr: Node
  opno: Oid
  opfuncid: Oid
  useOr: Boolean
  inputcollid: Oid
  args: Node[]
  location: GoInt
}

export enum ScanDirection {
  BackwardScanDirection = 0,
  NoMovementScanDirection = 1,
  ForwardScanDirection = 2,
}

export interface SecLabelStmt {
  objtype: ObjectType
  object: Node
  provider: string
  label: string
}

export interface SelectStmt {
  distinctClause: Node[]
  intoClause: IntoClause
  targetList: Node[]
  fromClause: Node[]
  whereClause: Node
  groupClause: Node[]
  havingClause: Node
  windowClause: Node[]
  valuesLists: Node[][]
  sortClause: Node[]
  limitOffset: Node
  limitCount: Node
  lockingClause: Node[]
  withClause: WithClause
  op: SetOperation
  all: Boolean
  larg: SelectStmt
  rarg: SelectStmt
}

export enum SetOpCmd {
  SETOPCMDINTERSECT = 0,
  SETOPCMDINTERSECT_ALL = 1,
  SETOPCMDEXCEPT = 2,
  SETOPCMDEXCEPT_ALL = 3,
}

export enum SetOpStrategy {
  SETOPSORTED = 0,
  SETOPHASHED = 1,
}

export enum SetOperation {
  SETOPNONE = 0,
  SETOPUNION = 1,
  SETOPINTERSECT = 2,
  SETOPEXCEPT = 3,
}

export interface SetOperationStmt {
  op: SetOperation
  all: Boolean
  larg: Node
  rarg: Node
  colTypes: Node[]
  colTypmods: Node[]
  colCollations: Node[]
  groupClauses: Node[]
}

export interface SetToDefault {
  xpr: Node
  typeId: Oid
  typeMod: GoInt32
  collation: Oid
  location: GoInt
}

export interface SortBy {
  node: Node
  sortbyDir: SortByDir
  sortbyNulls: SortByNulls
  useOp: Node[]
  location: GoInt
}

export enum SortByDir {
  SORTBYDEFAULT = 0,
  SORTBYASC = 1,
  SORTBYDESC = 2,
  SORTBYUSING = 3,
}

export enum SortByNulls {
  SORTBYNULLS_DEFAULT = 0,
  SORTBYNULLS_FIRST = 1,
  SORTBYNULLS_LAST = 2,
}

export interface SortGroupClause {
  tleSortGroupRef: Index
  eqop: Oid
  sortop: Oid
  nullsFirst: Boolean
  hashable: Boolean
}

export interface SQLValueFunction {
  xpr: Node
  op: SQLValueFunctionOp
  type: Oid
  typmod: GoInt32
  location: GoInt
}

export enum SQLValueFunctionOp {
  SVFOPCURRENT_DATE = 0,
  SVFOPCURRENT_TIME = 1,
  SVFOPCURRENT_TIME_N = 2,
  SVFOPCURRENT_TIMESTAMP = 3,
  SVFOPCURRENT_TIMESTAMP_N = 4,
  SVFOPLOCALTIME = 5,
  SVFOPLOCALTIME_N = 6,
  SVFOPLOCALTIMESTAMP = 7,
  SVFOPLOCALTIMESTAMP_N = 8,
  SVFOPCURRENT_ROLE = 9,
  SVFOPCURRENT_USER = 10,
  SVFOPUSER = 11,
  SVFOPSESSION_USER = 12,
  SVFOPCURRENT_CATALOG = 13,
  SVFOPCURRENT_SCHEMA = 14,
}

export enum StmtType {
  Ack = 0,
  DDL = 1,
  RowsAffected = 2,
  Rows = 3,
  CopyIn = 4,
  Unknown = 5,
}

export interface String {
  str: string
}

export interface SubLink {
  xpr: Node
  subLinkType: SubLinkType
  subLinkId: GoInt
  testexpr: Node
  operName: Node[]
  subselect: Node
  location: GoInt
}

export enum SubLinkType {
  EXISTSSUBLINK = 0,
  ALLSUBLINK = 1,
  ANYSUBLINK = 2,
  ROWCOMPARESUBLINK = 3,
  EXPRSUBLINK = 4,
  MULTIEXPRSUBLINK = 5,
  ARRAYSUBLINK = 6,
  CTESUBLINK = 7,
}

export interface SubPlan {
  xpr: Node
  subLinkType: SubLinkType
  testexpr: Node
  paramIds: Node[]
  planId: GoInt
  planName: string
  firstColType: Oid
  firstColTypmod: GoInt32
  firstColCollation: Oid
  useHashTable: Boolean
  unknownEqFalse: Boolean
  parallelSafe: Boolean
  setParam: Node[]
  parParam: Node[]
  args: Node[]
  startupCost: Cost
  perCallCost: Cost
}

export interface SyntaxTree {
  statements: Node[]
  query: string
}

export interface TableFunc {
  nsUris: Node[]
  nsNames: Node[]
  docexpr: Node
  rowexpr: Node
  colnames: Node[]
  coltypes: Node[]
  coltypmods: Node[]
  colcollations: Node[]
  colexprs: Node[]
  coldefexprs: Node[]
  notnulls: GoUint32[]
  ordinalitycol: GoInt
  location: GoInt
}

export interface TableLikeClause {
  relation: RangeVar
  options: GoUint32
}

export enum TableLikeOption {
  CREATETABLE_LIKE_DEFAULTS = 0,
  CREATETABLE_LIKE_CONSTRAINTS = 1,
  CREATETABLE_LIKE_IDENTITY = 2,
  CREATETABLE_LIKE_INDEXES = 3,
  CREATETABLE_LIKE_STORAGE = 4,
  CREATETABLE_LIKE_COMMENTS = 5,
  CREATETABLE_LIKE_ALL = 6,
}

export interface TableSampleClause {
  tsmhandler: Oid
  args: Node[]
  repeatable: Node
}

export interface TargetEntry {
  xpr: Node
  expr: Node
  resno: AttrNumber
  resname: string
  ressortgroupref: Index
  resorigtbl: Oid
  resorigcol: AttrNumber
  resjunk: Boolean
}

export interface TransactionStmt {
  kind: TransactionStmtKind
  options: Node[]
  gid: string
}

export enum TransactionStmtKind {
  TRANSSTMT_BEGIN = 0,
  TRANSSTMT_START = 1,
  TRANSSTMT_COMMIT = 2,
  TRANSSTMT_ROLLBACK = 3,
  TRANSSTMT_SAVEPOINT = 4,
  TRANSSTMT_RELEASE = 5,
  TRANSSTMT_ROLLBACK_TO = 6,
  TRANSSTMT_PREPARE = 7,
  TRANSSTMT_COMMIT_PREPARED = 8,
  TRANSSTMT_ROLLBACK_PREPARED = 9,
}

export interface TriggerTransition {
  name: string
  isNew: Boolean
  isTable: Boolean
}

export interface TruncateStmt {
  relations: Node[]
  restartSeqs: Boolean
  behavior: DropBehavior
}

export interface TypeCast {
  arg: Node
  typeName: TypeName
  location: GoInt
}

export interface TypeName {
  names: Node[]
  typeOid: Oid
  setof: Boolean
  pctType: Boolean
  typmods: Node[]
  typemod: GoInt32
  arrayBounds: Node[]
  location: GoInt
}

export interface UnlistenStmt {
  conditionname: string
}

export interface UpdateStmt {
  relation: RangeVar
  targetList: Node[]
  whereClause: Node
  fromClause: Node[]
  returningList: Node[]
  withClause: WithClause
}

export interface DeparseTest {
  query: string
  expected: string
  expectedParseError: string
  expectedCompileError: string
}

export enum VacuumOption {
  VACOPTVACUUM = 0,
  VACOPTANALYZE = 1,
  VACOPTVERBOSE = 2,
  VACOPTFREEZE = 3,
  VACOPTFULL = 4,
  VACOPTNOWAIT = 5,
  VACOPTSKIPTOAST = 6,
  VACOPTDISABLE_PAGE_SKIPPING = 7,
}

export interface VacuumStmt {
  options: GoInt
  relation: RangeVar
  vaCols: Node[]
}

export interface Var {
  xpr: Node
  varno: Index
  varattno: AttrNumber
  vartype: Oid
  vartypmod: GoInt32
  varcollid: Oid
  varlevelsup: Index
  varnoold: Index
  varoattno: AttrNumber
  location: GoInt
}

export interface varattexternal {
  vaRawsize: GoInt32
  vaExtsize: GoInt32
  vaValueid: Oid
  vaToastrelid: Oid
}

export enum VariableSetKind {
  VARSET_VALUE = 0,
  VARSET_DEFAULT = 1,
  VARSET_CURRENT = 2,
  VARSET_MULTI = 3,
  VARRESET = 4,
  VARRESET_ALL = 5,
}

export interface VariableSetStmt {
  kind: VariableSetKind
  name: string
  args: Node[]
  isLocal: Boolean
}

export interface VariableShowStmt {
  name: string
}

export enum VartagExternal {
  VARTAGINDIRECT = 0,
  VARTAGEXPANDED_RO = 1,
  VARTAGEXPANDED_RW = 2,
  VARTAGONDISK = 3,
}

export enum ViewCheckOption {
  NOCHECK_OPTION = 0,
  LOCALCHECK_OPTION = 1,
  CASCADEDCHECK_OPTION = 2,
}

export interface ViewStmt {
  view: RangeVar
  aliases: Node[]
  query: Node
  replace: Boolean
  options: Node[]
  withCheckOption: ViewCheckOption
}

export enum WCOKind {
  WCOVIEW_CHECK = 0,
  WCORLS_INSERT_CHECK = 1,
  WCORLS_UPDATE_CHECK = 2,
  WCORLS_CONFLICT_CHECK = 3,
}

export interface WindowClause {
  name: string
  refname: string
  partitionClause: Node[]
  orderClause: Node[]
  frameOptions: GoInt
  startOffset: Node
  endOffset: Node
  winref: Index
  copiedOrder: Boolean
}

export interface WindowDef {
  name: string
  refname: string
  partitionClause: Node[]
  orderClause: Node[]
  frameOptions: GoInt
  startOffset: Node
  endOffset: Node
  location: GoInt
}

export interface WindowFunc {
  xpr: Node
  winfnoid: Oid
  wintype: Oid
  wincollid: Oid
  inputcollid: Oid
  args: Node[]
  aggfilter: Node
  winref: Index
  winstar: Boolean
  winagg: Boolean
  location: GoInt
}

export interface WithCheckOption {
  kind: WCOKind
  relname: string
  polname: string
  qual: Node
  cascaded: Boolean
}

export interface WithClause {
  ctes: Node[]
  recursive: Boolean
  location: GoInt
}

export interface XmlExpr {
  xpr: Node
  op: XmlExprOp
  name: string
  namedArgs: Node[]
  argNames: Node[]
  args: Node[]
  xmloption: XmlOptionType
  type: Oid
  typmod: GoInt32
  location: GoInt
}

export enum XmlExprOp {
  ISXMLCONCAT = 0,
  ISXMLELEMENT = 1,
  ISXMLFOREST = 2,
  ISXMLPARSE = 3,
  ISXMLPI = 4,
  ISXMLROOT = 5,
  ISXMLSERIALIZE = 6,
  ISDOCUMENT = 7,
}

export enum XmlOptionType {
  XMLOPTIONDOCUMENT = 0,
  XMLOPTIONCONTENT = 1,
}

export interface XmlSerialize {
  xmloption: XmlOptionType
  expr: Node
  typeName: TypeName
  location: GoInt
}