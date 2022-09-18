const express = require('express');
const mongoose = require('mongoose');
const dotenev = require('dotenv');
let userouter = require('./routes/productRouter')

const app = express();

// configure  or read  env variables
dotenev.config({ path: './config/config.env' });

let port = process.env.PORT;
// let host_name = process.env.HOST_NAME


// Home Route 
app.get('/', (req, res) => {
    res.send("This Is Home Route")
});

// Using Routes
app.use('/api', userouter);



// mongoDB connectionmongosh

mongoose.connect(process.env.MONGO_DB_LOCAL_URL)
    .then((respone) => {
        console.log("connetced to mnogodDB!")
    })
    .catch((err) => {
        if(err) throw err;
        console.error("Error..! Something is wrong.")
    })

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`server is running on port ${port}`)
}
);















