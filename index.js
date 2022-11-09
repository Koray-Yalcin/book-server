import express from 'express';
import { connectDB } from './db.js';
import router from './router.js';
import cors from 'cors';


const app = express();
const port = 5000;

app.use(cors({origin:true,credentials: true}));

app.use(express.json());

app.use('/books', router);

app.use(cors({origin: 'http://localhost:5000'}));

app.listen(port, () => {
    console.log('Server started on port ' + port);
    connectDB();
});