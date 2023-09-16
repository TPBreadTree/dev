import { DefaultNamingStrategy } from 'typeorm';
import { Logger } from 'typeorm/logger/Logger';
import { LoggerOptions } from 'typeorm/logger/LoggerOptions';
import BaseConfig from './BaseConfig';

export default class DBConfig extends BaseConfig {
  readonly type: 'mysql' | 'mariadb'; // UseMySQL
  readonly host: string; // Host Setting Data
  readonly port: number; // Use Port Number Data
  readonly username: string; // Root User Naming
  readonly password: string; // MySQL DataBase Password
  readonly database: string; // MySQL DataBase Name
  readonly entities: string[]; // MySQL Entity Setting
  readonly synchronize: boolean; // Local Data Syn
  readonly logging: LoggerOptions; // Log Data Setting Use
  readonly logger: 'advanced-console' | 'simple-console' | 'file' | 'debug' | Logger;
  // If query execution time exceed this given max execution time (in milliseconds) then logger will log this query.
  readonly maxQueryExecutionTime: number;
  readonly autoLoadEntities: boolean;
  namingStrategy: DefaultNamingStrategy;

  constructor(cfg) {
    super(cfg);
  }
}
