"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = require("./config/config");
var body_parser_1 = __importDefault(require("body-parser"));
var resturants_1 = __importDefault(require("./handlers/resturants"));
var reviews_1 = __importDefault(require("./handlers/reviews"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "client/build")));
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "client/build")));
}
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
var port = config_1.config.port || 5000;
app.get("/", function (req, res, next) {
    res.send("SERVER STARTED");
    next();
});
(0, resturants_1.default)(app);
(0, reviews_1.default)(app);
app.listen(port, function () {
    console.log("Server Started At: http://localhost:".concat(port));
});
exports.default = app;
