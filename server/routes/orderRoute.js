const express= require('express');
const router = express.Router();
const orderModel= require('../models/orderModel');

router.post('/placeOrder',async(req,res) => {
     const {user, total, cartItems} = req.body;
     try{
        const newOrder = new orderModel({
            name:user.name,
            email:user.email,
            userid:user._id,
            orderItems:cartItems,
            orderAmount:total
        });
        newOrder.save();
        res.send('Order Placed');
     }
     catch(error){
        console.log(error);
        res.status(400).json({message:error});
     }
});

router.post('/getOrders', async(req,res) => {
    const {userid} = req.body;
    try{
        const orders =await orderModel.find({userid});
        // console.log(orders);
        res.send(orders);
    }
    catch(error){
        console.log(error);
        res.status(400).json({message:error});
    }
});

module.exports = router;