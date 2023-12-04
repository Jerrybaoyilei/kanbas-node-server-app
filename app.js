import "dotenv/config";
import express from 'express';
import session from 'express-session';
import Hello from './hello.js';
import Lab5 from './lab5.js';
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
app.use(
    session(sessionOptions)
);
app.use(express.json());
// app.get('/hello', (req, res) => { res.send('Life is good!') })
// app.get('/', (req, res) => { res.send("Welcome to Full Stack Development!") })
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000);