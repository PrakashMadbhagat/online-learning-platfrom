const express = require('express');
const app = express();
const PORT = process.env.PORT
const mongoose = require('./database/database')
const authRoute = require('./routes/authRoutes')
const courseRoute = require('./routes/courseRoute')
const lessonRoute = require('./routes/lessonRoute')
const cookie_parser = require('cookie-parser');
require('dotenv').config();

app.use(cookie_parser());
app.use(express.json())
app.use('/api/auth', authRoute);
app.use('/api/course', courseRoute);
app.use('/api/lesson', lessonRoute);

app.listen(PORT, (req,res) =>{
    console.log(`Server is connected to the port ${PORT}`);
});