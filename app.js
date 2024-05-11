const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8000;
const chatRoutes = require('./routes/chat.routes')

app.use(chatRoutes)

app.listen(port, function(){
    console.log(`Server connected at ${port}`)
})