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

const CONNECTION_STRING =
    process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.disconnect();
mongoose.connect(CONNECTION_STRING);
const OROGIN_URL = process.env.FRONTEND_URL || "http://localhost:3000"
const app = express();
app.use(
    cors({
        credentials: true,
        origin: OROGIN_URL
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
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