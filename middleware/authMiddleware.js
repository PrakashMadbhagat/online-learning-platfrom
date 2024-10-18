
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req,res,next) =>{
    const  token = req.cookies.token;
    if (!token) {
        res.status(401).json({message : 'Access denied. Please logi in first' })
    }
    try {
        const decode = jwt.verify(token , process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(500).json({message : 'Invalid token. Authantication failed'});
    }
}

exports.checkAdmin = (req,res,next) =>{
    try {
        if (req.user.role !== 'admin') {
            res.status(401).json({message : 'Access denied.' })
        }
        next();
    } catch (error) {
        res.status(500).json({message : 'Invalid token. Authantication failed'});
    }
}