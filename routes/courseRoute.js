const express = require('express');
const router = express();
const { createCourse , getCourse , updateCourse , deleteCourse , EnrollmentInClass } = require('../controllers/courseController');
const { verifyToken , checkAdmin} = require('../middleware/authMiddleware')

router.post('/' , verifyToken , checkAdmin , createCourse);
router.get('/' , verifyToken , checkAdmin , getCourse);
router.put('/:id' , verifyToken , checkAdmin , updateCourse);
router.delete('/:id' , verifyToken , checkAdmin , deleteCourse);
router.post('/enroll' , verifyToken , checkAdmin , EnrollmentInClass);

module.exports = router ;