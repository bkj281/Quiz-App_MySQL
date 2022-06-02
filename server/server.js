require('dotenv').config();

// Express Imports
const express = require('express');
const app = express();
const cors = require('cors');

// Connecting Database
require("./config/db.js");


// Database Imports
const quiz = require('./routes/quiz');


// Express Usage
app.use(express.json());
app.use(cors());



// Routes
app.use('/quiz', quiz);




const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => res.send('Quiz App Server Running...'));


// Starting Server
app.listen(
  PORT,
  console.log(`Server started at Port ${PORT}`)
);