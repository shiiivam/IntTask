const express = require('express');
const app = express();
const routeURL = require('./routes/routes.js')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()


mongoose.connect(process.env.DATABASE_STRING,{ useNewUrlParser: 
    true, useUnifiedTopology: true},()=>{
    console.log('Database connected');
})
app.use(express.json())
app.use(cors())
app.use('/route',routeURL)


const port = process.env.PORT || 4000;

app.listen(port,console.log(`Listening on port ${port}`));