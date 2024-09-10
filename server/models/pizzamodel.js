const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://apoorvnandan3010:zHPkfOrNqPzKzNeu@cluster0.v5922.mongodb.net/mern-pizza', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

// var db= mongoose.connection
// db.on('connected',()=>{
//     console.log('mongo connection success');
// })
// db.on('error',()=>{
//     console.log('mongo connection fail');
// })

const pizzaSchema = mongoose.Schema({
    name: {type:String , required:true},
    sizes: [],
    prices: [],
    bestSeller : {type:Boolean},
    category :{type:String ,required:true},
    image:{type:String , required:true},
    description: {type:String , required:true}
},{ 
    timestamps:true,
})

const pizzaModel= mongoose.model('pizzas',pizzaSchema);

module.exports= pizzaModel;