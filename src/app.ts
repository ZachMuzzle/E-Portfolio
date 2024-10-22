import express, { Application, Request, Response } from 'express';
import path from 'path';
import { router as indexRouter } from './routes/index';
const app: Application = express();

// Middleware to parse JSON
app.use(express.json());
// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));
// Middleware to parse request body (if needed)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the routes
app.use('/', indexRouter);
// Catch-all route for 404
app.use((req, res) => {
  res.status(404).send('Page not found');
});

export default app;