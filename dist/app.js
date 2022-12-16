"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./routes/router"));
const server_1 = __importDefault(require("./server/server"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = server_1.default.init(3000);
server.app.use(body_parser_1.default.json());
server.app.use(router_1.default);
server.start(() => {
    console.log(`Running on port ${server.port}`);
});
