const express = require('express');
const router = express();
const { createLesson , getLesson , updateLesson , deleteLesson } = require('../controllers/lessonController');
const { verifyToken } = require('../middleware/authMiddleware')

router.post('/' , verifyToken  , createLesson);
router.get('/' , verifyToken  , getLesson);
router.put('/:id' , verifyToken  , updateLesson);
router.delete('/:id' , verifyToken  , deleteLesson);

module.exports = router ;