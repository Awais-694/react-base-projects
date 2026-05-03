
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");
const todoRoutes = require('./routes/todoRoutes');


const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/todos', todoRoutes);


const Port = 5000;

app.listen(Port, ()=>{
    console.log(`Server is running on this : ${Port}`);
    connectDB();
});

