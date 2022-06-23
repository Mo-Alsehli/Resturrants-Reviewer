"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../../database");
var resturants_1 = require("../../models/resturants");
var store = new resturants_1.ResturantsStore();
describe("Testing The Model Methods To Be Defiend", function () {
    it("Testing Index Method Exist", function () {
        expect(store.index).toBeDefined();
    });
    it("Testing Create Method Exist", function () {
        expect(store.create).toBeDefined();
    });
    it("Testing Update Method Exist", function () {
        expect(store.update).toBeDefined();
    });
    it("Testing Delete Method Exist", function () {
        expect(store.delete).toBeDefined();
    });
});
describe("Testing The Logic Of Model Methods", function () {
    var resturant = {
        rest_name: 'kfc',
        rest_location: 'tanta',
        price_range: 5
    };
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var rest, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, store.create(resturant)];
                case 1:
                    rest = _a.sent();
                    resturant.id = rest.id;
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var conn, sql;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.client.connect()];
                case 1:
                    conn = _a.sent();
                    sql = 'DELETE FROM resturants;';
                    return [4 /*yield*/, conn.query(sql)];
                case 2:
                    _a.sent();
                    conn.release();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Testing The Index Method Logic", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.index()];
                case 1:
                    rests = _a.sent();
                    expect(rests.length).toBeGreaterThanOrEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Testing Show Method Model", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.show(resturant.id)];
                case 1:
                    rest = _a.sent();
                    expect(rest.rest_name).toBe('kfc');
                    expect(rest.rest_location).toBe('tanta');
                    return [2 /*return*/];
            }
        });
    }); });
    it("Testing Create Method Logic", function () { return __awaiter(void 0, void 0, void 0, function () {
        var newUser, create;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newUser = {
                        rest_name: 'mcdonals',
                        rest_location: 'cairo',
                        price_range: 4
                    };
                    return [4 /*yield*/, store.create(newUser)];
                case 1:
                    create = _a.sent();
                    expect(create.rest_name).toBe('mcdonals');
                    expect(create.rest_location).toBe('cairo');
                    expect(create.price_range).toBe(4);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Testing Update Method Logic", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updated, update;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updated = {
                        id: resturant.id,
                        rest_name: 'KFC',
                        rest_location: 'Elsanta',
                        price_range: 3
                    };
                    return [4 /*yield*/, store.update(updated)];
                case 1:
                    update = _a.sent();
                    expect(update.rest_name).toBe('KFC');
                    expect(update.rest_location).toBe('Elsanta');
                    expect(update.price_range).toBe(3);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Testing Delete Method Logic", function () { return __awaiter(void 0, void 0, void 0, function () {
        var deleted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.delete(resturant.id)];
                case 1:
                    deleted = _a.sent();
                    expect(deleted.rest_name).toBe('KFC');
                    return [2 /*return*/];
            }
        });
    }); });
});
