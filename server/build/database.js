"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var config_1 = require("./config/config");
var pg_1 = require("pg");
var client;
exports.client = client;
if (config_1.config.environment === 'dev') {
    exports.client = client = new pg_1.Pool({
        database: config_1.config.devDB,
        user: config_1.config.user,
        password: config_1.config.password,
        host: config_1.config.host
    });
}
if (config_1.config.environment === 'test') {
    exports.client = client = new pg_1.Pool({
        database: config_1.config.testDB,
        user: config_1.config.user,
        password: config_1.config.password,
        host: config_1.config.host
    });
}
