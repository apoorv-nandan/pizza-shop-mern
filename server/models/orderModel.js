const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {type:String , required:true},
    email :{type:String ,required:true},
    userid:{type:String , required:true},
    orderItems:[],
    orderAmount:{type:String , required :true},
    isDelivered : {type:Boolean,required:true,default:false},
},{ 
    timestamps:true,
})

const orderModel= mongoose.model('orders',orderSchema);

module.exports= orderModel;