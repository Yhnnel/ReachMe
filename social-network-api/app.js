
//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//database connection
mongoose.connect(process.env.DB_URI,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
    useFindAndModify: true,
    useCreateIndex: true
})
.then(() => console.log("Connected to DB..."))
.catch((err) => console.log(err));

//route prefix
app.use("/user", require("./routes/userRoutes"));

//start server
app.listen(port, () => console.log(`Server running on:http://localhost:${port}/`));