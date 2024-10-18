const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('../config/nodemailer')
require('dotenv').config();

const register = async (req,res) =>{
    try {
        const { username , password , email , role} = req.body;
        const existedUser = await User.findOne({username});
        if (existedUser) {
            res.status(401).json({message : 'User Already Exist'})
        }
        const hashedPasswrd = await bcrypt.hash(password , 10) 
        const newUser = new User({
            username , 
            password : hashedPasswrd ,
            email ,
            role
        })
        await newUser.save();
        res.status(201).json({message : 'User register Successfully.' , newUser})
    } catch (error) {
        res.status(500).json({message : 'Error registering.' , error : error.message})
    }
};
const login = async (req,res) =>{
    try {
        const { email , password } = req.body;
        const user = await User.findOne({email});
        const isMath =await bcrypt.compare(password , user.password);
        if (!user || !isMath) {
            res.status(401).json({message : 'Invalid crendentials.'})
        }
        const token  = jwt.sign({ id : user._id , role : user.role} , process.env.JWT_SECRET , {expiresIn : '1h'});
        res.cookie('token' , token , { httpOnly : true , secure : true})
        res.status(201).json({message : 'User register Successfully.' , token : token})
    } catch (error) {
        res.status(500).json({message : 'Error registering.' , error : error.message})
    }
};
const resetPassword = async (req,res) =>{
    try {
       const { email } = req.body ;
       const user = await User.findOne({email});
        if(!user){
            res.status(401).json({message : 'User not found.'})
        }
        const resetToken = jwt.sign({ id : user._id} , JWT_SECRET , { expiresIn : '1h'});
        await nodemailer.sendResetEmail(email , resetToken);
        res.status(201).json({message : 'Password reset email sent.'})
    } catch (error) {
        res.status(500).json({message : 'Error reset password.' , error : error.message})
    }
};

module.exports = { register , login , resetPassword}