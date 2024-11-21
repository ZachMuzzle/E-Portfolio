import express, { Application, Request, Response } from 'express';
import path from 'path';
import { router as indexRouter } from './routes/index';
import {router as aboutMeRouter } from './routes/aboutMe';
import {router as resumeRouter } from './routes/resume';
import {router as projectsRouter } from './routes/projects';
import {router as contactRouter } from './routes/contact';


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
app.use('/about-me', aboutMeRouter);
app.use('/resume', resumeRouter);
app.use('/projects', projectsRouter);
app.use('/contact', contactRouter);

// Catch-all route for 404
app.use((req, res,) => {
  res.status(404).send('Page not found');
});

export default app;