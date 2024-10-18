const express = require('express');
const router = express();
const { getUser , updateUser ,deleteUpdate} = require('../controllers/userController')
const { verifyToken } = require('../middleware/authMiddleware')

router.get('/' , verifyToken ,getUser)
router.put('/:id', verifyToken ,updateUser)
router.delete('/:id', verifyToken ,deleteUpdate)

module.exports = router ;