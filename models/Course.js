const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : true
    },
    discription : {
        type : String ,
        required : true
    },
    lesson : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Lesson'
    }
});

module.exports = mongoose.model('Course' , courseSchema);