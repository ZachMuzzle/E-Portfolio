"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = require("./routes/index");
const aboutMe_1 = require("./routes/aboutMe");
const resume_1 = require("./routes/resume");
const projects_1 = require("./routes/projects");
const contact_1 = require("./routes/contact");
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
app.use('/about-me', aboutMe_1.router);
app.use('/resume', resume_1.router);
app.use('/projects', projects_1.router);
app.use('/contact', contact_1.router);
// Catch-all route for 404
app.use((req, res) => {
    res.status(404).send('Page not found');
});
exports.default = app;
