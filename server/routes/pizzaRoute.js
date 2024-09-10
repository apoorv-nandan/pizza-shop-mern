const express= require('express');
const router = express.Router();
const pizzaModel= require('../models/pizzamodel');

router.get('/getPizzas', async(req,res) => {
    try{
        const pizza =await pizzaModel.find({});
        console.log(pizza);
        res.send(pizza);
    }
    catch(error){
        res.status(400).json({message:error});
    }
});

module.exports = router;