const express = require('express');
const mongoose = require('mongoose');
const dotenev = require('dotenv');
const morgan = require('morgan')
let userouter = require('./routes/productRouter');

const app = express();

// configure or read env variables
dotenev.config({ path: './config/config.env' });

let port = process.env.PORT;
let host_name = process.env.HOST_NAME

app.use(morgan('tiny'));//HTTP Logger

// Home Route 
app.get('/', (req, res) => {
    res.send("This Is Home Route")
});

// Using Routes
app.use('/api', userouter);


// configure express to accept form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// mongoDB connectionmongosh

mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then((respone) => {
        console.log("connetced to mnogodDB!")
    })
    .catch((err) => {
        if (err) throw err;
        console.error("Error..! Something is wrong.")
    })

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`server is running on port ${port}`)
}
);















