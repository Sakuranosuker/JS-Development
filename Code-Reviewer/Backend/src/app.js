const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors')

const app = express(); // creating a new instance of backend server
app.use(cors())
app.use(express.json())
app.get('/', (req,res) => { 
// Test Routes -- to see if server is working or not.
//  -- Here any request comes on route / then hello world is printed.Acts as a default route.
    res.send('Hello World')
})

app.use('/ai' , aiRoutes);
module.exports = app