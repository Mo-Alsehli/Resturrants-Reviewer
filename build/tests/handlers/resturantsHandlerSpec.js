"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../../index"));
var supertest_1 = __importDefault(require("supertest"));
describe("Testing That Handler Methods Exist", function () {
    it("The Index Handler", function () {
        (0, supertest_1.default)(index_1.default).get('/resturants').expect(200);
    });
    it("The Create Handler", function () {
        (0, supertest_1.default)(index_1.default).post('/resturants').expect(200);
    });
    it("The show Handler", function () {
        (0, supertest_1.default)(index_1.default).get('/resturants/:id').expect(200);
    });
    it("The Update Handler", function () {
        (0, supertest_1.default)(index_1.default).patch('/resturants/:id').expect(200);
    });
    it("The Delete Handler", function () {
        (0, supertest_1.default)(index_1.default).get('/resturants/:id').expect(200);
    });
});
