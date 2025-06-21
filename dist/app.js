"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_route_1 = require("./app/routes/books.route");
const borrow_routes_1 = require("./app/routes/borrow.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/books', books_route_1.booksRouter);
app.use('/api/borrow', borrow_routes_1.borrowRouter);
app.get('/', (req, res) => {
    res.send('Library management application working perfectly.');
});
app.use((error, req, res, next) => {
    let errorCode = error.statusCode | 400;
    if (error) {
        res.status(errorCode).send({
            message: error.message,
            success: false,
            error: error
        });
    }
});
exports.default = app;
