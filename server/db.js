const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://apoorvnandan3010:zHPkfOrNqPzKzNeu@cluster0.v5922.mongodb.net/mern-pizza', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

  module.exports = mongoose;