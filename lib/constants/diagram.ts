export enum DiagramVisibility {
  Public = 'public',
  Private = 'private',
}

export enum DatabaseType {
  MySQL = 'mysql',
  PostgreSQL = 'postgres',
  SQLServer = 'sqlserver',
}

export const DatabaseFieldTypes = {
  [DatabaseType.MySQL]: [
    'tinyint',
    'smallint',
    'mediumint',
    'int',
    'integer',
    'bigint',
    'decimal',
    'dec',
    'numeric',
    'fixed',
    'float',
    'double',
    'real',
    'date',
    'datetime',
    'timestamp',
    'time',
    'year',
    'char',
    'varchar',
    'binary',
    'varbinary',
    'tinyblob',
    'blob',
    'mediumblob',
    'longblob',
    'tinytext',
    'text',
    'mediumtext',
    'longtext',
    'enum',
    'set',
    'json',
    'geometry',
    'point',
    'linestring',
    'polygon',
    'multipoint',
    'multilinestring',
    'multipolygon',
    'geometrycollection',
  ],
  [DatabaseType.PostgreSQL]: [
    'smallint',
    'integer',
    'bigint',
    'decimal',
    'numeric',
    'real',
    'double precision',
    'serial',
    'bigserial',
    'money',
    'char',
    'varchar',
    'text',
    'bytea',
    'timestamp',
    'timestamptz',
    'date',
    'time',
    'timetz',
    'interval',
    'boolean',
    'enum',
    'uuid',
    'json',
    'jsonb',
    'xml',
    'cidr',
    'inet',
    'macaddr',
    'bit',
    'varbit',
    'point',
    'line',
    'lseg',
    'box',
    'path',
    'polygon',
    'circle',
    'int4range',
    'int8range',
    'numrange',
    'tsrange',
    'tstzrange',
    'daterange',
    'array',
    'serial',
    'bigserial',
    'tsvector',
    'tsquery',
    'uuid',
    'xml',
  ],
  [DatabaseType.SQLServer]: [
    'bigint',
    'int',
    'smallint',
    'tinyint',
    'bit',
    'decimal',
    'numeric',
    'money',
    'smallmoney',
    'float',
    'real',
    'date',
    'datetime',
    'datetime2',
    'smalldatetime',
    'datetimeoffset',
    'time',
    'char',
    'varchar',
    'text',
    'nchar',
    'nvarchar',
    'ntext',
    'binary',
    'varbinary',
    'image',
    'xml',
    'cursor',
    'rowversion',
    'uniqueidentifier',
    'sql_variant',
    'table',
    'hierarchyid',
    'geography',
    'geometry',
  ],
} as const;