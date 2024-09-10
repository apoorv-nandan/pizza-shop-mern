const express= require('express');
const router = express.Router();
const userModel= require('../models/userModel');

router.post('/register', async(req,res) => {
    try{
        const {name, email, password} = req.body;
        const newUser = new userModel({name, email,password});
        newUser.save();
        res.send('User Registered successfully');
    }
    catch(error){
        res.status(400).json({message:error});
    }
});

router.post('/login', async(req,res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.find({email,password});
        if(user.length>0){
            const currentUser ={
                name:user[0].name,
                email:user[0].email,
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