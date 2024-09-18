const express= require('express');
const router = express.Router();
const userModel= require('../models/userModel');

router.post('/register', async(req,res) => {
    try{
        const {name, email,phnumber, password} = req.body;
        const newUser = new userModel({name, email,phnumber,password});
        const emailexist = await userModel.find({email});
        const phexist = await userModel.find({phnumber});
        if(emailexist || phexist){
            res.status(400).json({message:"User already exists"});
        }
        else{
            newUser.save();
            res.send('User Registered successfully');
        }
    }
    catch(error){
        res.status(500).json({message:"Internal Server error"});
    }
});

router.post('/login', async(req,res) => {
    try{
        const {email, password,em} = req.body;
        var user;
        if(em === true)
        user = await userModel.find({email,password});
        else 
        user = await userModel.find({phnumber:email,password:password});
        if(user.length>0){
            const currentUser ={
                name:user[0].name,
                email:user[0].email,
                phnumber:user[0].phnumber,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
            }
            res.send(currentUser);
        }
        else{
            res.status(400).json({message:'User Login failed'});
        }
        
    }
    catch(error){
        res.status(400).json({message:error});
    }
});

module.exports = router;