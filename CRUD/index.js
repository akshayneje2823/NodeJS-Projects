import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users.js'

const app = express();
const PORT = 5000;

// Routes
app.get('/', (req, res) => {
    res.send("<h1>Hello from Homepage </h1>")
})


app.use(bodyParser.json());
app.use('/users', userRouter)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))