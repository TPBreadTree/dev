import { Injectable } from "@nestjs/common";
import yaml from 'js-yaml';
import fs from 'fs';
import * as _ from 'lodash';

// YAML Setting logic -> OK? TESTING DOCKER && KUBER
@Injectable()
export class ConfigService {
    readonly env: string;
    readonly db: string; //env MySQL Sturct Setting
    readonly port: number // env Port Setting

    constructor() {
        const configs: Array<any> = yaml.loadAll(fs.readFileSync(__dirname + '/../../.config.yml', 'utf8')) || [];
        let configMap: { [key: string]: any}  = {};

        for (const config of configs) {
            const nodeEnv = process.env.NODE_ENV;
            if (!config.env || config.env === nodeEnv) {
            configMap = _.merge(configMap, config);
            }
        }
        //this.db = new DBConfig(configMap.db) // Setting ADD
        //this.port
    }
}