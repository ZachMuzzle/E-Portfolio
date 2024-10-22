"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = require("./routes/index");
const app = (0, express_1.default)();
// Middleware to parse JSON
app.use(express_1.default.json());
// Middleware to serve static files (HTML, CSS, JS)
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Middleware to parse request body (if needed)
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Use the routes
app.use('/', index_1.router);
// Catch-all route for 404
app.use((req, res) => {
    res.status(404).send('Page not found');
});
exports.default = app;
