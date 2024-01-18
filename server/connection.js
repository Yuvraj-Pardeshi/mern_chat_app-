const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://admin:YuvrajPardeshi@cluster0.ppm5ju4.mongodb.net/chat-app?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
