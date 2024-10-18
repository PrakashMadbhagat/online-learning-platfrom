const mongoose = require('mongoose');
const Course = require('../models/Course')
const Enrollment = require('../models/Enrollment');

const createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json({ message: 'Create Course Successfully.', course })
    } catch (error) {
        res.status(500).json({ message: 'Error creating course.', error: error.message })
    }
}
const getCourse = async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(201).json({ message: 'Fetch Course Successfully.', courses })
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course.', error: error.message })
    }
}
const updateCourse = async (req, res) => {
    try {
        const id = req.params.id
        const course = await Course.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json({ message: 'Update Course Successfully.', course })
    } catch (error) {
        res.status(500).json({ message: 'Error updating course.', error: error.message })
    }
}
const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await Course.findByIdAndDelete(id)
        res.status(201).json({ message: 'Delete Course Successfully.' })
    } catch (error) {
        res.status(500).json({ message: 'Error deleteing course.', error: error.message })
    }
}
const EnrollmentInClass = async (req, res) => {
    try {
        const courseId = req.body;
        const userId = req.user.id;

        if(!mongoose.isValidObjectId(courseId)){
            res.status(401).json({ message: 'Invalid Course ID.' })
        }
        const enrollment = new Enrollment({ userId , courseId });
        await enrollment.save();
        res.status(201).json({ message: 'Enrollment in Course Successfully.' })
    } catch (error) {
        res.status(500).json({ message: 'Error Enrollment in Course .', error: error.message })
    }
}

module.exports = { createCourse, getCourse, updateCourse, deleteCourse, EnrollmentInClass }