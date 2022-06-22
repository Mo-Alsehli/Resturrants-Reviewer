import {config} from './config/config';
import {Pool} from 'pg';

let client: Pool;

if(config.environment === 'dev'){
    client = new Pool({
        database: config.devDB,
        user: config.user,
        password: config.password,
        host: config.host
    })
}

if(config.environment === 'test'){
    client = new Pool({
        database: config.testDB,
        user: config.user,
        password: config.password,
        host: config.host
    })
}

export {client};