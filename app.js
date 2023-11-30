import "dotenv/config";
import express from 'express';
import session from 'express-session';
import Hello from './hello.js';
import Lab5 from './lab5.js';
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import cors from "cors";

const app = express();
app.use(
    cors({
        credentials: true,
        origin: "*"
    })
);
app.use(express.json());
// app.get('/hello', (req, res) => { res.send('Life is good!') })
// app.get('/', (req, res) => { res.send("Welcome to Full Stack Development!") })
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000);