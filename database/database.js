const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then((req,res) =>{
    console.log("Mongodb is connected...");    
}).catch((error) =>{
    console.log("Server Error" , error.message);
    
})
