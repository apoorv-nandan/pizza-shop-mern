const express = require('express');
const cors = require('cors');
const pizzaRoute = require('./routes/pizzaRoute');
const userRoute = require('./routes/userRoute');
const pizzaM = require ('./models/pizzamodel');
const orderRoute = require ('./routes/orderRoute');

const app= express();
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000', // Allow only requests from this origin
    methods: 'GET,POST', // Allow only these methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));

app.use('/api/pizzas',pizzaRoute);
app.use('/api/users',userRoute);
app.use('/api/orders',orderRoute);

app.get('/',(req,res)=>{
    res.send('server working');
})
// app.get('/getPizzas',async (req,res) =>{
//     const p=await pizzaM.find({});
//     res.send(p);
// })

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log('server running'));