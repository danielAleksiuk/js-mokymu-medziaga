import express from 'express';
import dotenv from 'dotenv';
import tasksRoutes from './routes/tasks.js';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.js';

dotenv.config();
const app = express();


app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);

    next();
})
app.use(cors());
app.use('/api/tasks', tasksRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Database connected')
        app.listen(process.env.PORT, () => {
            console.log('listening on port:' + process.env.PORT);
        });
    })
    .catch((error) => console.log(error));