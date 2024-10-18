const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User' ,
        required : true
    },
    courseId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Course' ,
        required : true
    },
    completedLesson : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Lesson"
    }
});

module.exports = mongoose.model('Enrollment' , enrollmentSchema);