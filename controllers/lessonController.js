const Course = require('../models/Course')
const Lesson = require('../models/Lesson');

const createLesson = async (req, res) => {
    try {
        const lesson = new Lesson(req.body);
        await lesson.save();
        if (req.body.courseId) {
            Course.findByIdAndUpdate(req.body.courseId , {$push : { lesson :  lesson._id}})
        }
        res.status(201).json({ message: 'Create Lesson Successfully.', lesson })
    } catch (error) {
        res.status(500).json({ message: 'Error creating lesson.', error: error.message })
    }
}
const getLesson = async (req, res) => {
    try {
        const lessons = await Lesson.find()
        res.status(201).json({ message: 'Fetch Lesson Successfully.', lessons })
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lesson.', error: error.message })
    }
}
const updateLesson = async (req, res) => {
    try {
        const id = req.params.id
        const lesson = await Lesson.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json({ message: 'Update Lesson Successfully.', lesson })
    } catch (error) {
        res.status(500).json({ message: 'Error updating lesson.', error: error.message })
    }
}
const deleteLesson = async (req, res) => {
    try {
        const id = req.params.id;
        const lesson = await Lesson.findByIdAndDelete(id)
        res.status(201).json({ message: 'Delete Lesson Successfully.' })
    } catch (error) {
        res.status(500).json({ message: 'Error deleteing lesson.', error: error.message })
    }
}
module.exports = { createLesson , getLesson , updateLesson , deleteLesson }