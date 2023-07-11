import express from 'express'
import dotenv from 'dotenv'
import { booksRouter } from './routes/bookRout.js'
import { userRouter } from './routes/usersRout.js'
dotenv.config();
const app = express();
const port = process.env.PORT || 6969;
app.use(express.json());

app.use(booksRouter);
app.use(userRouter);



app.listen(port, (err) => {
    err ? console.log(err) : console.log(`working on PORT:${port}`);
});